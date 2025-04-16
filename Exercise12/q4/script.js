document.addEventListener("DOMContentLoaded", function() {
    drawBarChart();
    drawLineChart();
    drawPieChart();
    drawDonutChart();
  });
  
  function drawBarChart() {
    let trace = {
      x: ["Category A", "Category B", "Category C", "Category D"],
      y: [10, 15, 7, 12],
      type: "bar",
      marker: { color: ["pink", "red", "teal", "orange"] }
    };
  
    let layout = {
      title: "Bar Chart",
      xaxis: { title: "Categories" },
      yaxis: { title: "Values" }
    };
  
    Plotly.newPlot("barChart", [trace], layout);
  }
  
  function drawLineChart() {
    let trace = {
      x: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
      y: [5, 10, 8, 12, 7, 15, 8],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "orange" }
    };
  
    let layout = {
      title: "Line Chart",
      xaxis: { title: "Days" },
      yaxis: { title: "Sales" }
    };
  
    Plotly.newPlot("lineChart", [trace], layout);
  }
  
  function drawPieChart() {
    let trace = {
      labels: ["Gemstone", "Diamond", "Ruby", "Sapphire"],
      values: [30, 20, 40, 10],
      type: "pie",
      marker: { colors: ["pink", "blue", "red", "green"] }
    };
  
    let layout = {
      title: "Pie Chart",
      showlegend: true
    };
  
    Plotly.newPlot("pieChart", [trace], layout);
  }
  
  function drawDonutChart() {
    let trace = {
      labels: ["Android", "iOS", "Windows", "Linux"],
      values: [50, 30, 10, 10],
      type: "pie",
      hole: 0.4,
      marker: { colors: ["pink", "black", "blue", "brown"] }
    };
  
    let layout = {
      title: "Donut Chart",
      showlegend: true
    };
  
    Plotly.newPlot("donutChart", [trace], layout);
  }
  