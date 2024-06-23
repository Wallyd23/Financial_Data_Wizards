document.addEventListener('DOMContentLoaded', function() {
    const selectMenu = document.getElementById('selDataset');
    const visualContainer = document.getElementById('visualContainer');

    // Function to load the selected visual
    function loadVisual(file) {
        fetch(file)
            .then(response => response.text())
            .then(html => {
                visualContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading visual:', error);
                visualContainer.innerHTML = '<p>Error loading visual.</p>';
            });
    }

    // Event listener for dropdown change
    selectMenu.addEventListener('change', function() {
        const selectedFile = selectMenu.value;
        loadVisual(selectedFile);
    });

    // Load the initial visual (optional)
    if (selectMenu.value) {
        loadVisual(selectMenu.value);
    }
});