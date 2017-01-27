using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace TabularRenderKit
{
    /// <summary>
    ///  A Visitor class to Handle PDF logic
    /// </summary>
    public class PDFVisitor : IDocumentVisitor
    {
        private string file_name = null;
        private PdfWriter writer = null;
        private Document document = null;
        private FileStream fs = null;
        private PdfPTable table_temp = null;
        private TDocumentTableRow _rows = null;
        private int column_count;

        public PDFVisitor(string filename)
        {

            file_name = filename;
            fs = new FileStream(file_name, FileMode.Create);
            document = new Document(PageSize.A4, 25, 25, 30, 30);
            writer = PdfWriter.GetInstance(document, fs);

        }
        public void visit(TDocument doc)
        {
            document.AddAuthor("Rajesh Khanna");
            document.AddCreator("iTextSharp Library");
            document.AddKeywords("Design Patterns Architecture");
            document.AddSubject("Book on .NET Design Patterns");
            document.Open();
            column_count = doc.ColumnCount;
            document.AddTitle(doc.Title);

            for (int x = 0; x < doc.DocumentElements.Count; x++)
            {
                try
                {
                    doc.DocumentElements[x].accept(this);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.Message);
                }
            }
            document.Add(this.table_temp);
            document.Close();
            writer.Close();
            fs.Close();
        }
        public void visit(TDocumentTable table)
        {
            this.table_temp = new PdfPTable(column_count);

            PdfPCell cell = new PdfPCell(new Phrase("Header spanning 3 columns"));
            cell.Colspan = column_count;
            cell.HorizontalAlignment = 1; //0=Left, 1=Centre, 2=Right
            table_temp.AddCell(cell);

            for (int x = 0; x < table.RowCount; x++)
            {
                try
                {
                    table.DocumentElements[x].accept(this);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.Message);
                }
            }

        }
        public void visit(TDocumentTableRow row)
        {
            for (int i = 0; i < row.DocumentElements.Count; ++i)
            {
                row.DocumentElements[i].accept(this);
            }


        }
        public void visit(TDocumentTableCell cell)
        {
            for (int i = 0; i < cell.DocumentElements.Count; ++i)
            {
                cell.DocumentElements[i].accept(this);
            }


        }
        public void visit(TDocumentText txt)
        {
            table_temp.AddCell(txt.Text);
        }
    }
}
