using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace TabularRenderKit
{
    public enum alignment { LEFT, CENTER, RIGHT, TOP, 
        MIDDLE, BOTTOM, HEADING, DATA };
    public enum heading { H1, H2, H3, H4, H5, H6 };
    public enum listType { UL, OL, MENU, DIR };

    public abstract class TDocumentElement
    {
        public List<TDocumentElement> DocumentElements { get; set; }
        public string BackgroundColor { get; set; }
        public alignment Align {get;set;} 
        public abstract void accept(IDocumentVisitor doc_vis);
        /// Constructor
        public TDocumentElement()
        {
            DocumentElements = new List<TDocumentElement>(5);
            this.Align = alignment.LEFT;
            this.BackgroundColor = "0xFF000000L";
        }

       
        public void addObject(TDocumentElement value)
        {
            if (value != null)
            {
                DocumentElements.Add(value);
            }
        }

        public Boolean removeObject(TDocumentElement value)
        {
            if (value != null)
            {
                DocumentElements.Remove(value);
                return true;
            }
            return false;
        }


       
        


    }
}
