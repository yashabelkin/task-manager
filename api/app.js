const express = require('express');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tasks = require('./routes/taskRoutes');
const lists = require('./routes/listRoutes');
const users = require('./routes/userRoutes');

const app = express();

const cors = require('cors');

connectDB();

require('dotenv').config();



// middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    
}

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

app.use(express.json());

// added for the react connection
app.use(cors());


// Passport middleware
app.use(passport.initialize());

app.use(passport.session());

// Passport config
require('./config/passport')(passport);

// routes

app.use('/api/v1/lists', lists)

app.use('/api/v1/tasks', tasks)

app.use('/api/v1', users)




app.all('*', (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server...`, 404));
});

app.use(globalErrorHandler)


const port = process.env.PORT || 8000;
app.listen(port,() => {
    console.log(`App running on port ${port}...`)
} )



