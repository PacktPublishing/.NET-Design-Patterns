using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SQLite;

namespace LogLibrary
{
    public class SQLAccess
    {

        private SQLiteConnection _con = null;
        private SQLiteCommand _cmd = null;
        private SQLiteTransaction _cts = null;
        string _constr;

        public SQLAccess(string constr)
        {
            _constr = constr;
        }

        public bool Open(bool trans = false)
        {
            try
            {
                _con = new SQLiteConnection(_constr);
                _con.Open();
                if (trans)
                    _cts = _con.BeginTransaction();
                return true;
            }
            catch( SQLiteException e)
            {
                Console.WriteLine("hello" +e);
                return false;
            }
       
        }

        public Boolean Close()
        {
            if (_con != null)
            {
                if (_cts != null)
                {
                    _cts.Commit();
                    _cts = null;
                }
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
                
                _cmd = new SQLiteCommand(SQL, _con);
                _cmd.ExecuteNonQuery();
                _con.Close();
                _con = null;
                return true;
            }
            catch (Exception e)
            {
                e.ToString();
                _con = null;
                return false;
            }
        }
    }
}
