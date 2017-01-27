using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace LogLibrary
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

        private Dictionary<string, string> entries =
            new Dictionary<string, string>();
        private Dictionary<string, Object> objects =
           new Dictionary<string, Object>();

        private Dictionary<string, string> LoadData(string str)
        {
            return XDocument.Load(str).Descendants("entries").
            Descendants("entry").ToDictionary(p => p.Attribute("key").Value,
            p => p.Attribute("value").Value);
        }


        public ObjectFactory(String str)
        {
            entries = LoadData(str);
        }

        public Object Get(string key, string mode = "singleton")
        {
            if (mode != "singleton" && mode != "prototype")
                return null;
            Object temp = null;
            if (objects.TryGetValue(key, out temp))
                return (mode == "singleton") ? temp :
                temp.DeepClone<Object>();

            string classname = null;
            entries.TryGetValue(key, out classname);
            if (classname == null)
                return null;
            string fullpackage = classname;

            Type t = Type.GetType(fullpackage);
            if (t == null)
                return null;
            objects[key] = (Object)Activator.CreateInstance(t);
            return objects[key];

        }

    }
}
