const express = require('express')
const app = express()
const bodyParser = require("body-parser");	
app.use(bodyParser.json());
//mongoose connection database
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
mongoDB='mongodb://localhost/my_database';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + mongoDB);
});
mongoose.connection.on('error', () => {
    console.log('Connection error');
});

const port = 3000 


const user = require('./routes/user')
app.use('/registeration',user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))