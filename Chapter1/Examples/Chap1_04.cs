using System;
using System.IO;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
	// Create task and start it.
	// ... Wait for it to complete.
	Task task = new Task(ProcessCountAsync);
	task.Start();
	task.Wait();
	Console.ReadLine();
    }

    static async void ProcessCountAsync()
    {
	// Start the HandleFile method.
	Task<int> task = HandleFileAsync(@".\WordCount.txt");
	//
        // -------- One can do some lengthy processing here
        // 
	int x = await task;
	Console.WriteLine("Count: " + x);
    }

    static async Task<int> HandleFileAsync(string file)
    {
	int count = 0;
	using (StreamReader reader = new StreamReader(file))
	{
	    string v = await reader.ReadToEndAsync();
	    count += v.Length;
    
	}
	return count;
    }
}
