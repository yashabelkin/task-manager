const express = require('express');
const morgan = require('morgan');
const app = express();
const AppError = require('./utilis/appError')
const globalErrorHandler = require('./controllers/errorController')
const tasks = require('./routes/taskRoutes')
const lists = require('./routes/listRoutes')
require('dotenv').config()
const cors = require('cors')


// middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


app.use(express.json());

// added for the react connection
app.use(cors());


// routes

app.use('/api/v1/lists', lists)

app.use('/api/v1/tasks', tasks)

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `can't find ${req.originalUrl} on this server... `
    });

    const err = new Error (`can't find ${req.originalUrl} on this server...`);
    err.status = 'fail';
    err.statusCode = 404;

    next(new AppError(`can't find ${req.originalUrl} on this server...`, 404));
});

app.use(globalErrorHandler)

module.exports = app;

