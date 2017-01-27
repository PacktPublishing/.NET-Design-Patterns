using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxEngine
{
   

    public class CommandDispatcher
    {
        private static ObjectFactory obj = new ObjectFactory("Pluggins.xml");

        public static bool Dispatch(string archetype, COMPUTATION_CONTEXT ctx)
        {
            ComputationCommand cmd = obj.Get(archetype);
            return (cmd == null) ? false : cmd.Execute(ctx); 
      
        }
    }
}
