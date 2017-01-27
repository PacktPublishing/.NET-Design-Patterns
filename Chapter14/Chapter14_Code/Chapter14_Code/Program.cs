using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter14_Code
{
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
