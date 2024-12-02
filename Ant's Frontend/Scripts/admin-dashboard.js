const apiKey = "AIzaSyCUkF0UxSM1vYwamXGJSEUYtMtRysAj4D4";
const projectId = "bearcat-event-manager";
const collectionName = "eventsCollection";

const eventContainer = document.getElementById("eventContainer");

// Fetch all documents from Firestore
async function fetchEvents() {
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}?key=${apiKey}`;
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayEvents(data.documents || []);
    } else {
        console.error("Error fetching events:", await response.text());
    }
}

// Display fetched events
function displayEvents(documents) {
    eventContainer.innerHTML = ""; // Clear current content
    documents.forEach((doc) => {
        const fields = doc.fields;
        const id = doc.name.split("/").pop(); // Extract document ID

        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <h3>${fields.title?.stringValue}</h3>
            <p><strong>Date:</strong> ${fields.date?.stringValue}</p>
            <p><strong>Time:</strong> ${fields.time?.stringValue}</p>
            <p><strong>Location:</strong> ${fields.location?.stringValue}</p>
            <p><strong>Description:</strong> ${fields.description?.stringValue}</p>
            <p><strong>Tickets:</strong> ${fields.tickets?.integerValue}</p>
            <p><strong>Price:</strong> $${fields.price?.doubleValue.toFixed(2)}</p>
            <button onclick="editEvent('${id}')">Edit</button>
            <button onclick="deleteEvent('${id}')">Delete</button>
        `;
        eventContainer.appendChild(card);
    });
}

// Redirect to admin-creation.html with the event ID
function editEvent(id) {
    window.location.href = `admin-creation.html?id=${id}`;
}

// Delete an event
async function deleteEvent(id) {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
        const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}/${id}?key=${apiKey}`;
        const response = await fetch(url, { method: "DELETE" });

        if (response.ok) {
            alert("Event deleted successfully!");
            fetchEvents();
        } else {
            console.error("Error deleting event:", await response.text());
        }
    }
}

// Fetch and display events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);