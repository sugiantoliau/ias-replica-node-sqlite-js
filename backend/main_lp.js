//backend\main_lp.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./src/config/db.js');

const arCustomerSelfEnrollRouter = require('./src/api/ar_customer_self_enroll.js');
const arCustomerReplicaRouter = require('./src/api/ar_customer_replica.js');
const arCustomerVerifyRouter = require('./src/api/ar_customer_verify.js');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Core API Routers
app.use('/api', arCustomerSelfEnrollRouter);
app.use('/api', arCustomerReplicaRouter);
app.use('/api', arCustomerVerifyRouter);

// Root portal entry point - Serves your standard public/index.html file
app.get('/', (req, res) => {    
    const vlUrl = path.join(__dirname, 'public', 'index.html');
    try {
        res.sendFile(vlUrl);
    } catch (error) {
        console.error('Error ', error); 
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});