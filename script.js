// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  if (dataset === 'djiafigure') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  else if (dataset === 'nasdaqfigure') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Add else if conditions for each of your HTML files and PNG images
  else if (dataset === 'AAXJfigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/AAXJfigure.html"/>');
  }
  else if (dataset === 'AADRfigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/AADRfigure.html"/>');
  }
  else if (dataset === 'ZIVZfigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/ZIVZfigure.html"/>');
  }
  else if (dataset === 'ZROZfigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/ZROZfigure.html"/>');
  }
  else if (dataset === 'ZSLfigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/ZSLfigure.html"/>');
  }
  else if (dataset === 'nysefigure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/nysefigure.html"/>');
  }
  else if (dataset === 'sp500figure') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/sp500figure.html"/>');
  }
  else if (dataset === 'Indexprices') {
    // Load the HTML file
    d3.select("#plot").html('<object data="Notebooks/Indexprices.png');
  }
  else if (dataset === 'etfprices') {
    // Display the PNG image
    d3.select("#plot").html('<img src="Notebooks/etfprices.png" alt="ETF Prices">');
  }
  // Continue with else if conditions for the remaining HTML files and PNG images

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();