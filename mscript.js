document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the file input and result container elements
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const resultContainer = document.getElementById('result-container');
    const result = document.getElementById('result');
    const scheduleTimeInput = document.getElementById('schedule-time');

    // Show the uploaded image
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);

        // Simulate classification
        setTimeout(() => {
            const isBiodegradable = Math.random() > 0.5; // Randomly classify
            const scheduleTime = scheduleTimeInput.value || 'Not scheduled'; // Get the scheduled time
            result.innerHTML = `Your waste is classified as ${isBiodegradable ? 'biodegradable' : 'non-biodegradable'}.<br>Your information is updated and the trader will contact you soon!<br>Scheduled Time: ${scheduleTime}`;
            resultContainer.style.display = 'block';
        }, 1000); // Simulate delay
    }
});

document.getElementById('complain-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const address = document.getElementById('complain-address').value;
    const text = document.getElementById('complain-text').value;

    // Show confirmation message
    const complainResponse = document.getElementById('complain-response');
    complainResponse.innerHTML = 'Thanks for your feedback. We will sanitize it as soon as possible!';
    complainResponse.style.display = 'block';
});
