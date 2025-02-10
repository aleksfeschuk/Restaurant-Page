import './style.css';




// function pages
function loadHome() {
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

function loadMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.classList.add('typing');

    setTimeout(() => heading.classList.remove('typing'), 2000);
    
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const items = [
        { name: 'Cappuccino', price: '$4.50', className: 'coffee' },
        { name: 'Margherita Pizza', price: '$13.99', className: 'pizza-margherita' },
        { name: 'Parma Pizza', price: '$16.99', className: 'pizza-parma' },
        { name: 'Spinacie Ricotta Pizza', price: '$20.99', className: 'pizza-spinaci' },
    ];


    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item', item.className);

        const img = document.createElement('div');
        img.classList.add('menu-img', item.className);

        const textContainer = document.createElement('div');
        textContainer.classList.add('menu-text');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        textContainer.appendChild(name);
        textContainer.appendChild(price);
        itemDiv.appendChild(img);
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

function updateContent(contentFunction) {
    const content = document.getElementById('content');
    const header = content.querySelector('h1');
    

    if(header) {
        header.classList.remove('typing');
    }

    content.classList.add('fade-out');

    setTimeout(() => {
        content.innerHTML = '';
        content.appendChild(contentFunction());

        const newHeader = content.querySelector('h1');
        if (newHeader) {
            newHeader.classList.add('typing');
        }

        setTimeout(() => 
            newHeader.classList.remove('typing'), 2000);

        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }, 300)
    

    function addTypingEffect(element) {
        element.classList.add('typing')
    }
}

document.querySelector('.home-btn').addEventListener('click', () => updateContent(loadHome));
document.querySelector('.menu-btn').addEventListener('click', () => updateContent(loadMenu));
document.querySelector('.about-btn').addEventListener('click', () => updateContent(loadAboutUs));

updateContent(loadHome);
