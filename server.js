const express = require('express');
const mongoose = require('mongoose');
const bodyParsers = require('body-parser');
const config = require('config');

const auth = require('./routes/auth');


const app  = express();

// BodyParser Middleware
app.use(express.json());

// MongoDB
const db = config.get('mongoURI')
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected (:db)'))
    .catch(err => console.log(err));

// Routes 
app.use('/auth', auth)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));