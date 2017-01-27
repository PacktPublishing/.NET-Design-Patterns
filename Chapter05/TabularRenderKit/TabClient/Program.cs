using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TabularRenderKit;
using System.IO;
using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace TabClient
{
    class Program
    {
        static void CallPDF()
        {
            FileStream fs = new FileStream(@"D:\ab\fund.pdf", FileMode.Create);
            Document document = new Document(PageSize.A4, 25, 25, 30, 30);
            PdfWriter writer = PdfWriter.GetInstance(document, fs);
            document.AddAuthor("Praseed Pai");
            document.AddCreator("iTextSharp PDF Library");
            document.AddTitle("PDF Demo");
            document.Open();
            PdfPTable table = new PdfPTable(2);
            PdfPCell cell = new PdfPCell(new Phrase("A Header which spans 3"));
            cell.Colspan = 3;
            cell.HorizontalAlignment = 1; 
            table.AddCell(cell);
            table.AddCell("Col 1 Row 1");
            table.AddCell("Col 2 Row 1");
            table.AddCell("Col 3 Row 1");
            table.AddCell("Col 1 Row 2");
            table.AddCell("Col 2 Row 2");
            table.AddCell("Col 3 Row 2");
            document.Add(table);
            document.Close();
            writer.Close();
            fs.Close();
        }

        //static void HTMLtest()
        //{
        //    TDocument ds = new TDocument(3);
        //    TDocumentText txt = new TDocumentText("Accounting Group");
        //    txt.Bold = true; 
        //    txt.Italic = true; 
        //    txt.Font =true;
        //    txt.Color = "#800000";
        //    TDocumentTable table = new TDocumentTable();
        //    table.Border=1;
        //    table.Caption = "Accounting Group";
        //    table.Width=100;
        //    table.BackgroundColor="#EFEEEC";
        //    TDocumentTableRow row = null;
        //    row = new TDocumentTableRow();

        //    TDocumentText headtxt = new TDocumentText("Group Code");
        //    headtxt.Bold = true;
        //    headtxt.Font=true;
        //    headtxt.Color="#800000";
        //    TDocumentTableCell cell = null;
        //    cell = new TDocumentTableCell(alignment.HEADING);
        //    cell.addObject(headtxt);
        //    row.addObject(cell);

        //    headtxt = new TDocumentText("Group Name");
        //    headtxt.Bold = true; 
        //    headtxt.Font=true;
        //    headtxt.Color="#800000";
        //    cell = new TDocumentTableCell(alignment.HEADING);
        //    cell.addObject(headtxt);
        //    row.addObject(cell);

        //    int a = 16;
        //    int j = 1;

        //    while (j < 12)
        //    {
        //        row = new TDocumentTableRow();
        //        cell = new TDocumentTableCell(alignment.DATA);
        //        cell.addObject(new TDocumentText(a.ToString()));
        //        row.addObject(cell);
        //        cell = new TDocumentTableCell(alignment.DATA);

        //        cell.addObject(new TDocumentText(j.ToString()));
        //        row.addObject(cell);
        //        cell = new TDocumentTableCell(alignment.DATA);
        //        int result = a * j;
        //        cell.addObject(new TDocumentText(result.ToString()));

        //        row.addObject(cell);
        //        table.addObject(row);
        //        j++;
        //    }



        //    //ds.addObject(txt);
        //    ds.addObject(table);

        //    string filename = 
        //        @"D:\ab\fund.html";
        //    ds.accept(new HTMLVisitor(filename));

        //   // string rs = ds.toHTML();
        //   // FileStream fs = new FileStream(@"d:\ab\a.html", FileMode.Create);
        //   // StreamWriter st = new StreamWriter(fs);
        //   // st.Write(rs);
        //   // st.Close();

        //}

        static void DocumentRender()
        {
            TDocument ds = new TDocument(3);
            ds.Title = "Multiplication Table";
            TDocumentTable table = new TDocumentTable();
            table.Border = 1;
            table.Width = 100;
            table.BackgroundColor = "#EFEEEC";
            TDocumentTableRow row = null;
            row = new TDocumentTableRow();

            TDocumentText headtxt = new TDocumentText("Multiplicand");
            headtxt.Font = true;
            headtxt.Color = "#800000";
            TDocumentTableCell cell = null;
            cell = new TDocumentTableCell(alignment.HEADING);
            cell.addObject(headtxt);
            row.addObject(cell);

            headtxt = new TDocumentText("Multiplier");
            headtxt.Color = "#800000";
            cell = new TDocumentTableCell(alignment.HEADING);
            cell.addObject(headtxt);
            row.addObject(cell);
            headtxt = new TDocumentText("Result");
            headtxt.Color = "#800000";
            cell = new TDocumentTableCell(alignment.HEADING);
            cell.addObject(headtxt);
            row.addObject(cell);
            table.addObject(row);

            int a = 16;
            int j = 1;

            while (j < 12)
            {
                row = new TDocumentTableRow();
                cell = new TDocumentTableCell(alignment.DATA);
                cell.addObject(new TDocumentText(a.ToString()));
                row.addObject(cell);
                cell = new TDocumentTableCell(alignment.DATA);

                cell.addObject(new TDocumentText(j.ToString()));
                row.addObject(cell);
                cell = new TDocumentTableCell(alignment.DATA);
                int result = a * j;
                cell.addObject(new TDocumentText(result.ToString()));

                row.addObject(cell);
                table.addObject(row);
                j++;
            }



            
            ds.addObject(table);

            string filename =
                @"D:\ab\fund.pdf";
            ds.accept(new PDFVisitor(filename));

            string filename2 =
               @"D:\ab\fund.html";
            ds.accept(new HTMLVisitor(filename2));

        }

        static void Main(string[] args)
        {

            DocumentRender();

        }
    }
}
