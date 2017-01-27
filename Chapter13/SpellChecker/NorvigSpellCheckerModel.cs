using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Disposables;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;


using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Reactive.Concurrency;
using System.Reactive.Linq;
using System.Runtime.CompilerServices;
using System.Reactive;

namespace SpellChecker
{
    public interface ISpellCheckerModel
    {
        /// <summary>
        /// Provides suitable recommendations/corrections
        /// </summary>
        /// <param name="word">Word whose spelling is checked</param>
        /// <param name="count">No. of Corrections Needed</param>
        /// <returns>List of requested corrections, based on count</returns>
        IEnumerable<string> SpellCheck(string word, int count);
    }

    /// <summary>
    /// Implementation of a Spell Checker based on Peter Norvig's Post
    /// http://norvig.com/spell-correct.html
    /// </summary>
    public sealed class NorvigSpellCheckerModel : ISpellCheckerModel
    {
        private static readonly Lazy<NorvigSpellCheckerModel> spellCheckerInstance =
            new Lazy<NorvigSpellCheckerModel>(() => new NorvigSpellCheckerModel());
        private string alphabets = @"abcdefghijklmnopqrstuvwxyz";
        private readonly ConcurrentDictionary<string, int> WORDS = new ConcurrentDictionary<string, int>();
        private string trainingFile = @"D:\Packt\Code\NSC_Training_Model.txt";
        private NorvigSpellCheckerModel()
        {
            //Training Model Creation
            var Train = Task.Factory.StartNew(() =>
            {
                foreach (var line in File.ReadLines(trainingFile)
                    .AsParallel())
                {
                    foreach (Match match in Regex.Matches(line, @"([a-z]+)", RegexOptions.IgnoreCase)
                        .AsParallel())
                    {
                        WORDS.AddOrUpdate(match.Value, 0, (k, v) => v + 1);
                    }
                }
            });
            Task.WaitAll(Train);//Ensures Training Model is Created!
        }
        /// <summary>
        /// Returns SINGLETON instance of NorvigSpellCheckerModel 
        /// using .NET 4's Lazy<T> type
        /// </summary>
        public static NorvigSpellCheckerModel Instance
        {
            get
            {
                return spellCheckerInstance.Value;
            }
        }
        public IEnumerable<string> SpellCheck(string word, int count)
        {
            //All edits that are 1 edit away from word
            Func<string, Task<IEnumerable<string>>> edits1 = (tWord) => Task.Factory.StartNew(() =>
            {
                return from i in Enumerable.Range(0, tWord.Length)
                       select new { part1 = tWord.Substring(0, i), part2 = tWord.Substring(i) };//splits
            })
            .ContinueWith(ant =>
            {
                return (from splits in ant.Result
                        where splits.part2 != ""
                        select splits.part1 + splits.part2.Substring(1))//deletes
                        .Union(from splits in ant.Result
                               where splits.part2.Length > 1
                               select splits.part1 + splits.part2[1] + splits.part2[0] + splits.part2.Substring(2))//transposes
                        .Union(from splits in ant.Result
                               from c in alphabets
                               where splits.part2 != ""
                               select splits.part1 + c + splits.part2.Substring(1))//replaces
                        .Union(from splits in ant.Result
                               from c in alphabets
                               select splits.part1 + c + splits.part2);//inserts
            });
            //All edits that are 2 edits away from word
            Func<string, Task<IEnumerable<string>>> edits2 = (tWord) => Task.Factory.StartNew(() =>
            {
                return (from e1 in edits1(tWord).Result
                        from e2 in edits1(e1).Result
                        where WORDS.ContainsKey(e2)
                        select e2);
            });
            //Returns the subset of words that appear in the dictionary of WORDS
            Func<IEnumerable<string>, Task<IEnumerable<string>>> known = (tWords) => Task.Factory.StartNew(() =>
            {
                return (from e1 in tWords
                        where WORDS.ContainsKey(e1)
                        select e1);
            });
            //Generate all possible spelling corrections for word
            Func<string, Task<IEnumerable<string>>> candidates = (tWord) => Task.Factory.StartNew(() =>
            {
                List<string> tWords = new List<string>();
                tWords.Add(word);
                return ((from e1 in known(tWords).Result
                         select e1)
                        .Union(from e2 in known(edits1(tWord).Result).Result
                               select e2)
                        .Union(from e3 in known(edits2(tWord).Result).Result
                               select e3)
                        .Union(from e4 in tWords
                               select e4))
                                    .Distinct();
            });
            //Returns most probable spelling correction for word in the order of
            //their probability of occurrance in the corpus
            Func<string, Task<IEnumerable<string>>> corrections = (tWord) => Task.Factory.StartNew(() =>
            {
                var N = (from x in WORDS
                         select x.Value).Sum();
                List<string> tWords = new List<string>();
                return (from e1 in candidates(tWord).Result
                        .OrderByDescending(e1 => WORDS.ContainsKey(e1) ? (float)WORDS[e1] / (float)N : 0)
                        select e1).Take(count);
            });
            return corrections(word).Result;
        }
    }
}
