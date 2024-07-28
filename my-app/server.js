const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// Define Contact model
const Contact = sequelize.define('Contact', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Sync database
sequelize.sync();

// API endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        const contact = await Contact.create({ firstName, lastName, email, phone, message });
        res.status(201).json({ message: 'Message sent successfully', contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending message', error: error.message });
    }
});

// Optional: Add root route for testing
app.get('/', (req, res) => {
    res.send('Backend Server is running.');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
