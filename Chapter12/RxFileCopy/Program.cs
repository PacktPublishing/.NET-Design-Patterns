
using System;
using System.Linq;
using System.Reactive;
using System.Reactive.Linq;
using System.Reactive.Disposables;
using System.Reactive.Subjects;
using System.IO;
using System.Collections.Generic;

namespace RxFileCopy
{
    class Program
    {
        private static IEnumerable<T> Unfold<T>(T seed, Func<T, T> accumulator)
        {
            var nextValue = seed;
            while (true)
            {
                yield return nextValue;
                nextValue = accumulator(nextValue);
            }
        }
        static void Main(string[] args)
        {
            //int[] number_array = new int[] { 1, 2, 3, 4, 5, 6, 8 };
            //IEnumerable<int> number_sequence = number_array;
            //foreach (var n in number_sequence)
            //{
            //    if (n % 2 == 0)
            //        Console.WriteLine(n);
            //}
            var naturalNumbers = Unfold(2, i => i + 2);
            Console.WriteLine("1st 10 Natural numbers");
            foreach (var naturalNumber in naturalNumbers.Take(10))
            {
                Console.WriteLine(naturalNumber);
            }
           
             
        }
    }
}
