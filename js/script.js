// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Display confirmation message
        confirmationMessage.style.display = 'block';
        // Reset the form fields
        form.reset();
    });
});







