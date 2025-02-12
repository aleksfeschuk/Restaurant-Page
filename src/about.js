export function loadAboutUs() {
    const container = document.createElement('div');
    container.classList.add('about-container');
    

    const heading = document.createElement('h1');
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


    container.appendChild(formSection);
    container.appendChild(textSection);
    // container.appendChild(heading);



    return container;
}