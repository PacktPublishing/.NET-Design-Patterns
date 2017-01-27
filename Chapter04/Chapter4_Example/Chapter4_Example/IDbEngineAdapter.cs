using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
namespace Chapter4_Example
{
    public interface IDbEngineAdapter
    {
         bool Open();
         DataSet Execute(string SQL);
         IDataReader ExecuteQuery(string SQL);
         bool ExecuteNonQuery(string SQL);    
         Boolean Close();
        
    }
}
