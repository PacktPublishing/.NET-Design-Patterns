using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms.DataVisualization.Charting;
using System.Collections.ObjectModel;
using System.Reactive.Concurrency;
using System.Reactive.Linq;
using System.Runtime.CompilerServices;
using System.Reactive;
using System.Threading;

namespace Analytics
{
    public partial class Form1 : Form
    {
        public enum Party { Republican, Democratic };
        public enum States { AZ, CA, FL, IN, NY };
        string[] xState = { "AZ", "CA", "FL", "IN", "NY" };
        double[] yRVotes = { 0, 0, 0, 0, 0 };
        double[] yDVotes = { 0, 0, 0, 0, 0 };

        Random random = new Random();

        class Vote
        {
            public Party VoteId { get; set; }
            public string State { get; set; }
        }
        
        public Form1()
        {
            InitializeComponent();
            chart1.Series.Clear();
            DrawSimulation(chart1);
        }

    private void DrawSimulation(Chart chart1)
    {
        //Initialize Smulation Model (with certain votes per state)
        var azVotes = GenerateVotes<Vote>(() => 
            new Vote() {
                VoteId = CauchyDistribution(random.NextDouble()), 
                State = "Arizona" 
            }).Take(200000);
        var caVotes = GenerateVotes<Vote>(() => 
            new Vote() {
                VoteId = CauchyDistribution(random.NextDouble()), 
                State = "California" 
            }).Take(500000);
        var flVotes = GenerateVotes<Vote>(() => 
            new Vote() {
                VoteId = CauchyDistribution(random.NextDouble()), 
                State = "Florida" 
            }).Take(300000);
        var inVotes = GenerateVotes<Vote>(() => 
            new Vote() {
                VoteId = CauchyDistribution(random.NextDouble()), 
                State = "Indiana" 
            }).Take(100000);
        var nyVotes = GenerateVotes<Vote>(() => 
            new Vote() {
                VoteId = CauchyDistribution(random.NextDouble()), 
                State = "New York" 
            }).Take(700000);

            //Filter Democratic & Republican Votes from Simulation Model
            var azDVotes = from v in azVotes.ToObservable<Vote>()
                          where v.VoteId == Party.Democratic
                          select v;
            var azRVotes = from v in azVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Republican
                           select v;
            var caDVotes = from v in caVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Democratic
                           select v;
            var caRVotes = from v in caVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Republican
                           select v;
            var flDVotes = from v in flVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Democratic
                           select v;
            var flRVotes = from v in flVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Republican
                           select v;
            var inDVotes = from v in inVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Democratic
                           select v;
            var inRVotes = from v in inVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Republican
                           select v;
            var nyDVotes = from v in nyVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Democratic
                           select v;
            var nyRVotes = from v in nyVotes.ToObservable<Vote>()
                           where v.VoteId == Party.Republican
                           select v;

            // Create data series for X & Y Asis
            Series democratic = new Series("Democratic");
            Series republican = new Series("Republican");
            chart1.Series.Add(democratic);
            chart1.Series.Add(republican);
            
            // Start Simulation
            GetDemocraticVotes(States.AZ, azDVotes);
            GetRepublicanVotes(States.AZ, azRVotes);
            GetDemocraticVotes(States.CA, caDVotes);
            GetRepublicanVotes(States.CA, caRVotes);
            GetDemocraticVotes(States.FL, flDVotes);
            GetRepublicanVotes(States.FL, flRVotes);
            GetDemocraticVotes(States.IN, inDVotes);
            GetRepublicanVotes(States.IN, inRVotes);
            GetDemocraticVotes(States.NY, nyDVotes);
            GetRepublicanVotes(States.NY, nyRVotes);
        }

        private void GetDemocraticVotes(States state, IObservable<Vote> votes)
        {
            int stateIndex = (int)state;
            votes
                .SubscribeOn(Scheduler.Default)//Search on background thread
                .ObserveOn(NewThreadScheduler.Default)//Return result on dispatcher
                .Subscribe(v =>
                {
                    double voteCount = yDVotes[stateIndex];
                    yDVotes[stateIndex] = voteCount + 1;
                });
        }

        private void GetRepublicanVotes(States state, IObservable<Vote> votes)
        {
            int stateIndex = (int)state;
            votes
                .SubscribeOn(Scheduler.Default)//Search on background thread
                .ObserveOn(NewThreadScheduler.Default)//Return result on dispatcher
                .Subscribe(v =>
                {
                    double voteCount = yRVotes[stateIndex];
                    yRVotes[stateIndex] = voteCount + 1;
                });
        }

        public IEnumerable<T> GenerateVotes<T>(Func<T> generator)
        {
            while (true) yield return generator();
        }
        /// <summary>
        /// Returns Random Non-Uniform Data
        /// Courtesy: https://ericlippert.com/2012/02/21/generating-random-non-uniform-data/
        /// </summary>
        /// <returns></returns>
        private Party CauchyDistribution(double p)
        {
            return Math.Tan(Math.PI * (p - 0.5)) >= 0 ? Party.Democratic : Party.Republican;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            chart1.Series["Republican"].Points.DataBindXY(xState, yRVotes);
            chart1.Series["Democratic"].Points.DataBindXY(xState, yDVotes);
        }
    }
}
