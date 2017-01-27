using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogLibrary
{
    ////////////////////////////////
    //
    // Declare a Logger class ...with one abstract method
    // DoLog
    // 
    // DoLog is our template method...
    //
    public abstract class LogStrategy
    {

        /////////////////////////////
        //
        // Concrete classes will override this 
        protected abstract bool DoLog(String logitem);

        ///////////////////////////////////////////
        //
        // public API  
        public bool Log(String app, String key, String cause)
        {
            return DoLog(app + " " + key + " " + cause);
        }

    }

    //////////////////////////////////////
    //
    // File Log will log to the Database...!
    //
    // This will override the template method !

    public class FileLogStrategy : LogStrategy
    {
        BaseContentWriter wt = new FileContentWriter(@"log.txt");

        protected override bool DoLog(String logitem)
        {
            // Log into the file
           wt.Write(logitem);
           return true;
           
        }


    }
    //////////////////////////////////////////////
    // Db Logger will log into the Disk File...
    //
    //  
    //
    public class DbLogStrategy : LogStrategy
    {
        BaseContentWriter wt = new DbContentWriter();

        protected override bool DoLog(String logitem)
        {
            wt.Write(logitem);
            return true;
        }


    }
    /////////////////////////////
    //
    // NullLogger is a NOP logger....
    //
    public class NullLogStrategy : LogStrategy
    {
        protected override bool DoLog(String logitem)
        {
            // Log into the Console
            Console.WriteLine(logitem+"\r\n");
            return true;
        }


    }

    public class NetLogStrategy : LogStrategy
    {
        BaseContentWriter nc = new NetworkContentWriter();

        protected override bool DoLog(String logitem)
        {
            // Log into the Network Socket
            nc.Write(logitem);
            return true;
        }


    }


    //////////////////////////////////////////
    //
    // Create a Factory method to instantiate the Logger....!
    //
    // LoggerFactory can be singleton...
    //
    public class LoggerFactory
    {
       static  ObjectFactory of = new ObjectFactory("LogStrategy.xml");
#if false 
        public static LogStrategy CreateLogger(string loggertype)
        {

            if (loggertype == "DB")
                return new DbLogStrategy();
            else if (loggertype == "FILE")
                return new FileLogStrategy();
            else if (loggertype == "NET")
            {
                return new NetLogStrategy();
            }
            else
                return new NullLogStrategy();

        }
#else
public static LogStrategy CreateLogger(string loggertype)
{
    LogStrategy sf = (LogStrategy)of.Get(loggertype);
    return (sf != null)?sf: new NullLogStrategy();
}


#endif


    }
}
