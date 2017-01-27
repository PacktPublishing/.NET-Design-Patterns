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

namespace SpellChecker
{
    class SpellCheckerViewModel : INotifyPropertyChanged
    {
        private BindingList<string> _corrections;
        private ISpellCheckerModel _spellChecker;
        private ISubject<string> _searchChanged;
        private IScheduler _dispatcher;
        public bool IsProcessing { get; set; }
        public string Error { get; set; }
        public event PropertyChangedEventHandler PropertyChanged;
        public BindingList<string> Corrections
        {
            get
            {
                return this._corrections;
            }

            set
            {
                if (value != this._corrections)
                {
                    this._corrections = value;
                    NotifyPropertyChanged();
                }
            }
        }

        private void NotifyPropertyChanged([CallerMemberName] String propertyName = "")
        {
            if (PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        public void SearchChanges(string text)
        {
            _searchChanged.OnNext(text);
        }

        public ISubject<string> SearchChanged
        {
            get
            {
                return _searchChanged;
            }
        }
        public SpellCheckerViewModel(ISpellCheckerModel spellChecker)
        {
            _spellChecker = spellChecker;
            _dispatcher = new DispatcherScheduler(System.Windows.Threading.Dispatcher.CurrentDispatcher);
            _corrections = new BindingList<string>();
            _searchChanged = new Subject<string>();
            Func<string, IObservable<string>> GetSuggestions = (searchText) =>
            {
                IsProcessing = true;
                Corrections.Clear();
                Error = null;
                return _spellChecker.SpellCheck(searchText, 5).ToObservable<string>();
            };
            var searches = this.SearchChanged
                .Select(GetSuggestions);
            searches
                .Switch()//Provides the most recent changes in this sequence
                .Where(s => s.Length > 3)//Do lookup only for 4 letter words and above
                .DistinctUntilChanged()//Do lookup only if new value entered is different from old
                .SubscribeOn(Scheduler.Default)//Search on background thread
                .ObserveOn(_dispatcher)//Return result on dispatcher
                .Subscribe(OnEachSuggest, OnSuggestError, OnSuggestComplete);
        }
        private void OnSuggestError(Exception ex)
        {
            IsProcessing = false;
            Error = ex.Message;
        }
        private void OnSuggestComplete()
        {
            IsProcessing = false;
        }
        private void OnEachSuggest(string searchText)
        {
            Corrections.Add(searchText);
        }
    }
}

