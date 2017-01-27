using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

class Temp
{

	public static void Main(String [] args) {
		var a = new List<double>();

		for(int i=0; i< args.Length ; ++ i )
			a.Add(Convert.ToDouble(args[i]));
		
		Func<double,double> ar2 = (x => x );

		var ar = a.Sum(ar2 )/a.Count;

		Console.WriteLine(ar);

	}


}