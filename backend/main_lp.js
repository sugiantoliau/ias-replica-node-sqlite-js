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

app.use('/api', arCustomerSelfEnrollRouter);
app.use('/api', arCustomerReplicaRouter);
app.use('/api', arCustomerVerifyRouter);

app.get('/', (req, res) => {    
    const vlUrl = path.join(__dirname, 'index.html');
    try {
        res.sendFile(vlUrl);
    } catch (error) {
        console.error('Error ', error); 
        res.status(500).send('Internal Server Error');
    }
});

app.get('/store/:name', (req, res) => {
    const vlReplikaid = req.params.name;
    const vlFilePath = path.join(__dirname, 'index.html');   
    const vlHtmlContent = require('fs').readFileSync(vlFilePath, 'utf-8');
    const vlModifiedHtmlContent = vlHtmlContent.replace(/{{param1}}/g, vlReplikaid);
    res.send(vlModifiedHtmlContent);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});