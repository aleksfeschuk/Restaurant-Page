import './style.css';



// fnction pages
function loadHome() {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Cortile Italiano';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best Italian cuisine right here!';

    container.appendChild(heading);
    container.appendChild(paragraph);

    return container;
}

function loadMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    
    const menuGrid = document.createElement('ul');
    menuGrid.classList.add('menu-grid');

    const items = [
        { name: 'Cappuccino', price: '$4.50', className: 'coffee' },
        { name: 'Margherita Pizza', price: '$13.99', className: 'pizza-margherita' },
        { name: 'Parma Pizza', price: '$16.99', className: 'pizza-parma' },
        { name: 'Spinaci e Ricotta Pizza', price: '$20.99', className: 'pizza-spinaci' },
    ];


    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item', item.className);

        const textContainer = document.createElement('div');
        textContainer.classList.add('menu-text');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        textContainer.appendChild(name);
        textContainer.appendChild(price);
        itemDiv.appendChild(textContainer);
        menuGrid.appendChild(itemDiv);
    });

    container.appendChild(heading);
    container.appendChild(menuGrid);

    return container;
}

function loadAboutUs() {
    const container = document.createElement('div');
    container.classList.add('about-container');

    container.innerHTML = `
        <h1>About Us</h1>
        <p>We are a family-run Italian restaurant, bringing traditional Italian recipes to the heart of the city.</p>
    `;


    return container;
}

function updateContent(contentFunction) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(contentFunction());
}

document.querySelector('.home-btn').addEventListener('click', () => updateContent(loadHome));
document.querySelector('.menu-btn').addEventListener('click', () => updateContent(loadMenu));
document.querySelector('.about-btn').addEventListener('click', () => updateContent(loadAboutUs));

updateContent(loadHome);
