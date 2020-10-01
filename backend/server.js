const express = require('express');
//const bodyParser = require('body-parser'); //not needed in new version of express
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // environment variables in .env file

const app = express();                      //create express server
const port = process.env.PORT || 5000;      //""

app.use(cors());            //middleware
app.use(express.json());    //parse json, server will send and receive json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter)


app.listen(port, () => {    //starts server
    console.log(`Server is running on port: ${port}`);
});