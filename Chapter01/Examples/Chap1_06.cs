using System;

/*


public sealed class Singleton
{
    private static readonly Singleton instance = new Singleton();

    // Explicit static constructor to tell C# compiler
    // not to mark type as beforefieldinit
    static Singleton()
    {
    }

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            return instance;
        }
    }
}



*/

class SingleInstance
{
  private int value = 10;

  private SingleInstance(){}


  public static SingleInstance Instance { get { return Nested.instance; } }
        
  private class Nested
  {
        
        static Nested()
        {
        }

        internal static readonly SingleInstance instance = new SingleInstance ();
   }

  public void Increment() {
	value++;
  }

  public int Value { get { return value; } }

 

}

public class SingletonExample
{

  public static void Main(String [] args) {
	SingleInstance t1 = SingleInstance.Instance;
        SingleInstance t2 = SingleInstance.Instance;

	t1.Increment();

	if ( t1.Value == t2.Value)
		Console.WriteLine("SingleTon Object");


  }

}