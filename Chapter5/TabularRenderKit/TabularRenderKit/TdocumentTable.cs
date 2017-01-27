using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TabularRenderKit
{
    public class TDocumentTable : TDocumentElement
    {
        public string  Caption {get;set; }
        public int Width { get;set; }
        public int Border { get; set; }
        public int CellSpacing { get;set;}
        public int Cellpadding { get; set; }
        public Boolean PercentageWidth { get;set; }
        private String bgColor {get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public int RowCount
        {
            get
            {
                return this.DocumentElements.Count;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="doc_vis"></param>
        public override void accept(IDocumentVisitor doc_vis)
        {
            doc_vis.visit(this);
        }
        
        /// <summary>
        /// Default Ctor
        /// </summary>
        public TDocumentTable()
        {
        }

       
    }
}
