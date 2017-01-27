using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateMethod
{
    public class IRR_PARAMS
    {
        public List<double> revenue { get; set; }
        public double rate { get; set; }
        public double period { get; set; }
    }
    public abstract class IRRComputationEngine
    {
        public abstract IRR_PARAMS Compute();
        public double Evaluate()
        {
            IRR_PARAMS par = Compute();
            if (par == null) return -1;
            return CashFlow_IRR_Annual(par.revenue,
                par.rate, par.period);

        }
        private static double
       CashFlow_IRR_Annual(List<double> arr,
                   double rate,
                   double period)
        {
            double irr = 0xBEEF;
            //----- Code omitted for brevity
            //----- Compute IRR 
            return irr;
        }
    }

    public class BridgeIRR :
        IRRComputationEngine
    {
        IRR_PARAMS ps = new IRR_PARAMS();
        public BridgeIRR(List<double> rev,
                 double period, double rate)
        {
            ps.period = period;
            ps.rate = rate;
            ps.revenue = rev;
        }

        public override IRR_PARAMS Compute()
        {
            return ps;
        }
    }

    public class IRRComputationEngine2
    {
        public delegate IRR_PARAMS Compute();
        public Compute comp{get;set;} 

        public double Evaluate()
        {
            if (comp == null)
            {
                return -1;
            }
            IRR_PARAMS par = comp();
            
            return CashFlow_IRR_Annual(par.revenue,
                par.rate, par.period);

        }
        private static double
       CashFlow_IRR_Annual(List<double> arr,
                   double rate,
                   double period)
        {
            double irr = 0;
            //----- Code omitted for brevity
            //----- Compute IRR 
            return irr;
        }
    }
    class Program
    {
        static void TestTemplateMethod()
        {
            double[] ns = { 10, 12, 13, 14, 20 };
            BridgeIRR test = new BridgeIRR(ns.ToList(),10,5);
            double irr = test.Evaluate();
            Console.WriteLine(irr);
        }

        static void TestFPTemplate()
        {
            IRRComputationEngine2 n = new IRRComputationEngine2();
            double[] ns = { 10, 12, 13, 14, 20 };
            n.comp = () =>
            {
                IRR_PARAMS par = new IRR_PARAMS();
                par.revenue = ns.ToList();
                par.rate = 10;
                par.period = 5;
                return par;
            };
            double r = n.Evaluate();
            Console.WriteLine(r);
            Console.Read();
        }
        static void Main(string[] args)
        {
            //Program.TestFPTemplate();
            Program.TestTemplateMethod();


        }
    }
}
