const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    ip: String,
    name: String, // Add this field
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../my_portfolio')));

// Track visitors (example)
app.use(async (req, res, next) => {
    try {
        const visitor = new Visitor({ ip: req.ip, name: req.query.name }); // Get name from query parameters
        await visitor.save();
        console.log('Visitor saved');
    } catch (err) {
        console.log(err);
    }
    next();
});

// Route to find visitor by name
app.get('/find-visitor', async (req, res) => {
    try {
        const name = req.query.name;
        const visitor = await Visitor.findOne({ name });
        if (visitor) {
            res.send(`Visitor found: ${visitor.ip}`);
        } else {
            res.send('Visitor not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../my_portfolio/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
