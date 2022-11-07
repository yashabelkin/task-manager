const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const lists = require('./routes/lists')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handle')
const cors = require('cors')
// middleware

app.use(express.json())
app.use(cors());


// routes

app.use('/api/v1/lists', lists)

app.use('/api/v1/lists/:id/tasks', tasks)

app.use(notFound)

app.use(errorHandler)


const port = process.env.PORT || 8000

const start = async () => {
    try {
     await connectDB(process.env.MONGO_STR)
     app.listen(port, console.log(`listening on port ${port}...`))
    } catch (error) {
      console.log(error)  
    }
}
 
start()