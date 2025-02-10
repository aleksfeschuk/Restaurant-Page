export function loadAboutUs() {
    const container = document.createElement('div');
    container.classList.add('about-container');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    heading.classList.add('typing');

    setTimeout(() => heading.classList.remove('typing'), 2000);
    
    container.innerHTML = `
        <p>We are a family-run Italian restaurant, bringing traditional Italian recipes to the heart of the city.</p>
    `;
    
    container.prepend(heading);

    return container;
}