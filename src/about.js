export function loadAboutUs() {
    const container = document.createElement('div');
    container.classList.add('about-container');
    

    // const heading = document.createElement('h1');
    const textSection = document.createElement('div');
    textSection.classList.add('about-text');
    textSection.innerHTML= `
        <h1 class="textSection">Our Story</h1>
        <p>
            Welcome to our family-owned Italian restaurant! 
            For over 30 years, we've been serving traditional Italian cuisine, made with love and passion.
        </p>
        <p>
            Our chef brings the authentic taste of Italy, using only the finest ingredients and secret recipes passed down through generations.
        </p>
        <p>
            Every dish tells a story of tradition and quality, ensuring a memorable dining experience.
        </p>
    `;


    const formSection = document.createElement('div');
    formSection.classList.add('reservation-form');
    formSection.innerHTML = `
        <h2>Reserve a Table</h2>
        <form id="reservation-form">
            <label for="name">Your Name:</label>
            <input type="text" id="name" required>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" required>

            <label for="date">Date:</label>
            <input type="date" id="date" required>

            <label for="time">Time:</label>
            <input type="time" id="time" required>

            <label for="message">Special Request:</label>
            <textarea id="message" rows="3"></textarea>

            <button type="submit">Reserve Now</button>
        </form>
    `;


    const responseMessage = document.createElement('div');
    responseMessage.classList.add('response-message');
    formSection.appendChild(responseMessage);

    container.appendChild(formSection);
    container.appendChild(textSection);
    

    const form = formSection.querySelector("#reservation-form");

    // Add an event handler for the form submission

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the page from reloading

        const name = form.querySelector("#name").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const date = form.querySelector("#date").value;
        const time = form.querySelector("#time").value;
        const message = form.querySelector("#message").value.trim();
        const responseMessage = document.querySelector(".response-message");

        if (!name || !phone || !date || !time) {
            responseMessage.textContent = "Please fill out all required fields!";
            responseMessage.style.color = "red";
            return;
        }

        const reservationData = { name, phone, date, time, message};

        try {
            const response = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reservationData),
            });

            const result = await response.json();
            if (response.ok) {
                responseMessage.textContent = "";
                responseMessage.style.color = "green";
                form.reset();

                showModal("Reservation successful!", "green");
            } else {
                responseMessage.textContent = result.error || "Something went wrong";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.textContent = "Server error. Try again later";
            responseMessage.style.color = "red";
        }
    });

    function showModal(message, color) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modalAbout-content');

        const modalMessage = document.createElement('p');
        modalMessage.textContent = message;
        modalMessage.style.color = color;

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modalContainer);
        });

        modalContent.appendChild(modalMessage);
        modalContent.appendChild(closeBtn);
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
    }


    return container;
}