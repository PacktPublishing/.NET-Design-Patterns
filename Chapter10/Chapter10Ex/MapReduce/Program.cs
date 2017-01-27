using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MapReduce
{
    class Program
    {
        public static double []  Map( double []  src, Func<double,double> fnapply)
        {
            double[] ret = new double[src.Length];
            Parallel.For(0,ret.Length,
                new ParallelOptions { MaxDegreeOfParallelism = Environment.ProcessorCount },
                ( i) => { ret[i] = fnapply(src[i]);}
             );
            
            return ret;
        }

        public static double Reduce(  double[] arr,Func<double,double,double> reducer,double init)
        {
            double accum = init;
            for(int i=0; i< arr.Length; ++i )
               accum = reducer(arr[i], accum);
            return accum;
        }
        static void Main(string[] args)
        {
            double[] arr = { 2, 4, 4, 4 ,5,5,7,9};
            
            double avg = Reduce( Map(arr,(double a) => {return a;}), 
                                 (double a, double b) => { return b +=a;},0)/arr.Length;
            double var = Reduce(Map(arr, (double a) => { return (a-avg)*(a-avg); }),
                                 (double a, double b) => { return b += a; }, 1) / arr.Length;
            Console.WriteLine(Math.Sqrt(var));
            Console.Read();

        }
    }
}
