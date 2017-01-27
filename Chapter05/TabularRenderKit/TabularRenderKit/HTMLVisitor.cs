using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
namespace TabularRenderKit
{
    public class HTMLVisitor : IDocumentVisitor
    {
        private String file_name = null;
        private StringBuilder document = null;

        public HTMLVisitor(string filename) {
            file_name = filename;
        }
        public void visit(TDocument doc) {
            document = new StringBuilder("<HTML><head>\n");
            document.Append("<title>");
            if (doc.Title != null)
            {
                document.Append(doc.Title);
            }
            document.Append("</title></head>\n\n<body ");
            string color = doc.BackgroundColor;
            if (color != null)
            {
                document.Append("BGCOLOR =\"" + color + "\"");
            }
            string textColor = doc.TextColor;
            if (textColor != null)
            {
                document.Append("TEXT =\"" + textColor + "\"");
            }
            string vlink = doc.Vlink;
            if (vlink != null)
            {
                document.Append("VLINK =\"" + vlink + "\"");
            }
            string linkColor = doc.LinkColor;
            if (linkColor != null)
            {
                document.Append("LINK =\"" + linkColor + "\"");
            }

            string alink = doc.Alink;
            if (alink != null)
            {
                document.Append("ALINK =\"" + alink + "\"");
            }
            document.Append(">\n");
            


            ///// Iterate through all objects in CHTMLObjects
            for (int x = 0; x < doc.DocumentElements.Count; x++)
            {
                try
                {
                  ( (TDocumentElement)doc.DocumentElements[x]).accept(this);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.Message);
                }
            }
            document.Append("\n</body>\n</HTML>\n");
            string html_content = document.ToString();
            // string rs = ds.toHTML();
            FileStream fs = new FileStream(this.file_name, FileMode.Create);
            StreamWriter st = new StreamWriter(fs);
            st.Write(html_content);
            st.Close();
          
        
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="table"></param>
        public void visit(TDocumentTable table) 
        {
                StringBuilder CHTML = new StringBuilder("<TABLE ");
                string bgColor = table.BackgroundColor;
                if (bgColor != null)
                {
                    CHTML.Append(" bgcolor=" + bgColor+" ");
                
                }
                int _width = table.Width;
                if (_width > 0)
                {
                    CHTML.Append(" WIDTH=" + _width);
                    if (table.PercentageWidth )
                    {
                         CHTML.Append("% ");
                    }
                    else
                    {
                        CHTML.Append(" ");
                    }
                 }

                  if (table.Border > -1)
                  {
               CHTML.Append(" BORDER=" + table.Border);
           }

           if (table.Cellpadding > -1)
           {
               CHTML.Append(" CELLSPACING=" + table.Cellpadding);
           }

          

           string color = table.BackgroundColor;
           if (color != null)
           {
               CHTML.Append(" BGCOLOR=\"" + color + "\" ");
           }
           CHTML.Append(">\n");

           string _caption = table.Caption;
           if (_caption != null)
           {
               CHTML.Append("\n<CAPTION>" + _caption+" </CAPTION>\n");
           }
           document.Append(CHTML.ToString());
           for (int x = 0; x < table.DocumentElements.Count; x++)
           {
               try
               {
                  ((TDocumentElement)table.DocumentElements[x]).accept(this);
               }
               catch (Exception ex)
               {
                   Console.Error.WriteLine(ex.Message);
               }
           }
           document.Append("\n</TABLE>");

      
        }
        public void visit(TDocumentTableRow row) {

            StringBuilder CHTML = new StringBuilder("<TR>");
            document.Append("<TR>");
            for (int x = 0; x < row.DocumentElements.Count; x++)
            {
                try
                {
                    ((TDocumentElement)row.DocumentElements[x]).accept(this);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.Message);
                }
            }
            document.Append("</TR>\n");

                 
        }
        public void visit(TDocumentTableCell cell) {

            StringBuilder CHTML = new StringBuilder("");
            string tag = null;
            string valign = null;
            string align = null;

            switch (cell.Vertical)
            {
                case alignment.TOP:
                    valign = "TOP";
                    break;
                case alignment.MIDDLE:
                    valign = "MIDDLE";
                    break;
                default:
                    valign = "BOTTOM";
                    break;
            }

            switch (cell.Horizontal)
            {
                case alignment.LEFT:
                    align = "LEFT";
                    break;
                case alignment.CENTER:
                    align = "CENTER";
                    break;
                default:
                    align = "RIGHT";
                    break;
            }

            if (cell.Type == alignment.DATA)
            {
                tag = "TD";
            }
            else
            {
                tag = "TH";
            }
            CHTML.Append("<" + tag + " VALIGN=" + valign + " ALIGN=" + align);
            CHTML.Append(" COLSPAN=" + cell.ColumnSpan + ">");
            document.Append(CHTML.ToString());

            for (int x = 0; x < cell.DocumentElements.Count; x++)
            {
                try
                {
                    ((TDocumentElement)cell.DocumentElements[x]).accept(this);
                }
                catch (Exception ex)
                {
                    Console.Error.WriteLine(ex.Message);
                }
            }
            document.Append("</" + tag + ">");
        
        }
        public void visit(TDocumentText txt) {

           StringBuilder CHTML = new StringBuilder(txt.Text);

            if (txt.Bold)
            {
                CHTML.Insert(0, "<B>");
                CHTML.Append("</B>");
            }

            if (txt.Italic)
            {
                CHTML.Insert(0, "<I>");
                CHTML.Append("</I>");
            }

            if (txt.Italic)
            {
                CHTML.Insert(0, "<U>");
                CHTML.Append("</U>");
            }

            if (txt.Preformatted)
            {
                CHTML.Insert(0, "<PRE>");
                CHTML.Append("</PRE>");
            }

            if (txt.Center)
            {
                CHTML.Insert(0, "<CENTER>");
                CHTML.Append("</CENTER>");
            }

            if (txt.Font)
            {
                if (txt.Color != null)
                {
                    String str = "<font color=";
                    str += txt.Color;
                    str += ">";
                    CHTML.Insert(0, str);
                    CHTML.Append("</font>");
                }
            }

            document.Append(CHTML.ToString());
        }
    }
}
