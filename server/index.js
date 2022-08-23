import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
// Routes

// initialize express application
const app = express();

// Middleware 
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

// configure the dotenv
dotenv.config();

mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=>app.listen(process.env.PORT || 5000, ()=>console.log('Allurine Server Running Database Connected')))
.catch((error)=>console.log(error));

// Calling Routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute)



