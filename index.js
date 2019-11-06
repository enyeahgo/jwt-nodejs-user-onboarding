const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGODB,
	{ useNewUrlParser: true },
	() => console.log('Connected to MongoDB')
);

//Middlewares
app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/user', authRoute);

//Serve Static Files
app.use(express.static('./public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port: ' + PORT));