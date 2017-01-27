using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using ExpressionLib;

namespace GraphPlotter
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private String _expr_evaluated = "2*3";
        private Subject _subject = null;
        private ExpressionObserver _observer = null; 

        public MainWindow()
        {

            InitializeComponent();
            _observer = new ExpressionObserver(this);
            _subject = new Subject();
            _subject.RegisterClient(_observer);
                      
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Render();
            
            
        }

        public void Render()
        {
            String expr = this._expr_evaluated;
            Canvas cv =
               MainWindow.FindChild<Canvas>(Application.Current.MainWindow, "DrawSurface");
            ExpressionPlotter p = new ExpressionPlotter(cv, expr);
            p.Render();
        }

        public string Expr
        {
            get { return this._expr_evaluated;  }
            set { this._expr_evaluated = value; }
        }

        public static T FindChild<T>(DependencyObject parent, string childName)
   where T : DependencyObject
        {
            // Confirm parent and childName are valid. 
            if (parent == null) return null;

            T foundChild = null;

            int childrenCount = VisualTreeHelper.GetChildrenCount(parent);
            for (int i = 0; i < childrenCount; i++)
            {
                var child = VisualTreeHelper.GetChild(parent, i);
                // If the child is not of the request child type child
                T childType = child as T;
                if (childType == null)
                {
                    // recursively drill down the tree
                    foundChild = FindChild<T>(child, childName);

                    // If the child is found, break so we do not overwrite the found child. 
                    if (foundChild != null) break;
                }
                else if (!string.IsNullOrEmpty(childName))
                {
                    var frameworkElement = child as FrameworkElement;
                    // If the child's name is set for search
                    if (frameworkElement != null && frameworkElement.Name == childName)
                    {
                        // if the child's name is of the request name
                        foundChild = (T)child;
                        break;
                    }
                }
                else
                {
                    // child element found.
                    foundChild = (T)child;
                    break;
                }
            }

            return foundChild;
        }

        private void text_changed(object sender, TextChangedEventArgs e)
        {
            if ( _subject != null )
            _subject.UpdateClient(this.ExprText.Text);
        }
    }
}
