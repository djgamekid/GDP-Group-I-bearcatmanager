
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-event-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form data
        const eventData = {
            title: document.getElementById('event-title').value,
            date: document.getElementById('event-date').value,
            time: document.getElementById('event-time').value,
            location: document.getElementById('event-location').value,
            description: document.getElementById('event-description').value,
            tickets: parseInt(document.getElementById('event-tickets').value, 10),
            price: parseFloat(document.getElementById('event-price').value),
        };

        try {
            // Save event data to Firestore
            const docRef = await window.db.collection('events').add(eventData);
            console.log('Event created with ID:', docRef.id);

            // Redirect or show a confirmation message
            alert('Event created successfully!');
            window.location.href = 'event-summary.html'; // Redirect to another page
        } catch (error) {
            console.error('Error adding event to Firestore:', error);
            alert('Failed to create event. Please try again.');
        }
    });
});