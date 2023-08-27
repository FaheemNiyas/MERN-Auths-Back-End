const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const DB = require('./dbconnection');
const Auth = require('./Auth/Auth');



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/Auth', Auth)


DB();

app.listen(3001, () => {
    console.log("Server is running");
});

