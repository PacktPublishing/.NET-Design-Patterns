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
    /// <summary>
    ///   Enumeration for Tokens
    /// </summary>
    public enum TOKEN
    {
        ILLEGAL_TOKEN = -1, // Not a Token
        TOK_PLUS = 1, // '+'
        TOK_MUL, // '*'
        TOK_DIV, // '/'
        TOK_SUB, // '-'
        TOK_OPAREN, // '('
        TOK_CPAREN, // ')'
        TOK_DOUBLE, // '('
        TOK_TPARAM,
        TOK_SIN,
        TOK_COS,
        TOK_NULL // End of string
    }

    
    //////////////////////////////////////////////////////////
    //
    // A naive Lexical analyzer which looks for operators , Parenthesis
    // and number. All numbers are treated as IEEE doubles. Only numbers
    // without decimals can be entered. Feel free to modify the code
    // to accomodate LONG and Double values
    public class Lexer
    {
        String IExpr; // Expression string
        int index; // index into a character
        int length; // Length of the string
        double number; // Last grabbed number from the stream
        /////////////////////////////////////////////
        //
        // Ctor
        //
        //
        public Lexer(String Expr)
        {
            IExpr = Expr; length = IExpr.Length; index = 0;
        }

        
        /////////////////////////////////////////////////////
        // Grab the next token from the stream
        //
        //
        //
        //
        public TOKEN GetToken()
        {
            TOKEN tok = TOKEN.ILLEGAL_TOKEN;
            ////////////////////////////////////////////////////////////
            //
            // Skip the white space
            //
            while (index < length &&
            (IExpr[index] == ' ' || IExpr[index] == '\t'))
                index++;
            //////////////////////////////////////////////
            //
            // End of string ? return NULL;
            //
            if (index == length)
                return TOKEN.TOK_NULL;
            /////////////////////////////////////////////////
            //
            //
            //
            switch (IExpr[index])
            {
                case '+':
                    tok = TOKEN.TOK_PLUS;
                    index++;
                    break;
                case '-':
                    tok = TOKEN.TOK_SUB;
                    index++;
                    break;
                case '/':
                    tok = TOKEN.TOK_DIV;
                    index++;
                    break;
                case '*':
                    tok = TOKEN.TOK_MUL;
                    index++;
                    break;
                case '$':
                    if (IExpr[index + 1] == 't')
                    {
                        index += 2;
                        
                        tok = TOKEN.TOK_TPARAM;
                        
                    }
                    else
                    {
                        index++;
                        tok = TOKEN.ILLEGAL_TOKEN;
                    }
                    break;
                    
                case '(':
                    tok = TOKEN.TOK_OPAREN;
                    index++;
                    break;
                case ')':
                    tok = TOKEN.TOK_CPAREN;
                    index++;
                    break;
                default:
                    if (char.IsDigit(IExpr[index]))
                    {

                       tok = GrabDigitsFromStream();


                    }
                    else if (char.IsLetter(IExpr[index]))
                    {

                        tok = GetSineCosineFromStream();



                    }
                    else
                    {
                        
                    Console.WriteLine("Error While Analyzing Tokens");
                    throw new Exception();
                    }
                    break;
               
               
            }
            return tok;
        }
        public double GetNumber() { return number; }
        TOKEN GrabDigitsFromStream()
        {
            String str = "";
            while (index < length && (char.IsDigit(IExpr[index])))
                str += IExpr[index++];

            if ((index < length) && (IExpr[index] == '.'))
            {
                str = str + ".";
                index++;
                while (index < length && char.IsDigit(IExpr[index]))
                    str += IExpr[index++];
            }
            number = Convert.ToDouble(str);
            return TOKEN.TOK_DOUBLE;
        }

        TOKEN GetSineCosineFromStream()
        {
            String tem = Convert.ToString(IExpr[index]);
            index++;
            while (index < length && (char.IsLetterOrDigit(IExpr[index]) ||
                IExpr[index] == '_'))
            {
                tem += IExpr[index];
                index++;
            }

            tem = tem.ToUpper();

            if (tem == "SIN")
            {
                return TOKEN.TOK_SIN;
            }
            else if (tem == "COS")
            {
                return TOKEN.TOK_COS;
            }





            return TOKEN.ILLEGAL_TOKEN;

        }
    }
}
