export function loadMenu() {
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
