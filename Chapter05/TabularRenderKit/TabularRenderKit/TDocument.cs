using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;


namespace TabularRenderKit
{
    public class TDocument : TDocumentElement
    {
        public string Title { get;set; }
        public string BackGroundImage { get; set; }
        public string TextColor { get; set; }
        public string LinkColor {get;set;}
        public string Vlink { get; set; }
        public string Alink {get;set;}
        public  int ColumnCount { get; set; }

        public override void accept(IDocumentVisitor doc_vis)
        {
            doc_vis.visit(this);
        }

        /// ///// Constructor
        public TDocument(int count=1)
        {
            this.ColumnCount = count;
            this.Title = "Defualt Title";
        }
       

        /// Constructor with Title
        public TDocument(string value)
        {
            if (value != null)
            {
                this.Title = value;
            }
        }



    }
}
