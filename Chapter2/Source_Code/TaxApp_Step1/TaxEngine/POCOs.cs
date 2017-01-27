using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxEngine
{
    public class TaxParamVO
    {
        public double Basic {get;set;}
        public double DA { get; set; }
        public double HRA { get; set; }
        public double Allowance { get; set; }
        public double Deductions { get; set; }
        public double Cess { get; set; }
        public double TaxLiability { get; set; }
        public bool Computed { get; set; }
    }
    public class TaxableEntity
    {
       public int id { get; set; }
       public string name { get; set; }
       public int age { get; set; }
       public char Sex { get; set; }
       public string Location { get; set; }
       public TaxParamVO taxparams  { get; set; }

    }

    public class TaxDTO
    {
        public int id { get; set; }
        public TaxParamVO taxparams { get; set; }
    }

    public class COMPUTATION_CONTEXT
    {
        private Dictionary<String, Object> symbols = new Dictionary<String, Object>();
        public void Put(string k, Object value) { symbols.Add(k, value); }
        public Object Get(string k) { return symbols[k]; }
    }


   public interface ComputationCommand
    {
        bool Execute(COMPUTATION_CONTEXT ctx);

    }

    public class SeniorCitizenCommand : ComputationCommand
    {
        public bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Instead of computation, we are assigning
            //---- constant tax for each arcetypes
            td.taxparams.TaxLiability = 1000;
            td.taxparams.Computed = true;
            return true;
        }
    }

    public class OrdinaryCitizenCommand : ComputationCommand
    {
        public bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Instead of computation, we are assigning
            //---- constant tax for each arcetypes
            td.taxparams.TaxLiability = 1500;
            td.taxparams.Computed = true;
            return true;
        }
    }

}
