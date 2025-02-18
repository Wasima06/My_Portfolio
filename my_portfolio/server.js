const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true, useUnifiedTopology: true});

// const visitorSchema = new mongoose.Schema({
//     ip: String,
//     date: { type: Date, default: Date.now }
// });

// const Visitor = mongoose.model('Visitor', visitorSchema);
// app.use((req, res, next) => {
//     const visitor = new Visitor({ ip: req.ip });
//     visitor.save((err) => {
//         if (err) console.log(err);
//     });
//     next();
// });
// app.get('/visitors', async (req, res) => {
//     try {
//         const visitors = await Visitor.find();
//         res.json(visitors);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });
// useEffect(() => {
//     fetch('http://localhost:3000/visitors')
//         .then(response => response.json())
//         .then(data => console.log(data));
// }, []);
