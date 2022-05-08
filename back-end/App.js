const express = require('express');
const cors = require('cors');

require('express-async-errors');
require('dotenv-flow').config();

const { PORT, NODE_ENV } = process.env;
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('storage'));

// Base de donnée
const db = require('./DB/models');
db.sequelize.authenticate()
    .then(() => console.log('Connection DB - OK'))
    .catch((error) => console.log('Connection DB - Error', error));
// Syncronisation
if (NODE_ENV !== 'production') {
    // db.sequelize.sync({ alter: true });
}

// Routes
const router = require('./routes');
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Web API up on port ${PORT} [${NODE_ENV}]`);
});