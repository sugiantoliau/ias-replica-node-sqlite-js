const express = require("express"); 
const cors = require("cors");
const db = require('../config/db.js');

const router = express.Router();
router.use(cors());

router.get('/ar_verification_replica_id', (req, res) => {
  try {
    const { vpid } = req.query;
    const params = [];
    let vlSql = 'SELECT * FROM ar_customer';

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