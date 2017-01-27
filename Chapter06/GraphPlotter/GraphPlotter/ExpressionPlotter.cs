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
    class ExpressionPlotter
    {
        private Canvas _cv = null;
        private String expr = null;
        public ExpressionPlotter(Canvas cv, string math_expr)
        {
            _cv = cv;
            expr = math_expr;
        }

        public bool Render(string expression = null)
        {
            _cv.Children.Clear();
            double y  = _cv.Height;
            double x = _cv.Width;
            Transform txv = _cv.RenderTransform;
            TransformGroup tg = new TransformGroup();
            ScaleTransform sc = new ScaleTransform(1,-1);
            TranslateTransform tt = new TranslateTransform(x/2,y/2);
            //tg.Children.Add(tt);
            tg.Children.Add(sc);
            tg.Children.Add(tt);

            _cv.RenderTransform = tg;
            Line myLine = new Line();
            myLine.Stroke = System.Windows.Media.Brushes.LightSteelBlue;
            myLine.X1 = -x / 2;
            myLine.Y1 = 0;
            myLine.X2 = x/2;
            myLine.Y2 = 0;
            myLine.HorizontalAlignment = HorizontalAlignment.Left;
            myLine.VerticalAlignment = VerticalAlignment.Center;
            myLine.StrokeThickness = 2;
            _cv.Children.Add(myLine);
            myLine = new Line();
            myLine.Stroke = System.Windows.Media.Brushes.LightSteelBlue;
            myLine.X1 = 0;
            myLine.Y1 = y/2;
            myLine.X2 = 0;
            myLine.Y2 = -y/2;
            myLine.HorizontalAlignment = HorizontalAlignment.Left;
            myLine.VerticalAlignment = VerticalAlignment.Center;
            myLine.StrokeThickness = 2;
            _cv.Children.Add(myLine);

            double t = -x / 2;
            double final = x / 2;
            ExpressionBuilder bld = new ExpressionBuilder(expr);
            Exp e = bld.GetExpression();

            if (e == null)
                return false;
            RUNTIME_CONTEXT context = new RUNTIME_CONTEXT();
            context.T = t;
           
            for (; t < final; t += 4)
            {
                Line ln = new Line();
                context.T=t;
                double n = e.Evaluate(context);
               
                ln.X1 = t;
                ln.Y1 = n;
                ln.X2 = t;
                ln.Y1 = n;
                ln.Stroke = System.Windows.Media.Brushes.Red;

                ln.HorizontalAlignment = HorizontalAlignment.Left;
                ln.VerticalAlignment = VerticalAlignment.Center;
                ln.StrokeThickness = 2;
                _cv.Children.Add(ln);
                
            }

                return true;


        }
    }
}
