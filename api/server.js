const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.MONGO_STR;

mongoose.connect(DB).then(() => {
    console.log('DB connnection successful')
})

const port = process.env.PORT || 8000;
app.listen(port,() => {
    console.log(`App running on port ${port}...`)
} )

