const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

let reservations = []; // Temporarily save the reservation
let orders = [] // Temorarily save order


app.post('/api/reservations', (req, res) => {
    console.log("Received reservation", req.body);
    const { name, phone, date, time, message } = req.body;

    if(!name || !phone || !date || !time) {
        return res.status(400).json({ error: "All required fields must be filled."});
    }

    const newReservation = {
        id: reservations.length + 1,
        name,
        phone,
        date,
        time,
        message,
        createdAt: new Date(),
    };

    reservations.push(newReservation);
    console.log("New reservation: ", newReservation);

    res.status(201).json({ success: true, message: "Reservation created!", data: newReservation });
});

app.get('/api/reservations', (req, res) => {
    console.log("Sending reservations:", reservations);
    res.json(reservations);
});


// API for create orders

app.post('/api/orders', (req, res) => {
    console.log("Received order", req.body);
    const { itemName, quantity, customerName, customerPhone } = req.body;

    if (!itemName || !quantity || !customerName || !customerPhone) {
        return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newOrder = {
        id: orders.length + 1,
        itemName,
        quantity,
        customerName,
        customerPhone,
        createAt: new Date(),
    };

    orders.push(newOrder);
    console.log("New Order: ", newOrder);

    res.status(201).json({success: true, message: "Order placed successfully", data: newOrder});
});

app.get('/api/orders', (req, res) => {
    console.log("Sending orders:", orders);
    res.json(order);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`);
});