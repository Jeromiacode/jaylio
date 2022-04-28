const express = require('express');
const cors = require('cors');

require('express-async-errors');
require('dotenv-flow').config();

const { PORT, NODE_ENV } = process.env;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Base de donnée
const db = require('./models');
db.sequelize.authenticate()
    .then(() => console.log('Connection DB - OK'))
    .catch((error) => console.log('Connection DB - Error', error));
// Syncronisation
if (NODE_ENV !== 'production') {
    // db.sequelize.sync();
}

// Routes
const router = require('./routes/user-route');
app.use(router);

app.listen(PORT, () => {
    console.log(`Web API up on port ${PORT} [${NODE_ENV}]`);
});