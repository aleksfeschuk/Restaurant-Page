function createSchedule() {
    const schedule = document.createElement('div');
    schedule.classList.add('schedule');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Working Hours';
    schedule.appendChild(heading);

    const workingHours = document.createElement('p');
    workingHours.textContent = 'Monday to Sunday: 11:00 AM - 11:00 PM';
    schedule.appendChild(workingHours);

    return schedule;
}

function createLocation() {
    const location = document.createElement('div');
    location.classList.add('location');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Location';
    location.appendChild(heading);

    const address = document.createElement('p');
    address.textContent = 'P.za dei Santi Apostoli, 79-70, 00187 Roma RM, Italy';
    location.appendChild(address);

    // Додаємо карту (Google Maps)
    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=P.za+dei+Santi+Apostoli,+79-70,+00187+Roma+RM,+Italy";
    map.width = "600";
    map.height = "450";
    map.style.border = "0";
    map.allowFullscreen = true;
    map.loading = "lazy";
    location.appendChild(map);

    return location;
}

function createContacts() {
    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    contacts.appendChild(heading);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +39 06 12345678';
    contacts.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: info@cortileitaliano.com';
    contacts.appendChild(email);

    return contacts;
}

export function loadHome() {
    const container = document.createElement('div');
    container.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Cortile Italiano';
    heading.classList.add('typing');

    setTimeout(() => heading.classList.remove('typing'), 2000);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best Italian cuisine right here!';

    const schedule = createSchedule();
    const location = createLocation();
    const contacts = createContacts();

    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(schedule);
    container.appendChild(location);
    container.appendChild(contacts);

    return container;
}



