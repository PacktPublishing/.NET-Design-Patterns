using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxEngine
{
    public class CommandDispatcher
    {
        

        public static bool Dispatch(string archetype, COMPUTATION_CONTEXT ctx)
        {
            if (archetype == "SeniorCitizen") {
                SeniorCitizenCommand cmd = new SeniorCitizenCommand(); 
                return cmd.Execute(ctx); 
            } 
            else if (archetype == "OrdinaryCitizen") 
            { 
                OrdinaryCitizenCommand cmd = new OrdinaryCitizenCommand();
                return cmd.Execute(ctx); 
            } else { return false; }
        }
    }

    
}
