using System.Linq;
using System.Windows.Forms;
using System.Reactive;
using System.Reactive.Linq;
using System;
using System.Reactive.Concurrency;
using System.Reactive.Disposables;
using System.Reactive.Subjects;

namespace RxSimpleWinForm
{
   

class Program {
  
    static void Main() 
    {
         var mylabel = new Label(); 
         var myform = new Form { Controls = { mylabel } }; 

         IObservable<EventPattern<MouseEventArgs>> mousemove = 
             System.Reactive.Linq.Observable.
             FromEventPattern<MouseEventArgs>(myform, "MouseMove");

         mousemove.Subscribe(
             (evt)=>{mylabel.Text = evt.EventArgs.X.ToString();},
             ()=>{});
         Application.Run(myform);
        
   }
}

}
