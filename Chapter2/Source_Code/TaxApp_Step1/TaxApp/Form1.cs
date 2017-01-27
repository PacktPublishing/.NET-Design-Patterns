using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TaxEngine;

namespace TaxApp
{
    public partial class TaxCalcForm : Form
    {
        public TaxCalcForm()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        public static void ShowError()
        {
            MessageBox.Show( "Error in input");
        }
        public static TaxableEntity GetEntityFromUI(TaxCalcForm tf)
        {
            TaxableEntity te = new TaxableEntity();
            te.taxparams = new TaxParamVO();

            int gid=1, gage=61;
            double gda=1, gbasic=2, gallowance=3, ghra=1, gdeductions=1, gcess=1;
            char gsex='M';

            //if (!( Int32.TryParse(tf.Idtxt.Text,out gid) &
            //     Char.TryParse(tf.Sextxt.Text,out gsex) &&
            //     Int32.TryParse(tf.Agetxt.Text,out gage) &&
            //     Double.TryParse(tf.DAtxt.Text,out gda) &&
            //     Double.TryParse(tf.AllowanceTxt.Text,out gallowance) &&
            //      Double.TryParse(tf.Basictxt.Text,out gbasic) &&
            //       Double.TryParse(tf.HRAtxt.Text,out ghra) &&
            //       Double.TryParse(tf.Deductionstxt.Text,out gdeductions) &&
            //       Double.TryParse(tf.CESStxt.Text,out gcess)))
            //{
            //    return null;
            //}




            te.id = gid;
            te.name = tf.Nametxt.Text;
            te.age = gage;
            te.Sex = (gsex == 'M' || gsex == 'm')?'M':'F';
            te.Location = tf.Locationtxt.Text;
            te.taxparams.Basic = gbasic ;
            te.taxparams.DA = gda;
            te.taxparams.HRA = ghra;
            te.taxparams.Cess = gcess;
            te.taxparams.Deductions = gdeductions;
            te.taxparams.Allowance = gallowance;
            te.taxparams.Computed = false;
            return te; 
        }

        public static void ViewHandler(TaxCalcForm tf)
        {
            TaxableEntity te = GetEntityFromUI(tf);
            if (te == null)
            {
                ShowError();
                return;
            }
            string archetype = ComputeArchetype(te);
            COMPUTATION_CONTEXT ctx = new COMPUTATION_CONTEXT();
            TaxDTO td = new TaxDTO { id = te.id, taxparams = te.taxparams};
            ctx.Put("tax_cargo",td);
            bool rs = CommandDispatcher.Dispatch(archetype, ctx);
            if ( rs ) {
                TaxDTO temp = (TaxDTO)ctx.Get("tax_cargo");
                tf.Liabilitytxt.Text = Convert.ToString(temp.taxparams.TaxLiability);
                tf.Refresh();
            }
    }



        

        public static string ComputeArchetype(TaxableEntity te)
        {
            return  (te.age > 60 ) ? "SeniorCitizen" :"OrdinaryCitizen";
        }                   

        private void Submitbtn_Click(object sender, EventArgs e)
        {
            ViewHandler(this);
        }
    }
}
