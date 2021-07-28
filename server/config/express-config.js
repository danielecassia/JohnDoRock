require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.urlencoded({
  extended: true,
}));

const cors = require('cors');

const REACT_APP_API_URL = "http://localhost:3001";

app.use(cors({
  origin: REACT_APP_API_URL,
  credentials: true,
}));

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.json());

require('./auth');

const usersRouter = require('../users/controller/user-controller');

app.use('/users', usersRouter);

const errorHandler = require('../middlewares/error-handler');

app.use(errorHandler);

module.exports = app;
