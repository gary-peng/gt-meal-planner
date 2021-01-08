const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
cosnt path = require('path');

dotenv.config({ path: './config/config.env'});

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use('/api/menu', require('./routes/menu'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));