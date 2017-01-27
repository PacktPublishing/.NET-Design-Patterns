using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;
using System.Collections.Specialized;

namespace Chapter7Ex
{
    class Employee
    {
        public String name {get;set;}
        public int age {get;set;}
        public double salary { get; set; }
    }

    class SortByAge : IComparer<Employee>
    {
        public int Compare(Employee a, Employee b)
        {
            return a.age > b.age ? 1 : -1;
        }
    }
    class SortByName : IComparer<Employee>
    {
        public int Compare(Employee a, Employee b)
        {
            return a.name.CompareTo(b.name);
        }
    }
    

    class ObservableDataSource 
    {
        public ObservableCollection<string> data { get; set; }
        public ObservableDataSource()
        {
            data = new  ObservableCollection<string>();
            data.CollectionChanged += OnCollectionChanged;
	    }
        void OnCollectionChanged(object sender, 
            NotifyCollectionChangedEventArgs args) 
        {
		   Console.WriteLine("The Data got changed ->" + 
                    args.NewItems[0]);
	    }

	    public void TearDown() {
            data.CollectionChanged -= OnCollectionChanged;
	    }
    }   
    class TestStrategy
    {
        public static void Temp01()
        {
            ObservableDataSource obs = new ObservableDataSource();
            obs.data.Add("Hello");
            obs.data.Add("World");
            obs.data.Add("Save");
        }
        public static void Temp()
        {
            List<Employee> ls = new List<Employee>();
            ls.Add(new Employee { name = "A", age = 40, salary = 10000 });
            ls.Add(new Employee { name = "C", age = 20, salary = 6000 });
            ls.Add(new Employee { name = "B", age = 30, salary = 4000 });
            ls.Sort(new SortByAge());
            foreach (Employee e in ls)
            {
                Console.WriteLine(e.name + " " + e.age + " " + e.salary);
            }
            ls.Sort(new SortByName());
            foreach (Employee e in ls)
            {
                StringBuilder strbuilder = new StringBuilder();
                strbuilder.Append(e.name);
                strbuilder.Append(" ");
                strbuilder.Append(e.age);
                strbuilder.Append(" ");
                strbuilder.Append(e.salary);
                Console.WriteLine(strbuilder.ToString());
            }
        }
        public static void Main(String[] args)
        {
            Temp01();
            Console.Read();

        }
        
    }
}
