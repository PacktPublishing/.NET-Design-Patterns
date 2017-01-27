using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogLibrary
{
    public class DbContentWriter : BaseContentWriter
    {
        private string _con_str = 
        @"Data Source=./Logstorage.db";
        public DbContentWriter(){ }
        public override bool WriteToMedia(string logcontent) {
            
            SQLAccess access = new SQLAccess(_con_str);
            if (access.Open())
            {
                string query = "INSERT INTO logs VALUES('" +
                    logcontent + "');";
               bool result =  access.ExecuteNonQuery(query);
               access.Close();
               return result;
            }

            return false; 
        }
      
    }


}
