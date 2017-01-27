using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TabularRenderKit
{
    public interface IDocumentVisitor
    {
        void visit(TDocument doc);
        void visit(TDocumentTable table);
        void visit(TDocumentTableRow row);
        void visit(TDocumentTableCell cell);
        void visit(TDocumentText txt);

    }
}
