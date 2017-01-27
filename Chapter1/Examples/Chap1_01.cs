using System;
using System.Collections;

class Temp
{
	public static void Main(String [] args) {
		
		ArrayList a = new ArrayList();

		for(int i=0; i< args.Length ; ++ i )
			a.Add(Convert.ToDouble(args[i]));

		double sum = 0.0;
		foreach( double at in a )
			sum = sum + at;

		double ar = sum/a.Count;
		Console.WriteLine(ar);

	}


}