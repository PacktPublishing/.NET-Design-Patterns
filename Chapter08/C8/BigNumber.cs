using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace C8
{

    //----------------------------Abstract Factory
    public interface INumeric
    {
        BigNumOperations Operations ();
    }

    //----------------------------Abstract Product
    public abstract class BigNumOperations
    {
        public abstract string Multiply (string x, string y);
        public virtual string Multiply (
            string x,
            string y,
            CancellationToken ct,
            BlockingCollection<string> log)
        {
            return this.Multiply(x, y);
        }

        // Employs Exponentiation by Squaring Algorithm => 
        // Achieves Θ(log n) efficiency
        public string Power (string number, int exponent)
        {
            int remainingEvenExp = exponent / 2;
            int remainingOddExp = exponent % 2;
            string result = number;
            if (remainingEvenExp > 0)
            {
                string square = this.Multiply(number, number);
                result = square;
                if (remainingEvenExp > 1)
                {
                    if (remainingOddExp == 1)
                    {
                        result = this.Multiply(
                            this.Power(square, remainingEvenExp),
                            number);
                    }
                    else
                    {
                        result = this.Power(square, remainingEvenExp);
                    }
                }
                else
                {
                    if (remainingOddExp == 1)
                    {
                        result = this.Multiply(square, number);
                    }
                }
            }
            return result;
        }

        // Employs Exponentiation by Squaring Algorithm => 
        // Achieves Θ(log n) efficiency
        public string Power (
            string number,
            int exponent,
            CancellationToken ct,
            BlockingCollection<string> log)
        {
            int remainingEvenExp = exponent / 2;
            int remainingOddExp = exponent % 2;
            string result = number;
            if (remainingEvenExp > 0)
            {
                string square = this.Multiply(number, number, ct, log);
                result = square;
                if (remainingEvenExp > 1)
                {
                    if (remainingOddExp == 1)
                    {
                        result = this.Multiply
                            (
                                this.Power(square, remainingEvenExp, ct, log),
                                number,
                                ct,
                                log
                            );
                    }
                    else
                    {
                        result = this.Power
                            (
                                square,
                                remainingEvenExp,
                                ct,
                                log
                            );
                    }
                }
                else
                {
                    if (remainingOddExp == 1)
                    {
                        result = this.Multiply(square, number, ct, log);
                    }
                }
            }
            return result;
        }

        // Creates, Initializes and Returns a Jagged Array
        public static int[][] CreateMatrix (int rows, int cols)
        {
            int[][] result = new int[rows][];
            for (int i = 0; i < rows; ++i)
                result[i] = new int[cols];
            return result;
        }
    }

    // Concrete Product-1
    public class BigNumOperations1 : BigNumOperations
    {
        /// <summary>
        /// Serial Implementation of Schönhage–Strassen Algorithm
        /// <param name="x">String number Sequence-1</param>
        /// <param name="y">String number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);

            //----------------------------Step-1

            for (int i = m - 1; i >= 0; i--)
            {
                int row = m - 1 - i;
                int col = 0;
                int iProduct;
                for (int j = n - 1; j >= 0; j--)
                {
                    col = i + j;
                    iProduct = (( int ) Char.GetNumericValue(y[i])) *
                        (( int ) Char.GetNumericValue(x[j]));
                    longMultiplication[row][col] = iProduct;
                }
            }

            //----------------------------Step-2

            for (int j = prodDigits - 1; j >= 0; j--)
            {
                int sum = 0;
                for (int i = 0; i < m; i++)
                {
                    sum += longMultiplication[i][j];
                }
                linearConvolution[j] = sum;
            }

            //----------------------------Step-3

            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") +
                new string
                    (
                        Array.ConvertAll<int, char>
                        (product, c => Convert.ToChar(c + 0x30))
                    );
        }
    }

    // Concrete Product-2
    public class BigNumOperations2 : BigNumOperations
    {
        /// <summary>
        /// Lock-Free Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages TPL Parallel.For Parallelization Construct
        /// <param name="x">String number Sequence-1</param>
        /// <param name="y">String number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>

        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);

            //----------------------------Step-1

            Parallel.For(0, m,
                i =>
                {
                    int row = m - 1 - i;
                    int col = 0;
                    int iProduct;
                    for (int j = 0; j < n; j++)
                    {
                        col = i + j;
                        iProduct =
                            (( int ) Char.GetNumericValue(y[i])) *
                            (( int ) Char.GetNumericValue(x[j]));
                        longMultiplication[row][col] = iProduct;
                    }
                });

            //----------------------------Step-2

            Parallel.For(0, prodDigits,
                j =>
                {
                    int sum = 0;
                    for (int i = 0; i < m; i++)
                    {
                        sum += longMultiplication[i][j];
                    }
                    linearConvolution[j] = sum;
                });

            //----------------------------Step-3

            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") +
                new string
                    (
                        Array.ConvertAll<int, char>
                        (product, c => Convert.ToChar(c + 0x30))
                    );
        }

        /// <summary>
        /// Lock-Free Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages TPL Parallel.For Parallelization Construct
        /// <param name="x">String number Sequence-1</param>
        /// <param name="y">String number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y, CancellationToken ct, BlockingCollection<string> log)
        {
            return this.Multiply(x, y);
        }
    }

    // Concrete Product-3

    public class BigNumOperations3 : BigNumOperations
    {
        /// <summary>
        /// Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages Async Task Concurrency Construct
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            var degreeOfParallelism = Environment.ProcessorCount;
            var tasks = new Task[degreeOfParallelism];
            Object lockObj = new Object();
            for (int taskNumber = 0; taskNumber < degreeOfParallelism; taskNumber++)
            {
                int taskNumberCopy = taskNumber;
                tasks[taskNumber] = Task.Factory.StartNew(
                    () =>
                    {
                        var max = m * (taskNumberCopy + 1) / degreeOfParallelism;
                        for (int i = m * taskNumberCopy / degreeOfParallelism;
                            i < max;
                            i++)
                        {
                            for (int j = 0; j < n; j++)
                            {
                                lock (lockObj)
                                {
                                    linearConvolution[i + j] += (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                                }
                            }
                        }
                    });
            }
            Task.WaitAll(tasks);
            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
        /// <summary>
        /// Lock-Free Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages System.Threading.Tasks Concurrency Construct
        /// <param name="x">String number Sequence-1</param>
        /// <param name="y">String number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (
            string x,
            string y,
            CancellationToken ct,
            BlockingCollection<string> log)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);
            var degreeOfParallelism = Environment.ProcessorCount;
            var tasks = new Task[degreeOfParallelism];

            //----------------------------Step-1

            for (int taskNumber = 0;
                taskNumber < degreeOfParallelism;
                taskNumber++)
            {
                int taskNumberCopy = taskNumber;
                tasks[taskNumber] = Task.Factory.StartNew(
                    () =>
                    {
                        var max =
                            m * (taskNumberCopy + 1) /
                            degreeOfParallelism;
                        var min =
                            m * taskNumberCopy /
                            degreeOfParallelism;
                        for (int i = min; i < max; i++)
                        {
                            int row = m - 1 - i;
                            int col = 0;
                            int iProduct;
                            for (int j = 0; j < n; j++)
                            {
                                col = i + j;
                                iProduct =
                                    (( int ) Char
                                    .GetNumericValue(y[i])) *
                                    (( int ) Char
                                    .GetNumericValue(x[j]));
                                longMultiplication[row][col] =
                                    iProduct;
                            }
                        }
                    });
            }
            Task.WaitAll(tasks);        //Blocking Call

            //----------------------------Step-2

            for (int taskNumber = 0;
                taskNumber < degreeOfParallelism;
                taskNumber++)
            {
                int taskNumberCopy = taskNumber;
                tasks[taskNumber] = Task.Factory.StartNew(
                    () =>
                    {
                        var max =
                            prodDigits * (taskNumberCopy + 1) /
                            degreeOfParallelism;
                        var min =
                            prodDigits * taskNumberCopy /
                            degreeOfParallelism;
                        for (int j = min; j < max; j++)
                        {
                            int sum = 0;
                            for (int i = 0; i < m; i++)
                            {
                                sum += longMultiplication[i][j];
                            }
                            linearConvolution[j] = sum;
                        }
                    });
            }
            Task.WaitAll(tasks);        //Blocking Call

            //----------------------------Step-3

            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") +
                new string
                    (
                        Array.ConvertAll<int, char>
                        (product, c => Convert.ToChar(c + 0x30))
                    );
        }
    }

    // Concrete Product-4

    public class BigNumOperations4 : BigNumOperations
    {
        /// <summary>
        /// Lock-Free Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages TPL Parallel.For Parallelization Construct
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);//i, n+m-2-j-i
            Parallel.For(0, m, new ParallelOptions
            {
                MaxDegreeOfParallelism = Environment.ProcessorCount
            },
                i =>
                {
                    int row = m - 1 - i;
                    int col = 0;
                    int iProduct;
                    for (int j = 0; j < n; j++)
                    {
                        col = i + j;
                        iProduct = (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                        //Console.WriteLine("longMultiplication >> ({0}, {1}) : {2}", row, col, iProduct);
                        longMultiplication[row][col] = iProduct;
                    }
                });
            Parallel.For(0, prodDigits, new ParallelOptions
            {
                MaxDegreeOfParallelism = Environment.ProcessorCount
            },
                j =>
                {
                    int sum = 0;
                    for (int i = 0; i < m; i++)
                    {
                        sum += longMultiplication[i][j];
                    }
                    linearConvolution[j] = sum;
                    //Console.WriteLine("linearConvolution[{0}] : {1}", j, sum);
                });
            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
        /// <summary>
        /// Serial Cancellable Implementation of 
        /// Schönhage–Strassen Algorithm
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (
            string x,
            string y,
            CancellationToken ct,
            BlockingCollection<string> log)
        {

            if (ct.IsCancellationRequested == true)
            {
                log.Add(@"Serial Implementation Task was " +
                    @"cancelled before it got started!");
                ct.ThrowIfCancellationRequested();
            }
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication =
                CreateMatrix(m, prodDigits);

            //----------------------------Step-1

            for (int i = m - 1; i >= 0; i--)
            {
                int row = m - 1 - i;
                int col = 0;
                int iProduct;
                for (int j = n - 1; j >= 0; j--)
                {
                    if (ct.IsCancellationRequested)
                    {
                        log.Add("Serial Implementation Step1 " +
                            "was cancelled!");
                        ct.ThrowIfCancellationRequested();
                    }
                    col = i + j;
                    iProduct = (( int ) Char
                        .GetNumericValue(y[i])) *
                        (( int ) Char
                        .GetNumericValue(x[j]));
                    longMultiplication[row][col] = iProduct;
                }
            }

            //----------------------------Step-2

            for (int j = prodDigits - 1; j >= 0; j--)
            {
                if (ct.IsCancellationRequested)
                {
                    log.Add("Serial Implementation Step2 " +
                        "was cancelled!");
                    ct.ThrowIfCancellationRequested();
                }
                int sum = 0;
                for (int i = 0; i < m; i++)
                {
                    sum += longMultiplication[i][j];
                }
                linearConvolution[j] = sum;
            }

            //----------------------------Step-3

            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                if (ct.IsCancellationRequested)
                {
                    log.Add("Serial Implementation Step3 " +
                        "was cancelled!");
                    ct.ThrowIfCancellationRequested();
                }
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
    }
    /// <summary>
    /// Concrete Product-5
    /// </summary>
    public class BigNumOperations5 : BigNumOperations
    {
        /// <summary>
        /// Parallel Implementation of Schönhage–Strassen Algorithm
        /// Leverages Async Task Concurrency Construct
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);
            for (int i = 0; i < m; i++)
            {
                int row = m - 1 - i;
                int col = 0;
                int iProduct;
                for (int j = 0; j < n; j++)
                {
                    col = i + j;
                    iProduct = (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                    //Console.WriteLine("longMultiplication >> ({0}, {1}) : {2}", row, col, iProduct);
                    longMultiplication[row][col] = iProduct;
                }
            }
            //Parallel.For(0, prodDigits, new ParallelOptions { MaxDegreeOfParallelism = Environment.ProcessorCount },
            for (int j = prodDigits - 1; j >= 0; j--)
            {
                int sum = 0;
                for (int i = 0; i < m; i++)
                {
                    sum += longMultiplication[i][j];
                }
                linearConvolution[j] = sum;
                //Console.WriteLine("linearConvolution[{0}] : {1}", j, sum);
            }
            int nextCarry = 0;
            int[] product = new int[prodDigits];

            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
        /// <summary>
        /// Lock-Free Cancellable Parallel Implementation of 
        /// Schönhage–Strassen Algorithm
        /// Leverages TPL Parallel.For Parallelization Construct
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y, CancellationToken ct, BlockingCollection<string> log)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);
            //Step-1
            Parallel.For(0, m,
                (i, loopState) =>
                {
                    if (ct.IsCancellationRequested)
                    {
                        log.Add("Parallel.For Implementation Step1 " +
                            "was cancelled before it got started!");
                        loopState.Stop();
                        ct.ThrowIfCancellationRequested();
                    }
                    int row = m - 1 - i;
                    int col = 0;
                    int iProduct;
                    for (int j = 0; j < n; j++)
                    {
                        if (ct.IsCancellationRequested)
                        {
                            log.Add("Parallel.For Implementation Step1 " +
                                "was cancelled!");
                            loopState.Stop();
                            ct.ThrowIfCancellationRequested();
                        }
                        col = i + j;
                        iProduct = (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                        longMultiplication[row][col] = iProduct;
                    }
                });
            //Step-2
            Parallel.For(0, prodDigits,
                (j, loopState) =>
                {
                    if (ct.IsCancellationRequested)
                    {
                        log.Add("Parallel.For Implementation Step2 was cancelled before it got started!");
                        loopState.Stop();
                        ct.ThrowIfCancellationRequested();
                    }
                    int sum = 0;
                    for (int i = 0; i < m; i++)
                    {
                        if (ct.IsCancellationRequested)
                        {
                            log.Add("Parallel.For Implementation Step2 was cancelled!");
                            loopState.Stop();
                            ct.ThrowIfCancellationRequested();
                        }
                        sum += longMultiplication[i][j];
                    }
                    linearConvolution[j] = sum;
                });
            //Step-3
            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                if (ct.IsCancellationRequested)
                {
                    log.Add("Parallel.For Implementation Step3 was cancelled!");
                    ct.ThrowIfCancellationRequested();
                }
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
    }
    /// <summary>
    /// Concrete Product-6
    /// </summary>
    public class BigNumOperations6 : BigNumOperations
    {
        /// <summary>
        /// Serial Implementation of Schönhage–Strassen Algorithm
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);
            for (int i = m - 1; i >= 0; i--)
            {
                int row = m - 1 - i;
                int col = 0;
                int iProduct;
                for (int j = n - 1; j >= 0; j--)
                {
                    col = i + j;
                    iProduct = (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                    longMultiplication[row][col] = iProduct;
                }
            }
            for (int j = prodDigits - 1; j >= 0; j--)
            {
                int sum = 0;
                for (int i = 0; i < m; i++)
                {
                    sum += longMultiplication[i][j];
                }
                linearConvolution[j] = sum;
            }
            int nextCarry = 0;
            int[] product = new int[prodDigits];

            for (int i = (n + m - 2); i >= 0; i--)
            {
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));
        }
        /// <summary>
        /// Lock-Free Cancellable Parallel Implementation of 
        /// Schönhage–Strassen Algorithm
        /// Leverages System.Threading.Tasks Concurrency Construct
        /// <param name="x">String Equivalent Number Sequence-1</param>
        /// <param name="y">String Equivalent Number Sequence-2</param>
        /// <returns>String Equivalent Product Sequence</returns>
        /// </summary>
        public override string Multiply (string x, string y, CancellationToken ct, BlockingCollection<string> log)
        {
            int n = x.Length;
            int m = y.Length;
            int prodDigits = n + m - 1;
            int[] linearConvolution = new int[prodDigits];
            int[][] longMultiplication = CreateMatrix(m, prodDigits);
            var degreeOfParallelism = Environment.ProcessorCount;
            var tasks = new Task[degreeOfParallelism];
            //Step-1
            for (int taskNumber = 0; taskNumber < degreeOfParallelism; taskNumber++)
            {
                int taskNumberCopy = taskNumber;
                var token = ct;
                tasks[taskNumber] = Task.Factory.StartNew(
                    () =>
                    {
                        if (token.IsCancellationRequested)
                        {
                            log.Add("Tasks Implementation Step1 was cancelled before it got started!");
                            token.ThrowIfCancellationRequested();
                        }
                        var max = m * (taskNumberCopy + 1) / degreeOfParallelism;
                        var min = m * taskNumberCopy / degreeOfParallelism;
                        for (int i = min; i < max; i++)
                        {
                            int row = m - 1 - i;
                            int col = 0;
                            int iProduct;
                            for (int j = 0; j < n; j++)
                            {
                                if (token.IsCancellationRequested)
                                {
                                    log.Add("Tasks Implementation Step1 was cancelled!");
                                    token.ThrowIfCancellationRequested();
                                }
                                col = i + j;
                                iProduct = (( int ) Char.GetNumericValue(y[i])) * (( int ) Char.GetNumericValue(x[j]));
                                longMultiplication[row][col] = iProduct;
                            }
                        }
                    }, token);
            }
            Task.WaitAll(tasks, ct);

            //Step-2
            for (int taskNumber = 0; taskNumber < degreeOfParallelism; taskNumber++)
            {
                int taskNumberCopy = taskNumber;
                var token = ct;
                tasks[taskNumber] = Task.Factory.StartNew(
                    () =>
                    {
                        if (token.IsCancellationRequested)
                        {
                            log.Add("Tasks Implementation Step2 was cancelled before it got started!");
                            token.ThrowIfCancellationRequested();
                        }
                        var max = prodDigits * (taskNumberCopy + 1) / degreeOfParallelism;
                        var min = prodDigits * taskNumberCopy / degreeOfParallelism;
                        for (int j = min; j < max; j++)
                        {
                            int sum = 0;
                            for (int i = 0; i < m; i++)
                            {
                                if (token.IsCancellationRequested)
                                {
                                    log.Add("Tasks Implementation Step2 was cancelled!");
                                    token.ThrowIfCancellationRequested();
                                }
                                sum += longMultiplication[i][j];
                            }
                            linearConvolution[j] = sum;
                        }
                    }, token);
            }
            Task.WaitAll(tasks, ct);

            //Step-3


            int nextCarry = 0;
            int[] product = new int[prodDigits];
            for (int i = (n + m - 2); i >= 0; i--)
            {
                if (ct.IsCancellationRequested)
                {
                    log.Add("Tasks Implementation Step3 was cancelled!");
                    ct.ThrowIfCancellationRequested();
                }
                linearConvolution[i] += nextCarry;
                product[i] = linearConvolution[i] % 10;
                nextCarry = linearConvolution[i] / 10;
            }
            return (nextCarry > 0 ? nextCarry.ToString() : "") + new string(Array.ConvertAll<int, char>(product, c => Convert.ToChar(c + 0x30)));

        }
    }
    /// <summary>
    /// Concrete Factory-1
    /// </summary>
    public class BigNumber1 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations1();
        }
    }
    /// <summary>
    /// Concrete Factory-2
    /// </summary>
    public class BigNumber2 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations2();
        }
    }
    /// <summary>
    /// Concrete Factory-3
    /// </summary>
    public class BigNumber3 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations3();
        }
    }
    /// <summary>
    /// Concrete Factory-4
    /// </summary>
    public class BigNumber4 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations4();
        }
    }
    /// <summary>
    /// Concrete Factory-5
    /// </summary>
    public class BigNumber5 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations5();
        }
    }
    /// <summary>
    /// Concrete Factory-6
    /// </summary>
    public class BigNumber6 : INumeric
    {
        public BigNumOperations Operations ()
        {
            return new BigNumOperations6();
        }
    }
}
