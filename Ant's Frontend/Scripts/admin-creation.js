document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-event-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const eventData = {
            title: document.getElementById('event-title').value,
            date: document.getElementById('event-date').value,
            time: document.getElementById('event-time').value,
            location: document.getElementById('event-location').value,
            description: document.getElementById('event-description').value,
            tickets: document.getElementById('event-tickets').value,
            price: document.getElementById('event-price').value,
        };

        // Save data to localStorage
        localStorage.setItem('eventData', JSON.stringify(eventData));

        // Redirect or show a confirmation message
        alert('Event created successfully!');
        window.location.href = 'event-summary.html'; // Redirect to another page
    });
});