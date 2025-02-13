import { loadAboutUs } from "./about";

function createInfoCard(iconClass, title, content) {
    const card = document.createElement('div');
    card.classList.add('info-card');

    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    card.appendChild(icon);

    const heading = document.createElement('h2');
    heading.textContent = title;
    card.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    card.appendChild(paragraph);

    return card;
}

export function loadHome() {
    const container = document.createElement('div');
    container.classList.add('home', 'main-content');

    const subheading = document.createElement('h2');
    subheading.textContent = 'Experience the best Italian cuisine right here!';
    subheading.classList.add('subheading');
    container.appendChild(subheading);

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Cortile Italiano';
    heading.classList.add('interactive-heading'); // Add a class for styling

    setTimeout(() => heading.classList.remove('typing'), 2000);


    heading.addEventListener('click', () => {
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = '';
        mainContent.appendChild(loadAboutUs());
    });

    container.appendChild(subheading);
    container.appendChild(heading);
    

    
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const workingHoursCard = createInfoCard(
        'fa fa-clock',
        'Our Working Hours',
        'Monday to Sunday: 11:00 AM - 11:00 PM'
    );

    const locationCard = createInfoCard(
        'fa fa-map-marker',
        'Our Location',
        'P.za dei Santi Apostoli, 79-70, 00187 Roma RM, Italy'
    );

    const contactCard = createInfoCard(
        'fa fa-phone',
        'Contact Us',
        'Phone: +39 06 12345678\nEmail: info@cortileitaliano.com'
    );

    infoContainer.appendChild(workingHoursCard);
    infoContainer.appendChild(locationCard);
    infoContainer.appendChild(contactCard);

    container.appendChild(heading);
    container.appendChild(infoContainer);

    return container;
}

