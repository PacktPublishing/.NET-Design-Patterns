using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using System.IO;


namespace LogLibrary
{
    public class FileContentWriter : BaseContentWriter
    {
        private string _file_name;
        public FileContentWriter(string name)
        {
            _file_name =  name;
        }

        public override bool WriteToMedia( string content)
        {
             using (FileStream SourceStream = 
                    File.Open(_file_name, FileMode.Append ))
                {
                        byte[] buffer = 
                            Encoding.UTF8.GetBytes(content+"\r\n");
                        SourceStream.Write (buffer, 0, buffer.Length);
                }
                return true;
        }
    }
            
}
    

