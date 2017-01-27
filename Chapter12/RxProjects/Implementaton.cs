using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RxProjects
{
    class EmptyDisposable : IDisposable
    {
        internal Action action {get;  set;}
        void IDisposable.Dispose()
        {  this.action(); }
    }

    class EvenNumberObservable : IObservable<int>
    {
        public EvenNumberObservable(IEnumerable<int> numbers)
        {
            this._numbers = numbers;
        }

        private IEnumerable<int> _numbers;

        public IDisposable Subscribe(IObserver<int> observer)
        {
            foreach(int number in _numbers)
            {
                if (number%2 == 0 )
                     observer.OnNext(number);
            }
            observer.OnCompleted();

           return new EmptyDisposable { action = () => { ;  } }; 
        }
    }
        

    class SimpleObserver : IObserver<int>
    {
        public void OnNext(int value)
        {
            Console.WriteLine(value);
        }

        public void OnCompleted()
        {
            Console.WriteLine("Completed");
        }

        public void OnError(Exception ex)
        {
            Console.WriteLine("An Error Encountered");
            throw ex;
        }
    }   
}
