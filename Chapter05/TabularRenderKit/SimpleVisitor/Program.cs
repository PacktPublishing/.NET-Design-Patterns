using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleVisitor
{
    class Program
    {
        static void Main(string[] args)
        {
            Expr r = new BinaryExpr(new Number(2),
                new BinaryExpr(new Number(3), new Number(4), OPERATOR.MUL),
                OPERATOR.PLUS);
            double n = r.accept(new TreeEvaluatorVisitor());
            Console.WriteLine(n);
            r.accept(new ReversePolishEvaluator());
            Console.WriteLine();
            StackEvaluator s = new StackEvaluator();
            r.accept(s);
            Console.WriteLine(s.get_value());
            Console.WriteLine();
            r = new BinaryExpr(
                new UnaryExpr(new Number(10), OPERATOR.MINUS), new Number(15),OPERATOR.PLUS);
       s = new StackEvaluator();
            r.accept(s);
        
            Console.WriteLine(s.get_value());
            r.accept(new ReversePolishEvaluator());
            Console.Read();
        }
    }
}
