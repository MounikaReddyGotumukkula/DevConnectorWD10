const express = require ('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const app = express();

//DB config
const db= keys.mongoURI;
mongoose
.connect(db)
//promise statement
.then(()=> console.log('mongo connected'))
.catch((err) => console.log("*****************************************Mounika*****************************",err))

//let's write our first route
app.get('/', (req, res) => res.send('Hello World'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



const port = 5000;
app.listen(port,() => console.log(`Server is running on port ${port}`) );