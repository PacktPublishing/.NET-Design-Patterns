using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace C8
{
    public static class Program1
    {
        public static void Product (string[] args)
        {
            var bigN1 = new BigNumber1();
            var bigN2 = new BigNumber2();
            string x = args[0];
            string y = args[1];
            var watch = Stopwatch.StartNew();
            var val1 = bigN1.Operations().Multiply(x, y);
            Console.WriteLine(@"Product-1 of the numbers ({0} * {1}) is: {2}", x, y, val1);
            Console.WriteLine("Elapsed Time : {0} seconds", watch.ElapsedMilliseconds / 1000D);
            watch = Stopwatch.StartNew();
            var val2 = bigN2.Operations().Multiply(x, y);
            Console.WriteLine(@"Product-2 of the numbers ({0} * {1}) is: {2}", x, y, val2);
            Console.WriteLine("Elapsed Time : {0} seconds", watch.ElapsedMilliseconds / 1000D);
            Console.WriteLine("Computed Values are {0}!!!", val1.Equals(val2) ? "EQUAL" : "DIFFERENT");
        }

        public static void Power (string[] args)
        {
            var bigN1 = new BigNumber1();
            var bigN2 = new BigNumber2();
            var bigN3 = new BigNumber3();
            var x = args[0];
            int y = Convert.ToInt32(args[1]);
            var watch = Stopwatch.StartNew();
            var val1 = bigN1.Operations().Power(x, y);
            //Console.WriteLine(@"The Power-1 of the numbers ({0} ^ {1}) is: {2}", x, y, val1);
            Console.WriteLine("Elapsed Time for Serial Computation of {0} ^ {1}: {2} seconds", x, y, watch.ElapsedMilliseconds / 1000D);
            watch = Stopwatch.StartNew();
            var val2 = bigN2.Operations().Power(x, y);
            //Console.WriteLine(@"The Power-2 of the numbers ({0} ^ {1}) is: {2}", x, y, val2);
            Console.WriteLine("Elapsed Time for Parallel.For Computation of {0} ^ {1}: {2} seconds", x, y, watch.ElapsedMilliseconds / 1000D);
            watch = Stopwatch.StartNew();
            var val3 = bigN3.Operations().Power(x, y);
            Console.WriteLine("Elapsed Time for Parallel Task Computation of {0} ^ {1}: {2} seconds", x, y, watch.ElapsedMilliseconds / 1000D);
            Console.WriteLine("Computed Values are {0}!!! {1}", val1.Equals(val2) && val2.Equals(val3) ? "EQUAL" : "DIFFERENT", val1);
        }
        /// <summary>
        /// Adaptive Speculation for determining the best strategy
        /// for your environment. Leveraging Task.WaitAny method
        /// </summary>
        /// <param name="args"></param>
        public static void AdaptivePower (string[] args)
        {
            var bigN1 = new BigNumber4();
            var bigN2 = new BigNumber5();
            var bigN3 = new BigNumber6();

            var val1 = "";
            var val2 = "";
            var val3 = "";

            var x = args[0];
            int y = Convert.ToInt32(args[1]);

            var tasks = new Task[3];
            var tokenSource = new CancellationTokenSource();
            var token = tokenSource.Token;
            BlockingCollection<string> log = new 
                BlockingCollection<string>();
            Stopwatch watch;

            tasks[0] = Task.Factory.StartNew(
                () =>
                    {
                        watch = Stopwatch.StartNew();
                        val1 = bigN1.Operations()
                            .Power(x, y, token, log);

                        Console
                            .WriteLine("Elapsed Time for Serial " +
                            "Computation of {0} ^ {1}: {2} seconds " +
                            ">> {3}", x, y, 
                            watch.ElapsedMilliseconds / 1000D, val1);
                    }, 
                token);

            tasks[1] = Task.Factory.StartNew(
                () =>
                    {
                        watch = Stopwatch.StartNew();
                        val2 = bigN2.Operations()
                            .Power(x, y, token, log);

                        Console.WriteLine("Elapsed Time for " +
                            "Parallel.For Computation of " +
                        "{0} ^ {1}: {2} seconds >> {3}", x, y,
                        watch.ElapsedMilliseconds / 1000D, val2);
                    }, 
                token);

            tasks[2] = Task.Factory.StartNew(
                () =>
                    {
                        watch = Stopwatch.StartNew();
                        val3 = bigN3.Operations()
                            .Power(x, y, token, log);
                        Console.WriteLine("Elapsed Time for Parallel " +
                            "Task Computation of {0} ^ {1}: {2} " +
                            "seconds >> {3}", x, y, 
                            watch.ElapsedMilliseconds / 1000D, val3);
                    }, 
                token);

            Console.WriteLine("Determining Fastest Algorithm " + "Implementation...");
            
            
            try
            {
                Task.WaitAny(tasks);    // Wait for fastest task to complete.
                tokenSource.Cancel();   // Cancel all the other slower tasks.
            }
            catch (AggregateException ae)
            {
                ae.Flatten().Handle(e => e is OperationCanceledException);
            }
            finally
            {
                if (tokenSource != null)
                    tokenSource.Dispose();
                foreach (string logItem in log)
                {
                    Console.WriteLine(logItem);
                }
                Console.WriteLine("Adaptive Speculation Complete!!!");
            }
        }
    }
}
