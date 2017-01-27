using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace XMLSer
{
    class Program
    {
        private static DataSet CreateMultTable()
        {
            DataSet ds = new DataSet("CustomDataSet");
            DataTable tbl = new DataTable("Multiplicationtable");
            DataColumn column_1 = new DataColumn("Multiplicand");
            DataColumn column_2 = new DataColumn("Multiplier");
            DataColumn column_3 = new DataColumn("REsult");
            tbl.Columns.Add(column_1);
            tbl.Columns.Add(column_2);
            tbl.Columns.Add(column_3);

            ds.Tables.Add(tbl);
            int Multiplicand = 42;
            DataRow r;
            for (int i = 0; i < 10; i++)
            {
                r = tbl.NewRow();
                r[0] = Multiplicand;
                r[1] = i;
                r[2] = Multiplicand * i;
                tbl.Rows.Add(r);
            }
            return ds;
        }
        static void Main(string[] args)
        {
            XmlSerializer ser = new XmlSerializer(typeof(DataSet));
            DataSet ds = CreateMultTable();
            TextWriter writer = new StreamWriter("mult.xml");
            ser.Serialize(writer, ds);
            writer.Close();
            Console.ReadKey();

        }
    }
}
