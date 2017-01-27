using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RxProjects
{
    class Program
    {
        static void Main(string[] args)
        {
            new EvenNumberObservable(
                new[] { 1,2, 3, 4,6,7,8 })
                .Subscribe(new SimpleObserver());
            Console.ReadLine();
        }
    }
}
