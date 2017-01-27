using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Odbc;
using System.Runtime.Serialization;

namespace Chapter4_Example
{
    [Serializable()]
    public class ODbcDbFactory : DbAbstractFactory,ISerializable
    {

        private string drivertype { get; set; }
        public ODbcDbFactory() { this.drivertype = null; }
        protected ODbcDbFactory(SerializationInfo info, StreamingContext context)
        {

        }
        public override IDbConnection CreateConnection(string connstr)
        {
            if (connstr == null || connstr.Length == 0)
                return null;
            return new OdbcConnection(connstr);
        }

        public override IDbCommand CreateCommand(IDbConnection con, string cmd)
        {
            if (con == null || cmd == null || cmd.Length == 0)
                return null;
            if (con is OdbcConnection)
                return new OdbcCommand(cmd,
                    (OdbcConnection)con);
            return null;
        }

        public override IDbDataAdapter CreateDbAdapter(IDbCommand cmd)
        {
            if (cmd == null) { return null; }
            if (cmd is OdbcCommand)
                return new
                    OdbcDataAdapter((OdbcCommand)cmd);
            return null;
        }

        public override IDataReader CreateDataReader(IDbCommand cmd)
        {
            if (cmd == null) { return null; }
            if (cmd is OdbcCommand)
                return (OdbcDataReader)cmd.ExecuteReader();
            return null;
        }

        public void GetObjectData(SerializationInfo info, StreamingContext ctxt)
        {

        }

    }
}
