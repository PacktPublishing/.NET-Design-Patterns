using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Reactive.Concurrency;
using System.Reactive.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Reactive;
using System.Reactive.Disposables;
using System.Reactive.Subjects;
namespace SpellChecker {
    class SpellCheckerViewModel : INotifyPropertyChanged {
        private BindingList<string> _corrections;
        private BindingList<string> _logs;
        private ISpellCheckerModel _spellChecker;
        private ISubject<string> _searchChanged;
        private ISubject<string> _logChanged;
        private IScheduler _dispatcher;
        public bool IsProcessing {
            get;
            set;
        }
        public string Error {
            get;
            set;
        }
        public event PropertyChangedEventHandler PropertyChanged;
        public BindingList<string> Corrections {
            get {
                return this._corrections;
            }
            set {
                if ( value != this._corrections ) {
                    this._corrections = value;
                    NotifyPropertyChanged();
                }
            }
        }
        public BindingList<string> Logs {
            get {
                return this._logs;
            }
            set {
                if ( value != this._logs ) {
                    this._logs = value;
                    NotifyPropertyChanged();
                }
            }
        }
        private void NotifyPropertyChanged([CallerMemberName] String propertyName = "") {
            if ( PropertyChanged != null ) {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }
        public void SearchChanges(string text) {
            _searchChanged.OnNext(text);
        }
        public IObservable<string> LogChanged {
            get {
                return _logChanged;
            }
        }
        public void AddToLog(string text) {
            _logChanged.OnNext(text);
        }
        public SpellCheckerViewModel(ISpellCheckerModel spellChecker) {
            _spellChecker = spellChecker;
            _dispatcher = new DispatcherScheduler(System.Windows.Threading.Dispatcher.CurrentDispatcher);
            _corrections = new BindingList<string>();
            _logs = new BindingList<string>();
            _searchChanged = new Subject<string>();
            _logChanged = new Subject<string>();
            Func<string, IObservable<string>> GetSuggestions = (searchText) => {
                IsProcessing = true;
                Corrections.Clear();
                Error = null;
                AddToLog(string.Format("Searching for suggestions : {0}", searchText));
                return _spellChecker
                .SpellCheck(searchText, 5)
                .ToObservable<string>();
            };
            var searches = _searchChanged
            .Select(GetSuggestions)
            .Finally(() => AddToLog("Search DISPOSED!!!"));
            searches
            .Switch()
            .Where(s => s.Length > 3)
            .DistinctUntilChanged()
            .SubscribeOn(Scheduler.Default)
            .ObserveOn(_dispatcher)
            .Subscribe(OnEachSuggest, OnSuggestError, OnSuggestComplete);
            DoLogging(_logChanged);
        }
        private void OnSuggestError(Exception ex) {
            IsProcessing = false;
            Error = ex.Message;
            AddToLog(string.Format("Suggestion Error : {0}", Error));
        }
        private void OnSuggestComplete() {
            IsProcessing = false;
            AddToLog("Suggestion Complete!");
        }
        private void OnEachSuggest(string searchText) {
            AddToLog(string.Format("Suggestion Added : {0}", searchText));
            Corrections.Add(searchText);
        }
        private IObservable<string> GetSuggestions(string searchText) {
            IsProcessing = true;
            Corrections.Clear();
            Error = null;
            AddToLog(string.Format("Searching for suggestions : {0}", searchText));
            return _spellChecker.SpellCheck(searchText, 5).ToObservable<string>();
        }
        private void OnEachLog(string searchText) {
            Logs.Add(searchText);
        }
        //Search on background thread and return result on dispatcher.
        private void DoLogging(IObservable<string> sequence) {
            IsProcessing = true;
            Error = null;
            sequence
            .SubscribeOn(ThreadPoolScheduler.Instance)
            .ObserveOn(_dispatcher)
            .Subscribe(OnEachLog);
        }
    }
}
