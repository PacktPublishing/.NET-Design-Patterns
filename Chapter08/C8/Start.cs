using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C8
{
    class Start
    {
        static void Main(string[] args)
        {
            //Run these 3 functions below to view the demo codes in action
            //AdaptivePower Computation would give you expected results yet 
            //generate Operation Cancelled Exception (as we employ child tasks)
            //Updates/Fixes would be provided soon.

            Program1.Product(args);
            Program1.Power(args);
            //Program1.AdaptivePower(args);
            Console.ReadLine();
        }
    }
}
