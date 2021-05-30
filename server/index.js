const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./api');
require('../db');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());
// encode url
app.use(express.urlencoded({ extended: true })); 

app.use('/api/v1', routes);

app.use(express.static('dist'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
