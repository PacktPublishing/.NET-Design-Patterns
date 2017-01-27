using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;

namespace RxProjects
{
    class Program
    {
        static void Main(string[] args)
        {
            GetEvenNumbers();
            GetPythagoreanTriples(100);
            //SkipWhileDemo();
            //TakeWhileDemo();
            //SkipLastDemo();
            //TakeLastDemo();
        }

        static void GetEvenNumbers()
        {
            new EvenNumberObservable(
                new[] { 1,2, 3, 4,6,7,8 })
                .Subscribe(new SimpleObserver());
            Console.ReadLine();
        }

        static void GetPythagoreanTriples(int range)
        {
            var result =
                   from i in Observable.Range(1, range)
                   from j in Observable.Range(1, range)
                   from k in Observable.Range(1, range)
                   where k * k == i * i + j * j
                   select new { a = i, b = j, c = k };
            IDisposable subscription = result.Subscribe(
                                        x => Console.WriteLine("OnNext: {0}", x), //prints out the value being pushed
                                        ex => Console.WriteLine("OnError: {0}", ex.Message),
                                        () => Console.WriteLine("OnCompleted"));
            Console.ReadLine();
        }

static void SkipWhileDemo()
{
    ObservableCollection<int> numbers = new ObservableCollection<int>(new List<int> { 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0 });
    numbers
    .SkipWhile(i => i < 5)
    .Subscribe(new SimpleObserver());
    Console.ReadLine();
}

static void TakeWhileDemo()
{
    ObservableCollection<int> numbers = new ObservableCollection<int>(new List<int> { 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0 });
    numbers
    .TakeWhile(i => i < 5)
    .Subscribe(new SimpleObserver());
    Console.ReadLine();
}

static void SkipLastDemo()
{
    var numbers = new Subject<int>();
    numbers
    .SkipLast(2)
    .Subscribe(Console.WriteLine);
    numbers.OnNext(1);
    numbers.OnNext(2);
    numbers.OnNext(3);
    numbers.OnNext(4);
    numbers.OnNext(5);
    numbers.OnCompleted();
    Console.ReadLine();
}

static void TakeLastDemo()
{
    var numbers = new Subject<int>();
    numbers
    .TakeLast(2)
    .Subscribe(Console.WriteLine);
    numbers.OnNext(1);
    numbers.OnNext(2);
    numbers.OnNext(3);
    numbers.OnNext(4);
    numbers.OnNext(5);
    numbers.OnCompleted();
    Console.ReadLine();
}
    }
}
