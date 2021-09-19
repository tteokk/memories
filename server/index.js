//starting point of server application

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import the router to be able to use express middleware to connect to our application
import postRoutes from './routes/posts.js';

//used to be const express = require('express); but in new syntax this is allowed

//initialize the app to use all different methods on app instance

const app = express();

//images to have limit of 30mb
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//setting up bodyParser to properly send requests
app.use(cors());

app.use('/posts', postRoutes); //every route inside of the postRoutes will start with posts

//connect database; mongoDB will host our database on their cloud

const CONNECTION_URL = 'mongodb+srv://tteokk:tteokk@cluster0.pc0wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;

//function accepts 2 parameters, use this to connect to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);

//mongoose.set('useFindAndModify', false); //no warnings in console