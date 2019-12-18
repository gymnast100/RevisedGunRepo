

d3.json("/monthlydata").then(function(data){
// Create the Traces
var trace1 = {
    x: data.map(row => row.date),
    y: data.map(row => row.n_killed),
    mode: "lines+markers",
    type: "scatter",
    name: "Count of Killed ",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  
  var trace2 = {
    x: data.map(row => row.date),
    y: data.map(row => row.n_injured),
    mode: "lines+markers",
    type: "scatter",
    name: "Count of Injured",
    marker: {
      color: "orange",
      symbol: "diamond-x"
    }
  };
  
  var trace3 = {
    x: data.map(row => row.date),
    y: data.map(row => row.n_guns_involved),
    mode: "lines+markers",
    type: "scatter",
    name: "Count of Guns",
    marker: {
      color: "rgba(156, 165, 196, 1.0)",
      symbol: "cross"
    }
  };
  
  // Create the data array for the plot
  var data = [trace1, trace2, trace3];
  
  // Define the plot layout
  var layout = {
    title: "Gun Violence trends over the years",
    xaxis: { title: "Year" },
    yaxis: { title: "Gun Violence Data" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  


})

// FOR BAR CHART

[
  {
    "guns_count": 76189.0, 
    "injured": 30703, 
    "killed": 15511, 
    "year": "2017"
  }, 
  {
    "guns_count": 53821.0, 
    "injured": 30580, 
    "killed": 15066, 
    "year": "2016"
  }, 
  {
    "guns_count": 36849.0, 
    "injured": 26967, 
    "killed": 13484, 
    "year": "2015"
  }, 
  {
    "guns_count": 7927.0, 
    "injured": 23002, 
    "killed": 12557, 
    "year": "2014"
  }
]


d3.json("/yeardata").then( function (data){
  
    var trace1 = {
        x: data.map(row => row.year),
        y: data.map(row => row.injured),
        text: "Injured",
        type: "bar"
      };
    
      var trace2 = {
        x: data.map(row => row.year),
        y: data.map(row => row.killed),
        text: "",
        type: "bar"
      }
    var data =[trace1, trace2];

    var layout = {
        title: "Gun Violence 2013 - 2018 ",
        xaxis: { title: "Years" },
        yaxis: { title: "Number of killings" }
    };
    
    
    Plotly.newPlot("barchart", data, layout);
    
})

