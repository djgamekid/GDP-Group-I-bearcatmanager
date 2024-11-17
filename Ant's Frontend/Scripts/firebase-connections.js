const apiKey = "AIzaSyCUkF0UxSM1vYwamXGJSEUYtMtRysAj4D4";
        const projectId = "bearcat-event-manager";
        const collectionName = "eventsCollection";

        const form = document.getElementById("eventForm");
        const cardsContainer = document.getElementById("cardsContainer");

        // Add a document to Firestore using the REST API
        async function addDocument(data) {
            const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}?key=${apiKey}`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fields: {
                        title: { stringValue: data.title },
                        date: { stringValue: data.date },
                        time: { stringValue: data.time },
                        location: { stringValue: data.location },
                        description: { stringValue: data.description },
                        tickets: { integerValue: data.tickets },
                        price: { doubleValue: data.price }
                    }
                }),
            });

            if (response.ok) {
                console.log("Event added successfully");
                fetchAndDisplayCards(); // Refresh the displayed cards
            } else {
                console.error("Error adding event:", await response.text());
            }
        }

        // Fetch all documents from Firestore using the REST API
        async function fetchAndDisplayCards() {
            const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}?key=${apiKey}`;
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                displayCards(data.documents || []);
            } else {
                console.error("Error fetching events:", await response.text());
            }
        }

        // Display events as cards
        function displayCards(documents) {
            cardsContainer.innerHTML = ""; // Clear existing cards
            documents.forEach((doc) => {
                const fields = doc.fields;
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <h3>${fields.title.stringValue}</h3>
                    <p><strong>Date:</strong> ${fields.date.stringValue}</p>
                    <p><strong>Time:</strong> ${fields.time.stringValue}</p>
                    <p><strong>Location:</strong> ${fields.location.stringValue}</p>
                    <p><strong>Description:</strong> ${fields.description.stringValue}</p>
                    <p><strong>Tickets:</strong> ${fields.tickets.integerValue}</p>
                    <p><strong>Price:</strong> $${fields.price.doubleValue.toFixed(2)}</p>
                `;
                cardsContainer.appendChild(card);
            });
        }

        // Handle form submission
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = {
                title: document.getElementById("title").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value,
                location: document.getElementById("location").value,
                description: document.getElementById("description").value,
                tickets: parseInt(document.getElementById("tickets").value, 10),
                price: parseFloat(document.getElementById("price").value),
            };

            addDocument(data); // Add the form data to Firestore
            form.reset(); // Reset the form
        });

        // Initial fetch to populate cards
        fetchAndDisplayCards();