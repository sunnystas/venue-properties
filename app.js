'use strict';

require('dotenv-safe').config({ allowEmptyValues: true });
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const apiRouter = require('./routes/api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

module.exports = app;
