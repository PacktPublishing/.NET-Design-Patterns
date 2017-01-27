using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SQLite;

namespace Chapter4_Example
{
    public class DbEngineAdapter : IDbEngineAdapter
    {
        static ObjectFactory2 of = new ObjectFactory2("DbDrivers.xml");
        private IDbConnection _con = null;
        private IDbCommand _cmd = null;
        private DbAbstractFactory df = null;
        private string _constr;
        private string _driver;

        public DbEngineAdapter(string constr, string driver)
        {
            _constr = constr;
            _driver = driver;
            //----- Instantiate the correct concrete class
            //----- based on the driver
            df = (DbAbstractFactory)of.Get(driver, "prototype");
        }

        public bool Open()
        {
            try
            {
                if (_con != null || df == null || _constr == null)
                {
                    return false;
                }
                //------ Create Connection Object 
                _con = df.CreateConnection(_constr);
                if (_con == null)
                    return false;
                _con.Open();
                return true;
            }
            catch (Exception e)
            {
                e.ToString();
                return false;
            }
        }

        public DataSet Execute(string SQL)
        {
            try
            {
                if (_con == null || df == null || _cmd != null) { return null; }
                _cmd = df.CreateCommand(_con, SQL);
                IDbDataAdapter da = df.CreateDbAdapter(_cmd);
                if (da == null) { return null; }
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
            catch (Exception e)
            {
                e.ToString();
                return null;
            }
        }

        public IDataReader ExecuteQuery(string SQL)
        {
            try
            {
                if (_con == null || df == null || _cmd != null) { return null; }
                _cmd = df.CreateCommand(_con, SQL);
                if (_cmd == null) { return null; }
                IDataReader rs = df.CreateDataReader(_cmd);
                return rs;
            }
            catch (Exception e)
            {
                e.ToString();
                return null;
            }
        }

        public Boolean Close()
        {
            if (_con != null)
            {
                _con.Close();
                _con = null;
                return true;
            }
            return false;
        }
        public bool ExecuteNonQuery(string SQL)
        {
            try
            {
                if (_con == null || df == null || _cmd != null) { return false; }
                _cmd = df.CreateCommand(_con,SQL);
                if (_cmd == null) { return false; }
                _cmd.ExecuteNonQuery();
                return true;
            }
            catch (Exception e)
            {
                e.ToString();
                return false;
            }
        }
    }
}
