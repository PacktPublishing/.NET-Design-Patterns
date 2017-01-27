/*
class SpellCheckerViewModel : INotifyPropertyChanged
{
    private BindingList<string> _logs;
    private ISubject<string> _logChanged;
    public BindingList<string> Logs
    {
        get
        {
            return this._logs;
        }

        set
        {
            if (value != this._logs)
            {
                this._logs = value;
                NotifyPropertyChanged();
            }
        }
    }

    public void AddToLog(string text)
    {
        _logChanged.OnNext(text);
    }

    public SpellCheckerViewModel(ISpellCheckerModel spellChecker)
    {
        _logs = new BindingList<string>();
        _logChanged = new Subject<string>();
        Func<string, IObservable<string>> GetSuggestions = (searchText) =>
        {
            AddToLog(string.Format("Searching for suggestions : {0}", searchText));
            return _spellChecker.SpellCheck(searchText, 5).ToObservable<string>();
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

    private void OnSuggestError(Exception ex)
    {
        AddToLog(string.Format("Suggestion Error : {0}", Error));
    }

    private void OnSuggestComplete()
    {
        AddToLog("Suggestion Complete!");
    }

    private void OnEachSuggest(string searchText)
    {
        AddToLog(string.Format("Suggestion Added : {0}", searchText));
    }

    private IObservable<string> GetSuggestions(string searchText)
    {
        AddToLog(string.Format("Searching for suggestions : {0}", searchText));
    }

    private void OnEachLog(string searchText)
    {
        Logs.Add(searchText);
    }

    //Log on background thread and return result on dispatcher.
    private void DoLogging(IObservable<string> sequence)
    {
        IsProcessing = true;
        Error = null;
        sequence
        .SubscribeOn(NewThreadScheduler.Default)
        .ObserveOn(_dispatcher)
        .Subscribe(Logs.Add);
    }
}


public frmSpellChecker()
{
    //Data Binding Is Done Here
    lstBoxSuggestions.DataSource = _spellCheckerViewModel.Corrections;
    lstBoxLog.DataSource = _spellCheckerViewModel.Logs;
}
*/
