using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SQLite;
namespace Chapter4_Example
{
    public class SimpleADONet
    {
        public static void TestAdoNetSpecificInterface()
        {
            string connectionString = @"Data Source=./Logstorage.db";
            //----- Create a Connection Object
            //----- and open it
            SQLiteConnection dbcon=
            new SQLiteConnection(connectionString);
            dbcon.Open();
            //----------- Create a Command Object
            //----------- to issue SQL Query
            SQLiteCommand dbcmd = dbcon.CreateCommand();
            string sql = "SELECT * from logs";
            dbcmd.CommandText = sql;

            //----------- Create a Reader Object 
            //----------- And Iterate through it
            SQLiteDataReader reader = dbcmd.ExecuteReader();
            while (reader.Read())
            {
                string logentry = reader.GetString(0);
                Console.WriteLine(logentry);
            }
            // clean up
            reader.Close();
            reader = null;
            dbcmd.Dispose();
            dbcmd = null;
            dbcon.Close();
            dbcon = null;
        }
        public static void TestAdoNetWithGenericInterface()
        {
            string connectionString = @"Data Source=./Logstorage.db";
            //------ Open a connection and assign the connection object 
            //------ to the IDbconnection interface. SQliteConnection,
            //------ OracleConnection,SQLConnection etc. implements the 
            //------ IDbConnection Interface
            IDbConnection dbcon
             = (IDbConnection)new SQLiteConnection(connectionString);
            dbcon.Open();
            //------------ IDbCommand is the interface for 
            //------------ Command Object . Every ADO.net 
            //------------ Interface (for Oracle,SQL server etc)
            //------------ supports it 
            IDbCommand dbcmd = dbcon.CreateCommand();
            string sql = "SELECT * from logs";
            dbcmd.CommandText = sql;
            //------- Create a Data Reader and Assign 
            //------- it to IDataReader Interface
            IDataReader reader = dbcmd.ExecuteReader();
            while (reader.Read())
            {
                string logentry = reader.GetString(0);
                Console.WriteLine(logentry);
            }
            // clean up
            reader.Close();
            reader = null;
            dbcmd.Dispose();
            dbcmd = null;
            dbcon.Close();
            dbcon = null;
        }

    }
}
