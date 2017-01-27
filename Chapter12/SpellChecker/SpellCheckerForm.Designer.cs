namespace SpellChecker
{
    partial class frmSpellChecker
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.txtBoxSpellCorrect = new System.Windows.Forms.TextBox();
            this.lstBoxSuggestions = new System.Windows.Forms.ListBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtBoxSpellCorrect
            // 
            this.txtBoxSpellCorrect.Location = new System.Drawing.Point(114, 23);
            this.txtBoxSpellCorrect.Name = "txtBoxSpellCorrect";
            this.txtBoxSpellCorrect.Size = new System.Drawing.Size(430, 20);
            this.txtBoxSpellCorrect.TabIndex = 0;
            this.txtBoxSpellCorrect.TextChanged += new System.EventHandler(this.txtBoxSpellCorrect_TextChanged);
            // 
            // lstBoxSuggestions
            // 
            this.lstBoxSuggestions.FormattingEnabled = true;
            this.lstBoxSuggestions.Location = new System.Drawing.Point(114, 49);
            this.lstBoxSuggestions.Name = "lstBoxSuggestions";
            this.lstBoxSuggestions.Size = new System.Drawing.Size(211, 95);
            this.lstBoxSuggestions.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(30, 26);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(43, 13);
            this.label1.TabIndex = 3;
            this.label1.Text = "Lookup";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(30, 59);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(78, 13);
            this.label2.TabIndex = 4;
            this.label2.Text = "Did you mean?";
            // 
            // frmSpellChecker
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(576, 164);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.lstBoxSuggestions);
            this.Controls.Add(this.txtBoxSpellCorrect);
            this.Name = "frmSpellChecker";
            this.Text = " NorvigSpellChecker";
            this.Load += new System.EventHandler(this.frmSpellChecker_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtBoxSpellCorrect;
        private System.Windows.Forms.ListBox lstBoxSuggestions;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;

    }
}

