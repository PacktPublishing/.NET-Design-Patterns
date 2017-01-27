using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enumerables
{
    public class CustomList<T> : IEnumerable<T>
    {
        //------ A Fixed Length array to 
        //------ Example very simple
        T[] _Items = new T[100];
        int next_Index = 0;

        public CustomList() { }

        public void Add(T val)
        {
            // We are adding value without robust
            // error checking
            _Items[next_Index++] = val;

        }



        public IEnumerator<T> GetEnumerator()
        {
            foreach (T t in _Items)
            {
                //---only reference objects can be populated 
                //-- and checked for null
                if (t == null) { break; }

                // Resume the next function call here

                yield return t;
            }
        }




        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {

            return this.GetEnumerator();
        }


    }

    class Program
    {
        static void Main(string[] args)
        {
            CustomList<string> lst = new CustomList<string>();

            lst.Add("first");
            lst.Add("second");
            lst.Add("third");
            lst.Add("fourth");

            foreach (string s in lst)
            {
                Console.WriteLine(s);
            }

            Console.ReadKey();
        }
    }
}
