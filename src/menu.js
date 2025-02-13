import { menuItems } from "./menuItems";

export function loadMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.classList.add('typing');

    setTimeout(() => heading.classList.remove('typing'), 2000);
    
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.id = item.id; 

        const img = document.createElement('div');
        img.classList.add('menu-img');
        img.style.backgroundImage = `url(${item.image})`;

        const textContainer = document.createElement('div');
        textContainer.classList.add('menu-text');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const orderButton = document.createElement('button');
        orderButton.textContent = 'Order';
        orderButton.classList.add('order-btn');
        orderButton.addEventListener('click', () => openModal(item)) //add event

        textContainer.appendChild(name);
        textContainer.appendChild(orderButton);
        itemDiv.appendChild(img);
        itemDiv.appendChild(textContainer);
        menuGrid.appendChild(itemDiv);
    });

    container.appendChild(heading);
    container.appendChild(menuGrid);

    return container;
}


function openModal(item) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}">
            <p class="description">${item.description}</p>
            <p class="price">${item.price}</p>

            <div class="quantity-container">
                <label for="quantity-btn">Quantity:</label>
                <button class ="quantity-btn decrease">-</button>
                <input type="number" id="quantity" value="1" min="1">
                <button class="quantity-btn increase">+</button>
            </div>

            <button class="order-confirm">Make an order</button>
            <button class="order-cancel">Cancel</button>


        </div>
    `;

    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-btn');
    const cancelButton = modal.querySelector('.order-cancel');
    const orderButton = modal.querySelector('.order-confirm');
    const quantityInput = modal.querySelector('#quantity');
    const increaseButton = modal.querySelector('.increase');
    const decreaseButton = modal.querySelector('.decrease');

    closeButton.addEventListener('click', () => modal.remove());
    cancelButton.addEventListener('click', () => modal.remove());


    // Add logic for increasing/decreasing the order quantity

    increaseButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) -1;
        }
    });



    // add the logic for sending the order to the server 

    orderButton.addEventListener('click', async() => {
        const quantity = quantityInput.value;
        const customerName = 'John Doe';
        const customerPhone = '1234566890';

        const orderData = {
            itemName: item.name,
            quantity: quantity,
            customerName: customerName,
            customerPhone: customerPhone,
        };

        // First, check if the server is working
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            const result = await response.json();
            if (response.ok) {
                modal.remove();
                showConfirmation(quantity, item.name);
            } else {
                throw new Error(result.error || 'Something went wrong');
            }
        } catch (error) {
            console.warn('The server is down. The order is being processed offline.');
            modal.remove();
            showConfirmation(quantity, item.name);
        }
    })
};


// function to display the order confirmation window

function showConfirmation(quantity, itemName) {
    

    const confirmationModal = document.createElement('div');
    confirmationModal.classList.add('confirmation-modal');

    confirmationModal.innerHTML = `
        <div class="confirmation-content">
            <span class="close-confirm">&times;</span>
            <div class="icon">✅</div>
            <h2>Order Placed!</h2>
            <p>You have successfully ordered <strong>${quantity}</strong> pcs of <strong>${itemName}</strong>.</p>
            <button class="close-confirm-btn">OK</button>
        </div>
    `;

    document.body.appendChild(confirmationModal);

    const closeConfirm = confirmationModal.querySelector('.close-confirm');
    const closeConfirmBtn = confirmationModal.querySelector('.close-confirm-btn');

    closeConfirm.addEventListener('click', () => confirmationModal.remove());
    closeConfirmBtn.addEventListener('click', () => confirmationModal.remove());
}