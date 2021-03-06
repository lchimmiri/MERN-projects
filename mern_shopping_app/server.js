const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/Items')

const app = express();


app.use(bodyParser.json())


const db = require('./config/keys').mongoURI

mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.use('/api/items', items)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))