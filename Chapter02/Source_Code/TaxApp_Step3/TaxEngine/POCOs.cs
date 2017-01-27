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
        public double Surcharge { get; set; }
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
       bool PreExecute(COMPUTATION_CONTEXT ctx);
       bool Execute(COMPUTATION_CONTEXT ctx);
       bool PostExecute(COMPUTATION_CONTEXT ctx);
    }

    public class BaseComputationCommand : ComputationCommand
    {
        public virtual bool PreExecute(COMPUTATION_CONTEXT ctx) { return true;  }
        public virtual bool Execute(COMPUTATION_CONTEXT ctx) { return true;  }
        public virtual bool PostExecute(COMPUTATION_CONTEXT ctx) { return true; }
    }

    public class SeniorCitizenCommand : BaseComputationCommand
    {
        
        public override bool PreExecute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //--- Do Some Sanity Checks
            //--- if some problems => return true;
            return base.PreExecute(ctx);
        }
        public override bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Compute the Tax for Senior Citizens
            //---- They belong to different Slabs
            td.taxparams.TaxLiability = 1000;
            td.taxparams.Computed = true;
            return true;
        }

        public override bool PostExecute(COMPUTATION_CONTEXT ctx)
        {
            //--- Do the Check on Invariants
            //--- Retrun false, if there is violation
            return base.PostExecute(ctx);
        }
    }

    public class OrdinaryCitizenCommand : BaseComputationCommand
    {
        public override bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Compute the Tax for Senior Citizens
            //---- They belong to different Slabs
            td.taxparams.TaxLiability = 1500;
            return true;
        }
    }

    public class OthersCommand : BaseComputationCommand
    {
        public override bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Compute the Tax for Others
            //---- They belong to different Slabs
            //----- After computation 5000 was assigned :)
            td.taxparams.TaxLiability = 5000;
            return true;
        }
    }

    public class SeniorCitizenFemaleCommand : BaseComputationCommand
    {
        public override bool Execute(COMPUTATION_CONTEXT ctx)
        {
            TaxDTO td = (TaxDTO)ctx.Get("tax_cargo");
            //---- Compute the Tax for Senior Females
            //---- They belong to different Slabs
            double accum = td.taxparams.Basic +
                td.taxparams.DA + td.taxparams.Allowance +
                td.taxparams.HRA;
            double net = accum - td.taxparams.Deductions -
                td.taxparams.Surcharge;
            //---- Flat 10% Tax
            td.taxparams.TaxLiability = net*0.1;
            return true;
        }
    }
}
