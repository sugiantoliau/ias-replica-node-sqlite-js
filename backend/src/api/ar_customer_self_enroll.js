// backend\src\api\ar_customer_self_enroll.js

const express = require("express"); 
const cors = require("cors");
const crypto = require("crypto");
const db = require('../config/db.js');

const router = express.Router();
router.use(cors());

router.post('/ar_customer_self_enroll', (req, res) => {
  try {
    const vl_reff_id = req.body.vpReffID;
    const vl_login_id = req.body.vpUsername;
    const vl_login_password = req.body.vpPassword;
    const vl_customer_id = req.body.vpCustomerid;
    const vl_customer_name = req.body.vpName;
    const vl_mobile_no = req.body.vpMobileNo;
    const vl_email = req.body.vpEmail;
    const vl_replica_id = req.body.vpReplicaid;
    
    //const vl_customer_id = crypto.randomUUID().substring(0, 10);
    const vl_join_date = new Date().toISOString(); 
    const vl_recruiter_id = vl_reff_id;
    const vl_upline_id = vl_reff_id;
    const vl_record_status = 'New';
    const vl_created_by = vl_login_id;
    const vl_role_id = 'MM';

    const vlSql = `INSERT INTO ar_customer (
        customer_id, customer_name, upline_id, recruiter_id, login_id,
        login_password, replika_id, reff_id, mobile1, email,
        join_date, role_id, record_status, created_by
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    db.run(vlSql, [
        vl_customer_id, vl_customer_name, vl_upline_id, vl_recruiter_id, vl_login_id,             
        vl_login_password, vl_replica_id, vl_reff_id, vl_mobile_no, vl_email,             
        vl_join_date, vl_role_id, vl_record_status, vl_created_by
    ], function (err) {
        if (err) {
            return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
        }

        res.json({
            Status: 200,
            Message: 'Add Data Success',
            Data: { 
                id: this.lastID,
                customer_id: vl_customer_id 
            } 
        });
    });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;