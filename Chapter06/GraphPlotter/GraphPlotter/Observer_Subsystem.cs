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
    //{

    //    this._window.Expr = expression;

    //    ExpressionBuilder builder = new ExpressionBuilder(expression);

    //    if ( builder != null )
    //    {
    //        this._window.Render();
    //    }

    //}
    public abstract class BaseObserver
    {
        protected delegate void ExpressionEventHandler(string expression);
        protected ExpressionEventHandler ExpressionChangedEvent;
        protected Control _ctrl = null;

        public BaseObserver(Control ctrl)
        {
            this.ExpressionChangedEvent += new ExpressionEventHandler(Observer_ExpressionChangedEvent);
            this._ctrl = ctrl;
        }

        private void OnChange(string expression)
        {
            if (ExpressionChangedEvent != null)
            {
                ExpressionChangedEvent(expression);
            }
        }

        public void Update(string expression)
        {
            OnChange(expression);
        }

        public abstract void Observer_ExpressionChangedEvent(string expression);
      

    }

    class ExpressionObserver : BaseObserver
    {
        public ExpressionObserver(Window _win) : base(_win)
        { }
        public override void Observer_ExpressionChangedEvent(string expression)
        {
            MainWindow mw = this._ctrl as MainWindow;
            mw.Expr = expression;
            ExpressionBuilder builder = new 
                ExpressionBuilder(expression);
            Exp expr_tree = builder.GetExpression();

            if ( expr_tree != null )
                    mw.Render();
         }
    }


    public class Subject
    {
        List<BaseObserver> observers = new List<BaseObserver>();
        private delegate void NotifyHandler(string expression);
        private event NotifyHandler NotifyEvent;

        public Subject(){
            this.NotifyEvent += new NotifyHandler(Notify);
        }

        public void UpdateClient(string expression){
            OnNotify(expression);
        }

        private void OnNotify(string expression){
            if (NotifyEvent != null)
                   NotifyEvent(expression);
        }

        private void Notify(string expression){
            foreach (BaseObserver b in observers)
                     b.Update(expression);
        }

        public void RegisterClient(BaseObserver obs){
            observers.Add(obs);
        }
    }
}
