using System;
using System.Collections;
using System.Collections.Generic;




public delegate double Del(List<double> pa); 

class Temp
{

	public static void Main(String [] args) {

		List<double> a = new List<double>();

		for(int i=0; i< args.Length ; ++ i )
			a.Add(Convert.ToDouble(args[i]));


		Del temp =  delegate(List<double> pa ) {
				double sum = 0.0;
				foreach( double at in pa )
					sum = sum + at;
				return sum/pa.Count;
			} ;
		Console.WriteLine(temp(a));

	}


}