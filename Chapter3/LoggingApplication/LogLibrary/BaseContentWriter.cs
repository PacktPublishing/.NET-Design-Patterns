using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogLibrary
{
  public abstract class BaseContentWriter : IContentWriter
  {
        private ConcurrentQueue<string> queue = new ConcurrentQueue<string>();
        private Object _lock = new Object();

        public BaseContentWriter() { }
        //---- Write to Media
        public abstract bool WriteToMedia(string logcontent);

        public async Task<bool> Write(string content)
        {
            queue.Enqueue(content);

            if (queue.Count <= 10)
                return true;

           lock (_lock)
            {
                Task temp = Task.Run(() => Flush());
                Task.WaitAll(new Task[] { temp });
                              
            }

            return true;
        }

        async Task  Flush()
        {

            string content;
            int count = 0;
            while (queue.TryDequeue(out content) && count <= 10)
            {
                //--- Write to Appropriate Media
                //--- Calls the Overriden method
                WriteToMedia(content);
                count++;
            }



        }
      
    }
}
