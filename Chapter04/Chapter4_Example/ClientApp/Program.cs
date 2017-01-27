using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Chapter4_Example;
namespace ClientApp
{
    class Program
    {
        static void TestInsert(string connstr, string driver)
        {
            DbEngineAdapter db = 
                new DbEngineAdapter(connstr, 
                    driver);
            //----- a Test Log Entry
            string test = "Log value is " + Math.PI * 1999;
            if (db.Open())
            {
                string query = "INSERT INTO logs VALUES('" +
                    test + "');";
                bool result = db.ExecuteNonQuery(query);
            }
            db.Close();
            return;
        }

        static void TestDataSet(string connstr, string driver)
        {
            DbEngineAdapter db =
                new DbEngineAdapter(connstr,driver);
            if (db.Open())
            {
                string query = "SELECT * from logs";

                DataSet ds = db.Execute(query);
                DataTable dt = ds.Tables[0];
                int i = 0;
                int max = dt.Rows.Count;

                while (i < max)
                {
                    DataRow dr = dt.Rows[i];
                    Console.WriteLine(dr[0]);
                    i++;
                }

            }
            db.Close();
            return;
        }

        static void TestDataReader(string connstr, string driver)
        {
             DbEngineAdapter db =
                new DbEngineAdapter(connstr,driver);
             string query = "select * from logs";
             if (db.Open())
             {
                 IDataReader reader = db.ExecuteQuery(query);
                 while(reader.Read())
                 {
                     Console.WriteLine(reader.GetString(0));
                 }

             }
             db.Close();
        }

        public static void TestAdoNet()
        {
            SimpleADONet.TestAdoNetSpecificInterface();
            SimpleADONet.TestAdoNetWithGenericInterface();
        }
        static void Main(string[] args)
        {
            TestAdoNet();
            TestInsert(@"Data Source=./Logstorage.db", "SQLITE");
            TestDataSet(@"Data Source=./Logstorage.db", "SQLITE");
            TestDataReader(@"Data Source=./Logstorage.db", "SQLITE");
        }

            
    }
}
