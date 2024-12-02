
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-event-form');
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");

    if (eventId) {
        prefillForm(eventId);
    }

    // Pre-fill the form with existing event data
    async function prefillForm(id) {
        const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}/${id}?key=${apiKey}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const fields = data.fields;

            document.getElementById("title").value = fields.title?.stringValue || "";
            document.getElementById("date").value = fields.date?.stringValue || "";
            document.getElementById("time").value = fields.time?.stringValue || "";
            document.getElementById("location").value = fields.location?.stringValue || "";
            document.getElementById("description").value = fields.description?.stringValue || "";
            document.getElementById("tickets").value = fields.tickets?.integerValue || "";
            document.getElementById("price").value = fields.price?.doubleValue || "";
        } else {
            console.error("Error fetching event data:", await response.text());
            alert("Failed to load event data.");
        }
    }
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