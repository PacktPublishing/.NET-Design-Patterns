using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TabularRenderKit
{
    public class TDocumentText : TDocumentElement
    {
        public string Text { set;get; }
        public Boolean Bold {get;set;}
        public Boolean Italic {get;set;}
        public Boolean Underline { get; set; }
        public Boolean Center {get;set;}
        public Boolean Preformatted { get; set; }
        public string Color { get; set; }
        public Boolean Font  {get;set;}

        ////// Default constructor
        public TDocumentText()
        {
        }
        public override void accept(IDocumentVisitor doc_vis)
        {
            doc_vis.visit(this);
        }
        //// Constructor with text value
        public TDocumentText(string value)
        {
            if (value != null)
            {
                this.Text = value;
            }
        }

       
        

        

        
    }
}
