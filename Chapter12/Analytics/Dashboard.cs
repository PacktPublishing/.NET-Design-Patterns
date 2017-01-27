using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Analytics
{
    class Where_DrillDown
    {
        /*class Customer
        {
            public Customer() { Orders = new ObservableCollection<Order>(); }
            public string CustomerName { get; set; }
            public string Region { get; set; }
            public ObservableCollection<Order> Orders { get; private set; }
        }

        class Order
        {
            public int OrderId { get; set; }
            public DateTimeOffset OrderDate { get; set; }
        }

        static void Main()
        {
            var customers = new ObservableCollection<Customer>();

            var customerChanges = Observable.FromEventPattern(
                (EventHandler<NotifyCollectionChangedEventArgs> ev)
                   => new NotifyCollectionChangedEventHandler(ev),
                ev => customers.CollectionChanged += ev,
                ev => customers.CollectionChanged -= ev);

            var watchForNewCustomersFromWashington =
                from c in customerChanges
                where c.EventArgs.Action == NotifyCollectionChangedAction.Add
                from cus in c.EventArgs.NewItems.Cast<Customer>().ToObservable()
                where cus.Region == "WA"
                select cus;

            Console.WriteLine("New customers from Washington and their orders:");

            watchForNewCustomersFromWashington.Subscribe(cus =>
            {
                Console.WriteLine("Customer {0}:", cus.CustomerName);

                foreach (var order in cus.Orders)
                {
                    Console.WriteLine("Order {0}: {1}", order.OrderId, order.OrderDate);
                }
            });

            customers.Add(new Customer
            {
                CustomerName = "Lazy K Kountry Store",
                Region = "WA",
                Orders = { new Order { OrderDate = DateTimeOffset.Now, OrderId = 1 } }
            });

            Thread.Sleep(1000);
            customers.Add(new Customer
            {
                CustomerName = "Joe's Food Shop",
                Region = "NY",
                Orders = { new Order { OrderDate = DateTimeOffset.Now, OrderId = 2 } }
            });

            Thread.Sleep(1000);
            customers.Add(new Customer
            {
                CustomerName = "Trail's Head Gourmet Provisioners",
                Region = "WA",
                Orders = { new Order { OrderDate = DateTimeOffset.Now, OrderId = 3 } }
            });

            Console.ReadKey();
        }
        private void DrawChart1(Chart chart1)
        {
            double[] yval = { 5, 6, 4, 6, 3 };

            // initialize an array of strings for X values

            // Create a data series
            Series ByArray = new Series("ByArray");
            Series ByPoint = new Series("ByPoint");
            chart1.Series.Add(ByArray);
            chart1.Series.Add(ByPoint);

            // bind the arrays to the X and Y values of data points in the "ByArray" series
            chart1.Series["ByArray"].Points.DataBindXY(xState, yval);
            // now iterate through the arrays to add points to the "ByPoint" series,
            //  setting X and Y values
            for (int i = 0; i < 5; i++)
            {
                chart1.Series["ByPoint"].Points.AddXY(xState[i], yval[i]);
            }

        }

        private static void DrawChart2(Chart chart1)
        {
            // Fill series data
                        chart1.Series.Add("1");
            double yValue = 50.0;
            double yValue2 = 70.0;
            Random random = new Random();
            for(int pointIndex = 0; pointIndex < 20000; pointIndex ++)
            {
                yValue = yValue + ( random.NextDouble( ) * 10.0 - 5.0 );
                yValue2 = yValue2 + (random.NextDouble() * 10.0 - 5.0);
                chart1.Series[0].Points.AddY(yValue);
                chart1.Series[1].Points.AddY(yValue2);
            }

            // Set fast line chart type
            chart1.Series[0].ChartType = SeriesChartType.FastLine;
            chart1.Series[1].ChartType = SeriesChartType.FastLine;
        }
         
         */
    }
}
