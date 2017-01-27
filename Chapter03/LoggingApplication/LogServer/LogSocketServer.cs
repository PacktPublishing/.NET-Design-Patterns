using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Sockets;
using System.Net.NetworkInformation;
using System.Net;
using System.Threading;
using System.IO;

namespace LogServer
{
    class LogSocketServer
    {
        private TcpListener _server;
        private Boolean _running;
        private int port = 4500;

        public LogSocketServer()
        {
            _server = new TcpListener(IPAddress.Any, port);
            _server.Start();
            _running = true;
            AcceptClients();
        }

        public void AcceptClients()
        {
            while (_running)
            {
                // wait for client connection
                TcpClient newClient = _server.AcceptTcpClient();
                Thread t = new Thread(new
            ParameterizedThreadStart(
                HandleClientData));
                t.Start(newClient);
            }
        }

        public void HandleClientData(object obj)
        {
            TcpClient client = obj as TcpClient;
            StreamReader sReader = new
            StreamReader(client.GetStream(),
                    Encoding.ASCII);
           
            String sData = null;
            bool bRead = true;
            while (bRead == true)
            {
                sData = sReader.ReadLine();
                if (sData == null || sData.Length == 0)
                {
                    bRead = false;
                }
                    
                Console.WriteLine(sData);
            }

          
        }
    }
}
