using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TabularRenderKit
{
    public class TDocumentTableRow : TDocumentElement
    {
        /// <summary>
        /// Default Ctor
        /// </summary>
        public TDocumentTableRow()
        {
        }

        public override void accept(IDocumentVisitor doc_vis)
        {
            doc_vis.visit(this);
        }

     
    }
}
