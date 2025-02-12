document.addEventListener("DOMContentLoaded", async function() {
    const reservationsContainer = document.querySelector("#reservations");

    async function fetchReservations() {
        try {
            response = await fetch("http://localhost:3000/api/reservations");
            const reservations = await response.json();

            reservationsContainer.innerHTML = "";
            reservations.forEach((res) => {
                const resElement = document.createElement("div");
                resElement.classList.add("reservation");
                resElement.innerHTML = `
                    <p><strong>${res.name}</strong> (${res.phone})</p>
                    <p>Date: ${res.date}, Time: ${res.time}</p>
                    <p>Request: ${res.message || "None"}</p>
                    <hr>
                `;
                reservationsContainer.appendChild(resElement);
            });
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
    }

    fetchReservations();
})