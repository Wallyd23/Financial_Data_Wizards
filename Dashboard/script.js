function changeDocument() {
  var selector = document.getElementById('documentSelector');
  var container = document.getElementById('displayedDocument');
  var selectedValue = selector.value;
  var selectedType = selectedValue.split('.').pop(); // Get the file extension
  if (selectedType === 'html') {
      // Use iframe for HTML files
      container.outerHTML = `<iframe id=displayedDocument src=${selectedValue} style="width:600px; height:400px;"></iframe>`;
  } else if (selectedType === 'png') {
      // Use img tag for PNG images
      container.outerHTML = `<img id=displayedDocument src=${selectedValue} alt="Displayed Image" style="width: 600px; height: auto;">`;
  }
}

function changeIndex() {
  var selector = document.getElementById('indexSelector');
  var container = document.getElementById('displayedIndex');
  var selectedValue = selector.value;
  var selectedType = selectedValue.split('.').pop(); // Get the file extension
  if (selectedType === 'html') {
      // Use iframe for HTML files
      container.outerHTML = `<iframe id=displayedIndex src=${selectedValue} style="width:600px; height:400px;"></iframe>`;
  } else if (selectedType === 'png') {
      // Use img tag for PNG images
      container.outerHTML = `<img id=displayedIndex src=${selectedValue} alt="Displayed Image" style="width: 600px; height: auto;">`;
  }
}

function changePrice() {
  var selector = document.getElementById('priceSelector');
  var container = document.getElementById('displayedPrice');
  var selectedValue = selector.value;
  var selectedType = selectedValue.split('.').pop(); // Get the file extension
  if (selectedType === 'html') {
      // Use iframe for HTML files
      container.outerHTML = `<iframe id=displayedPrice src=${selectedValue} style="width:600px; height:400px;"></iframe>`;
  } else if (selectedType === 'png') {
      // Use img tag for PNG images
      container.outerHTML = `<img id=displayedPrice src=${selectedValue} alt="Displayed Image" style="width: 600px; height: auto;">`;
  }
}