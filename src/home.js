export function loadHome() {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Cortile Italiano';
    heading.classList.add('typing');

    setTimeout(() => 
        heading.classList.remove('typing'), 2000);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best Italian cuisine right here!';

    container.appendChild(heading);
    container.appendChild(paragraph);

    return container;
}

