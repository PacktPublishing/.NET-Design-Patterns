 ////////////////////////////////////////////////////////
//
//  This software is released as per the clauses of MIT License
//
// 
//  The MIT License
//
//  Copyright (c) 2010, Praseed Pai K.T.
//                      http://praseedp.blogspot.com
//                      praseedp@yahoo.com  
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
//
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ExpressionLib
{
  
   
    public class RUNTIME_CONTEXT
    {
        private double _t;
        public RUNTIME_CONTEXT()
        {
            _t = 0;
        }

        public double T
        {
            get { return _t; }
            set { _t = value; }
        }
        //public void SetValue( double d)
        //{
        //        _t = d;
            
        //}
        //public double GetValue() { return _t; }

    }
    /// <summary>
    ///    Enumeration for operators
    /// </summary>
   public enum OPERATOR
    {
        ILLEGAL = -1,PLUS,
        MINUS, DIV, MUL
    }
    /// <summary>
    ///      Abstract for Expression evaluation
    /// </summary>
   public abstract class Exp
    {
        public abstract double Evaluate(RUNTIME_CONTEXT cont);
    }
    /// <summary>
    ///      one can store number inside the class
    /// </summary>
   public class NumericConstant : Exp
    {
        private double _value;
        /// <summary>
        ///     Construction does not do much , just keeps the 
        ///     value assigned to the private variable
        /// </summary>
        /// <param name="value"></param>

        public NumericConstant(double value)
        {
            _value = value;
        }
        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {
            return _value;
        }

    }
    /// <summary>
    ///     This class supports Binary Operators like + , - , / , *
    /// </summary>
    public class BinaryExp : Exp
    {
        private Exp _ex1, _ex2;
        private OPERATOR _op;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="op"></param>

        public BinaryExp(Exp a, Exp b, OPERATOR op)
        {
            _ex1 = a;
            _ex2 = b;
            _op = op;
        }

        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {


            switch (_op)
            {
                case OPERATOR.PLUS:
                    return _ex1.Evaluate(cont) + _ex2.Evaluate(cont);
                case OPERATOR.MINUS:
                    return _ex1.Evaluate(cont) - _ex2.Evaluate(cont);
                case OPERATOR.DIV:
                    return _ex1.Evaluate(cont) / _ex2.Evaluate(cont);
                case OPERATOR.MUL:
                    return _ex1.Evaluate(cont) * _ex2.Evaluate(cont);

            }

            return Double.NaN;

        }

    }


    /// <summary>
    ///     This class supports Unary Operators like + , - , / , *
    /// </summary>
    class UnaryExp : Exp
    {
        private Exp _ex1;
        private OPERATOR _op;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="op"></param>

        public UnaryExp(Exp a, OPERATOR op)
        {
            _ex1 = a;
            _op = op;
        }

        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {

            switch (_op)
            {
                case OPERATOR.PLUS:
                    return _ex1.Evaluate(cont);
                case OPERATOR.MINUS:
                    return -_ex1.Evaluate(cont);
            }

            return Double.NaN;

        }

    }

    class SineExp : Exp
    {
        private Exp _ex1;
       
        /// <summary>
        /// 
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="op"></param>

        public SineExp(Exp a)
        {
            _ex1 = a;
            
        }

        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {

           double val = _ex1.Evaluate(cont);
           return Math.Sin(val);

           

        }

    }

    class CosExp : Exp
    {
        private Exp _ex1;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="op"></param>

        public CosExp(Exp a)
        {
            _ex1 = a;

        }

        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {

            double val = _ex1.Evaluate(cont);
            return Math.Cos(val);



        }

    }

    class Var : Exp
    {
        

        /// <summary>
        /// 
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="op"></param>

        public Var()
        {
            

        }

        /// <summary>
        ///     While evaluating a numeric constant , return the _value
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        public override double Evaluate(RUNTIME_CONTEXT cont)
        {

            double val = cont.T;
            return val;



        }

    }
}
