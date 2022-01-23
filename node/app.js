//node_imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

//file_imports
const authRouter = require('./router/auth');
const leaveRouter = require('./router/leaveRoute');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRouter);
app.use(leaveRouter);

//database connection
mongoose.connect(process.env.URI.toString())
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    })