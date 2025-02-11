export function loadAboutUs() {
    const container = document.createElement('div');
    container.classList.add('about-container', 'main-content');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Cortile Italiano is a family-owned restaurant offering authentic Italian cuisine.';

    container.appendChild(heading);
    container.appendChild(paragraph);
    
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(container);

    return container;
}