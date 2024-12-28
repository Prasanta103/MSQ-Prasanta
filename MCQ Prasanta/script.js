document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function(button) {
        button.addEventListener('change', function() {
            // Find the parent label element
            const label = this.nextElementSibling;
            const description = label.nextElementSibling;

            // Reset all previous selected options (if any)
            const allLabels = document.querySelectorAll('label');
            allLabels.forEach(function(label) {
                label.style.backgroundColor = '';  // Reset background color
                label.nextElementSibling.style.display = 'none';  // Hide all descriptions
            });
            
            // Check if the selected option is correct
            if (label.getAttribute('data-correct') === 'true') {
                label.style.backgroundColor = 'green';  // Highlight correct answer
                description.style.display = 'block';  // Show the description for correct answer
            } else {
                label.style.backgroundColor = 'red';  // Highlight wrong answer
                description.style.display = 'none';  // Hide the description for incorrect answer
            }
        });
    });
});
