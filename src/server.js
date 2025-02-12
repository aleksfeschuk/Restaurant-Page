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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`);
})