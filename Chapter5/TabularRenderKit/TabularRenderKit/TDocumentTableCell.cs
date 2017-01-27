using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TabularRenderKit
{
    public class TDocumentTableCell : TDocumentElement
    {
        public int ColumnSpan { get; set; }
        public alignment Horizontal { get; set; }
        public alignment Vertical { get; set; }
        public alignment Type { get; set; }

        /// <summary>
        /// Default Ctor
        /// </summary>
        public TDocumentTableCell()
        {
            this.ColumnSpan = 1;
            this.Horizontal = alignment.LEFT;
            this.Vertical = alignment.MIDDLE;
            this.Type = alignment.DATA;
        }
        public override void accept(IDocumentVisitor doc_vis)
        {
            doc_vis.visit(this);
        }
        /// <summary>
        /// Ctor
        /// </summary>
        /// <param name="type"></param>
        public TDocumentTableCell(alignment type)
        {
            this.Type = type;
        }

        

        
      
    }
}
