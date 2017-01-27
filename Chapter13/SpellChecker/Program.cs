using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive;
using System.Reactive.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using SpellChecker;
using System.Windows.Threading;
using System.Reactive.Concurrency;

namespace SpellChecker
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main ()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new frmSpellChecker());
            //ObservableEventsDemo();
        }

        static void ObservableEventsDemo ()
        {
            // Input form
            var txtBoxSpellCorrect = new TextBox();
            var lstBoxSuggestions = new ListBox
            {
                Top = txtBoxSpellCorrect.Height + 10
            };
            var frmSpellChecker = new Form
            {
                Controls = { txtBoxSpellCorrect, 
                 lstBoxSuggestions 
               }
            };

            //Dispatcher scheduler for the UI thread
            var _dispatcher = new DispatcherScheduler(
                System.Windows.Threading
                .Dispatcher.CurrentDispatcher);

            Action<string> onInputChange = word =>
                {
                    lstBoxSuggestions.Items.Clear();
                    Console.WriteLine("Word Changed: " + word);
                };

            var input = Observable
                .FromEventPattern(txtBoxSpellCorrect, "TextChanged")
                .Select(evt => (( TextBox ) evt.Sender).Text)
                .Timestamp()
                .Select(evt => evt.Value)
                .Where(evt => evt.Length > 3)
                .DistinctUntilChanged()
                .Do(onInputChange);

    Func<string, IObservable<string>> matches =
        searchText => NorvigSpellCheckerModel
            .Instance
            .SpellCheck(searchText, 5)
            .ToObservable<string>();

    var result = from term in input
                 from words in matches(term)
                 .TakeUntil(input)
                 .Finally(() =>
                     {
                         Console.WriteLine(
                             "Disposed Lookup For: " + term);
                     })
                 select words;

    Action<string> OnEachSuggest = word =>
        {
            lstBoxSuggestions.Items.Add(word);
            Console.WriteLine("Match: " + word);
        };

    Action<Exception> OnSuggestError = ex =>
    {
        Console.WriteLine("Error: " + ex.Message);
    };

    Action OnSuggestComplete = () =>
    {
        lstBoxSuggestions.Items.Clear();
        Console.WriteLine("Suggestion Complete!!!");
    };

    using (result
        .OnErrorResumeNext(Observable.Empty<string>())
        .ObserveOn(_dispatcher)
        .SubscribeOn(Scheduler.Default)
        .Subscribe(
            OnEachSuggest,
            OnSuggestError,
            OnSuggestComplete))

    Application.Run(frmSpellChecker);
        }
    }
}
