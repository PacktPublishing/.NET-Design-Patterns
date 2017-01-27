using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace Chapter4_Example
{
    public  abstract class DbAbstractFactory
    {
        public abstract IDbConnection CreateConnection(string connstr);
        public abstract IDbCommand CreateCommand(IDbConnection con, string cmd);
        public abstract IDbDataAdapter CreateDbAdapter(IDbCommand cmd);
        public abstract IDataReader CreateDataReader(IDbCommand cmd);
    }
}
