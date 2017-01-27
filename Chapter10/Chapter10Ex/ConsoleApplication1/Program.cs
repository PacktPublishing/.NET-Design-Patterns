using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    interface IComparitorStrategy<T>
    {
        int Execute(T a, T b);
    }

    class IntComparitor : IComparitorStrategy<int> {
        public int Execute(int a, int b) {
            return a > b ? 1 : (b > a ) ? -1 : 0;
        }
    }

    class DoubleComparitor : IComparitorStrategy<double>
    {
        public int Execute(double a, double b){
            return a > b ? 1 : (b > a) ? -1 : 0;
        }
    }
     
    
    static class Program
    {
        private static void BSort<T>(this T[] arr, IComparitorStrategy<T> test) where T : struct
        {
            int n = arr.Length;
              for(int i = 0; i<n; ++i)
                for (int j = 0; j < n-i-1; j++)
                   if (test.Execute(arr[j],arr[j + 1]) > 0)
                    {
                        T temp = arr[j]; arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
        }

        private static void BSort2<T>(this T[] arr, Func<T,T,int> test) where T : struct
        {
            int n = arr.Length;
            for (int i = 0; i < n; ++i)
                for (int j = 0; j < n - i - 1; j++)
                    if (test(arr[j], arr[j + 1]) > 0)
                    {
                        T temp = arr[j]; arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
        }
        
        static void Main(string[] args)
        {
            
            int [] s= {  -19,20,41, 23, -6};
            s.BSort(new IntComparitor());
            foreach( var n in s ) 
                Console.WriteLine(n);
            
            double[] s2 = { -19.3, 20.5, 41.0, 23.6, -6.0 };
            s2.BSort(new DoubleComparitor());
            foreach (var n in s2)
                Console.WriteLine(n);
            
            
            int[] s3 = { -19, 20, 41, 23, -6 };
            Func<int ,int ,int> fn = (int a, int b ) => {
                return (a > b) ? 1 : -1;
            };
            s3.BSort2(fn);
            foreach (var n in s3)
               Console.WriteLine(n);
            
            s3.BSort2( (int a, int b ) =>  (a > b ) ? 1 : -1);
            foreach (var n in s3)
            {
                Console.WriteLine(n);
            }
            Console.Read();

        }
    }
}
