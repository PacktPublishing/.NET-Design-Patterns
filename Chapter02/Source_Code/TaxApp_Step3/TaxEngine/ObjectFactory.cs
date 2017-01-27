using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace TaxEngine
{
    public static class CloneHelpers
    {
        // Deep clone
        public static T DeepClone<T>(this T a)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                BinaryFormatter formatter = new BinaryFormatter();
                formatter.Serialize(stream, a);
                stream.Position = 0;
                return (T)formatter.Deserialize(stream);
            }
        }
    }
    public class ObjectFactory
    {
       
        private Dictionary<string, string> plugins = 
            new Dictionary<string, string>();
        private Dictionary<string, ComputationCommand> commands =
           new Dictionary<string, ComputationCommand>();

        private Dictionary<string,string> LoadData(string str)
        {
           return XDocument.Load(str).Descendants("plugins").Descendants("plugin")
          .ToDictionary(p => p.Attribute("archetype").Value,
           p => p.Attribute("command").Value);
         }
              
            
        public ObjectFactory(String str) {
            plugins = LoadData(str);
        }

        public ComputationCommand Get(string archetype, string mode = "singleton")
        {
            if (mode != "singleton" && mode != "prototype")
                return null;
            ComputationCommand temp = null;
            if ( commands.TryGetValue(archetype,out temp) )
                    return (mode == "singleton")?temp:
                    temp.DeepClone<ComputationCommand>();

            string classname = plugins[archetype];
            if (classname == null)
                return null;
            string fullpackage = classname;
            
            Type t = Type.GetType(fullpackage);
            if (t == null)
                return null;
            commands[archetype]= (ComputationCommand)Activator.CreateInstance(t);
            return commands[archetype];
        
        }
        
    }
}
