using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reactive.Concurrency;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SpellChecker
{
    public partial class frmSpellChecker : Form
    {
        private SpellCheckerViewModel _spellCheckerViewModel;
        public frmSpellChecker()
        {
            InitializeComponent();
            _spellCheckerViewModel = new SpellCheckerViewModel(NorvigSpellCheckerModel.Instance);
            //Data Binding Is Done Here
            lstBoxSuggestions.DataSource = _spellCheckerViewModel.Corrections;
            lstBoxLog.DataSource = _spellCheckerViewModel.Logs;
        }

        private void txtBoxSpellCorrect_TextChanged(object sender, EventArgs e)
        {
            _spellCheckerViewModel.SearchChanges(((TextBox)sender).Text);
        }

        private void frmSpellChecker_Load(object sender, EventArgs e)
        {

        }
    }
}
