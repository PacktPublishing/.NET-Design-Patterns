using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogLibrary
{
    public interface IContentWriter
    {
         Task<bool> Write(string content);
    }
}
