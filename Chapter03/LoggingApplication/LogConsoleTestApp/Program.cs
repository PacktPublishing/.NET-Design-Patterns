using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LogLibrary;

namespace LogConsoleTestApp
{
    class Program
    {
        private static bool Table(LogStrategy ls)
        {
            int a = 10;
            int b = 1;
            while (b < 3)
            {
                ls.Log("Table", a.ToString() + " * " +
                    b.ToString(), "=" +(a * b).ToString());
                b++;
            }

            
            return true;

        }
        static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                return; 
            } 

           LogStrategy lf = LoggerFactory.CreateLogger("FILE");
             
           Table(lf);
           Console.ReadKey();
        }
    }
}
