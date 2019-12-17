d3.csv("../../gun2014onwrd.csv").then( function (data){

    var xvalues=[];
    var y1values=[];
    var y2values=[];
    var y3values=[];

    data.forEach(element => {
        xvalues.push(element.date)
        y1values.push(element.n_killed)
        y2values.push(element.n_injured)
        y3values.push(element.n_guns_involved)
    });

// Create the Traces
var trace1 = {
    x: xvalues,
    y: y1values,
    mode: "lines+markers",
    type: "scatter",
    name: "Count of Killed ",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
  
  var trace2 = {
    x: xvalues,
    y: y2values,
    mode: "lines+markers",
    type: "scatter",
    name: "Count of Injured",
    marker: {
      color: "orange",
      symbol: "diamond-x"
    }
  };
  
  var trace3 = {
    x: xvalues,
    y: y3values,
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

d3.csv("../../gunyearly.csv").then( function (data){

    var xvalues=[];
    var yvalues=[];

    data.forEach(element => {
        xvalues.push(element.date)
        yvalues.push(element.n_killed)
    });
    console.log(xvalues,yvalues);
   
    var trace1 = {
        x: xvalues,
        y: yvalues,
        text: "gunviolence",
        name: "Greek",
        type: "bar"
      };
    var data =[trace1];

    var layout = {
        title: "Gun Violence 2013 - 2018 ",
        xaxis: { title: "Years" },
        yaxis: { title: "Number of killings" }
    };
    
    
    Plotly.newPlot("barchart", data, layout);
    
})
