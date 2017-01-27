using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxEngine
{
    public class TaxComputationFacade
    {
        /// <summary>
        ///  A Rule Engine can do Archetype Detection
        ///  One can write a small Rule Engine with
        ///  Interpreters and GOF terms it as 
        ///  Interpreter pattern
        /// </summary>
        /// <param name="te"></param>
        /// <returns></returns>
        private static string ComputeArchetype(TaxableEntity te)
        {
            if ((te.Sex == 'F') && (te.age > 59))
            {
                return "SeniorCitizenFemale";
            }
            else if (te.age<18) {
                return "JuevenileCitizen";
            }

            return (te.age > 60) ? "SeniorCitizen" : "OrdinaryCitizen";
        }        

        public static bool Compute(TaxableEntity te)
        {
            string archetype = ComputeArchetype(te);
            COMPUTATION_CONTEXT ctx = new COMPUTATION_CONTEXT();
            TaxDTO td = new TaxDTO { id = te.id, taxparams = te.taxparams };
            ctx.Put("tax_cargo", td);
            return CommandDispatcher.Dispatch(archetype, ctx);
        }
    }
}
