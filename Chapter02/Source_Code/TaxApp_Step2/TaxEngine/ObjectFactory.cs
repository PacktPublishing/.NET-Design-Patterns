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
        //--- A Dictionary to store 
        //--- Plugin details ( archetype/commandclass)
        private Dictionary<string, string> plugins = 
            new Dictionary<string, string>();
        //--- A Dictionary to cache objects
        //--- archetype/commandclassinstance
        private Dictionary<string, ComputationCommand> commands =
           new Dictionary<string, ComputationCommand>();

        public ObjectFactory(String xmlfile)
        {
            plugins = LoadData(xmlfile);
        }

        private Dictionary<string,string> LoadData(string xmlfile)
        {
           return XDocument.Load(xmlfile)
               .Descendants("plugins")
               .Descendants("plugin")
               .ToDictionary(p => p.Attribute("archetype").Value,
                             p => p.Attribute("command").Value);
         }
              
            
        
        public ComputationCommand Get(string archetype, string mode = "singleton")
        {
            //---- We can create a new instance, when a 
            //---- prototype is asked, otherwise we will
            //---- return the same instance stored in the dictionary
            if (mode != "singleton" && mode != "prototype")
                        return null;

            ComputationCommand temp = null;
            //--- if an instance is already found, return
            // it (singleton) or clone (prototype
            if (commands.TryGetValue(archetype, out temp))
            {
                return (mode == "singleton") ? temp :
                temp.DeepClone<ComputationCommand>();
            }

            //---- retreive the commandclass name
            string classname = plugins[archetype];
            if (classname == null)
                return null;
            //------ retreieve the classname, if it
            //------ is available with CLR
            Type t = Type.GetType(classname);
            if (t == null)
                return null;
            //---- Create a new Instance and store it
            //---- in commandclass instance dictionary
            commands[archetype]= (ComputationCommand)Activator.CreateInstance(t);
            return commands[archetype];
        
        }
        
    }
}
