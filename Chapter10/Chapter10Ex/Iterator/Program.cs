using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iterator
{

    public class CPermutation
    {
        private int[] rs = null;
        private String _str = "";
        private int _Len;
        private bool first_perm = false;
        ///
        ///
        ///
        ///
        public CPermutation(string str)
        {
            _str = str;
            _Len = str.Length;
            rs = new int[_Len + 1];
            rs[0] = -1;
            for (int j = 1; j <= _Len; ++j)
                rs[j] = j;
            first_perm = false;
        }

        ///
        ///
        ///
        public string NextPerm
        {
            get
            {
                if (first_perm == false)
                {
                    first_perm = true;
                    return _str + "=>" + "12345";
                }
                int k = _Len - 1;

                while (k > 0 && rs[k] > rs[k + 1])
                    k--;

                if (k == 0)
                    return null;


                int left = k + 1;
                int right = _Len;

                while (left < right)
                {
                    int tmp = rs[left];
                    rs[left] = rs[right];
                    rs[right] = tmp;
                    left++;
                    right--;
                }



                int i = k + 1;

                while (rs[i] < rs[k])
                    i++;
                int tmps = rs[i];
                rs[i] = rs[k];
                rs[k] = tmps;

                //---------- Now that we have generated
                //-----------next permutation form the string..

                string ret_str = "";
                string number_seq = "";
                for (int tk = 1; tk < _Len + 1; ++tk)
                {
                    ret_str = ret_str + _str[rs[tk] - 1];
                    number_seq += Convert.ToString(rs[tk]);

                }

                return ret_str + "=>" + number_seq;

            }

        }

        public static class Program
        {
            
            private static double Aggregate(  double [] p , double init,Func<double,double,double> fn) {
                              
                double temp = init;
                foreach (var n in p)
                   temp =  fn(n,temp);
                return temp;

            }
            private static double AMEAN(double[] p)
            {
                return Aggregate(p, 0, (double a, double b) => 
                     { return b += a; }) / p.Length;
            }

            private static double GMEAN(double[] p)
            {
                double pi = Aggregate(p, 1, 
                    (double a, double accum) => { return accum *= a; });
                return Math.Exp(Math.Log(pi)*(1 / p.Length));
                
            }

            private static double STD(double[] p)
            {
                double avg = Aggregate(p, 0,(double a, double b) => { return b += a; }) / p.Length;
                double var = Aggregate(p, 0, (double a, double b) => { return b += ((a - avg)*(a-avg)); }) / p.Length;
                return Math.Sqrt(var);
            }
            static void Main(string[] args)
            {
                double[] arr = { 2, 4, 4, 4 ,5,5,7,9};
                List<double> arrlist = arr.ToList();
                double nsum = 0;
                foreach (var n in arr)
                    nsum += n;
                double avg = nsum / arrlist.Count;
                Console.WriteLine(avg);
                Func<double, double, double> fn = (double a, double sum) =>
                {
                    return ( sum += a);
                };
                double result = Aggregate(arr,0,
                     (double a, double accum) => { return accum +=a; });
                 Console.WriteLine(result);
                 double [] arr2 = { 4, 1, 1 / 32.0 };
                 result = GMEAN(arr2);
                 Console.WriteLine(result);
                 result = STD(arr);
                 Console.WriteLine(result);
                 Console.Read();
            }
        }
    }
}
