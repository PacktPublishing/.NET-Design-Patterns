using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleVisitor
{
    public enum OPERATOR
    {
        //--- supports +,-,*/
        PLUS,MINUS,MUL,DIV
    }
    /// <summary>
    /// Base class for all Expression
    /// supports accept method to implement 
    /// so called "Double Dispatch". Search for 
    /// "Double Dispatch" and Visitor to understand more 
    /// about this strategy
    /// </summary>
    public abstract class Expr
    {
        public abstract double accept(IExprVisitor expr_vis);
    }
    /// <summary>
    ///  Our Visitor Interface. The Purpose of seperating Processing
    ///  Of Nodes and Data Storage (heirarchy) is for various transformations on
    ///  the composites created.
    /// </summary>
    public interface IExprVisitor
    {
         double Visit(Number num);
         double Visit(BinaryExpr bin);
         double Visit(UnaryExpr un);
    }

   /// <summary>
   ///  Class Number stores a IEEE 754 doouble precision
   ///  floating point
   /// </summary>
   public class Number : Expr
    {
       public double NUM { get; set; }
       public Number(double n) { this.NUM = n; }
       public  override double accept(IExprVisitor expr_vis)
       {
            return expr_vis.Visit(this);
       }
    }
    /// <summary>
    ///  Class BinaryExpr models a binary expression of 
    ///  the form <Operand> <OPER> <Operand>
    /// </summary>
    public class BinaryExpr : Expr
    {
        public Expr Left { get; set; }
        public Expr Right { get; set; }
        public OPERATOR OP { get; set; }
        public BinaryExpr(Expr l,Expr r,OPERATOR op){
            Left = l; Right = r; OP = op;
        }
        public override double accept(IExprVisitor expr_vis)
        {
            return expr_vis.Visit(this);
        }
        
    }
    /// <summary>
    /// Class UnaryExpr models a unary expression of the form
    /// <OPER> <OPERAND> 
    /// </summary>
    public  class UnaryExpr  : Expr {
        public Expr Right;
        public OPERATOR OP;
        public UnaryExpr (Expr r,OPERATOR op) {
            Right = r; OP = op;
        }
        public override double accept(IExprVisitor expr_vis)
        {
          return expr_vis.Visit(this);
        }
    }
    /// <summary>
    ///  Tree Evaluator - Evaluates Expression Tree through Depth 
    ///  First Traversal
    /// </summary>
    public class TreeEvaluatorVisitor : IExprVisitor
    {
        
        public  double Visit(Number num)
        {
            return num.NUM;
        }
        public double Visit(BinaryExpr bin)
        {
           if (bin.OP == OPERATOR.PLUS)
                return bin.Left.accept(this) + bin.Right.accept(this);
            else if (bin.OP == OPERATOR.MUL)
            return bin.Left.accept(this) * bin.Right.accept(this);
            else if (bin.OP == OPERATOR.DIV)
            return bin.Left.accept(this) / bin. Right.accept(this); 
            else if (bin.OP == OPERATOR.MINUS)
              return bin.Left.accept(this) - bin.Right.accept(this);

             return Double.NaN;

        }
        public double Visit(UnaryExpr un)
            
        {
           if (un.OP == OPERATOR.PLUS)
                return +  un.Right.accept(this);
           else  if (un.OP == OPERATOR.MINUS)
                return - un.Right.accept(this);
             return Double.NaN;

        }
        
    }
    /// <summary>
    ///  A Visitor implementation which converts Infix expression to 
    ///  a Reverse Polish Notation ( RPN) 
    /// </summary>
    public class ReversePolishEvaluator : IExprVisitor
    {

        public double Visit(Number num)
        {
            Console.Write(num.NUM+ " ");
            return 0;
        }
        public double Visit(BinaryExpr bin)
        {
            bin.Left.accept(this);
            bin.Right.accept(this);

            if (bin.OP == OPERATOR.PLUS)
                Console.Write(" + ");
            else if (bin.OP == OPERATOR.MUL)
                Console.Write(" * ");
            else if (bin.OP == OPERATOR.DIV)
                Console.Write(" / ");
            else if (bin.OP== OPERATOR.MINUS)
                Console.Write(" - ");

            return Double.NaN;

        }
        public double Visit(UnaryExpr un)
        {
           
            un.Right.accept(this);
            if (un.OP == OPERATOR.PLUS)
                Console.Write("  + ");
            else if (un.OP == OPERATOR.MINUS)
                Console.Write("  - ");
            return Double.NaN;

        }

    }
    /// <summary>
    ///  A Visitor which evaluates the Infix expression using a Stack
    ///  We will leverage stack implementation available with .NET 
    ///  collections API
    /// </summary>
    public class StackEvaluator : IExprVisitor
    {
        private Stack<double> eval_stack = new Stack<double>();

        public double get_value() { return eval_stack.Pop(); }
        public StackEvaluator()
        {
            eval_stack.Clear();
        }
        public double Visit(Number num)
        {
            eval_stack.Push(num.NUM);
            return 0;
        }
        public double Visit(BinaryExpr bin)
        {
            bin.Left.accept(this);
            bin.Right.accept(this);

            if (bin.OP == OPERATOR.PLUS)
                eval_stack.Push(eval_stack.Pop() + eval_stack.Pop());
            else if (bin.OP == OPERATOR.MUL)
                eval_stack.Push(eval_stack.Pop() * eval_stack.Pop());
            else if (bin.OP == OPERATOR.DIV)
                eval_stack.Push(eval_stack.Pop() / eval_stack.Pop());
            else if (bin.OP== OPERATOR.MINUS)
                eval_stack.Push(eval_stack.Pop() - eval_stack.Pop());

            return Double.NaN;

        }
        public double Visit(UnaryExpr un)
        {

            un.Right.accept(this);
            if (un.OP == OPERATOR.PLUS)
                eval_stack.Push(eval_stack.Pop());
            else if (un.OP == OPERATOR.MINUS)
                eval_stack.Push(-eval_stack.Pop());
            return Double.NaN;

        }

    }
}
