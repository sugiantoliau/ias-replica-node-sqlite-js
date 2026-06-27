const express = require("express"); 
const cors = require("cors");
const db = require('../config/db.js');

const router = express.Router();
router.use(cors());

router.get('/ar_replica', (req, res) => {
  try {
    const { vpid } = req.query;
    const params = [];
    let vlSql = 'SELECT customer_id as ID, customer_name as Name, replika_id, mobile1 as Mobile, email FROM ar_customer';
    
    if (vpid) {
      vlSql += ' WHERE replika_id = ?';
      params.push(vpid);
    }  

    db.all(vlSql, params, (err, rows) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
      }
      res.json({
        Status: 200,
        Message: 'Data replica selected',
        Data: rows
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/ar_replica', (req, res) => {
  try {    
    const vlId = req.body.vpid;
    const params = [];
    let vlSql = 'SELECT customer_id as ID, customer_name as Name, replika_id, mobile1 as Mobile, email FROM ar_customer';
    
    if (vlId) {
      vlSql += ' WHERE replika_id = ?';
      params.push(vlId);
    }  

    db.all(vlSql, params, (err, rows) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
      }
      res.json({
        Status: 200,
        Message: 'Data selected',
        Data: rows
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/ar_replica_lookup', (req, res) => {
  try {
    const { vpid } = req.query;
    const params = [];
    let vlSql = 'SELECT customer_id FROM ar_customer';

    if (vpid) {
      vlSql += ' WHERE replika_id = ?';
      params.push(vpid);
    }

    db.all(vlSql, params, (err, rows) => {
      if (err) {
        return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
      }
      res.json({
        Status: 200,
        Message: 'Data selected',
        Data: rows
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;