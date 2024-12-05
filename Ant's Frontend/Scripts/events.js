

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Fetch all events from Firestore
async function fetchEvents() {
    const eventList = document.getElementById("event-list");  // Get the event-list container
    eventList.innerHTML = '';  // Clear existing content in the event list

    try {
        // Fetch events from Firestore
        const querySnapshot = await db.collection("eventsCollection").get();
        querySnapshot.forEach((doc) => {
            const event = doc.data();
            const eventId = doc.id;

            // Create event card
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.innerHTML = `
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Price:</strong> $${event.price}</p>
                <p><strong>Tickets Remaining:</strong> ${event.tickets}</p>
                <button onclick="location.href='view-details.html?event=${eventId}'">View Details</button>
                <button onclick="location.href='cart.html?event=${eventId}'">Add To Cart</button>
            `;
            eventList.appendChild(eventDiv);  // Append the event card to the event list container
        });
    } catch (error) {
        console.error("Error fetching events: ", error);  // Handle any errors that occur during fetching
    }
}

// Fetch events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);

