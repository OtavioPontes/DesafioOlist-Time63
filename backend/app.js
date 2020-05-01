const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();

const product = require('./routes/product');

app.use('*', cors({
  origin: '*',
  allowedHeaders: '*',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product', product);


module.exports = app;
