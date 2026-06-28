// backend/src/api/ar_customer_list.js

const express = require("express"); 
const cors = require("cors");
const db = require('../config/db.js');

const router = express.Router();
router.use(cors());

router.get('/ar_customer_list', (req, res) => {
  try {
    const vlSql = `SELECT 
        customer_id, customer_name, upline_id, recruiter_id, login_id,
        replika_id, reff_id, mobile1, email, join_date, role_id, 
        record_status, created_by 
    FROM ar_customer ORDER BY join_date DESC;`;

    db.all(vlSql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
        }

        res.json({
            Status: 200,
            Message: 'Fetch Data Success',
            Data: rows
        });
    });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// UPDATE CUSTOMER
router.put('/ar_customer_update', (req, res) => {
  try {
    const vl_customer_id = req.body.vpCustomerid;
    const vl_customer_name = req.body.vpName;
    const vl_mobile_no = req.body.vpMobileNo;
    const vl_email = req.body.vpEmail;
    const vl_replica_id = req.body.vpReplicaid;
    const vl_record_status = req.body.vpRecordStatus; // Optional status update (e.g., Active, Suspended)

    if (!vl_customer_id) {
        return res.status(400).json({ status: 400, message: "Missing parameter: vpCustomerid" });
    }

    const vlSql = `UPDATE ar_customer SET 
        customer_name = ?, 
        replika_id = ?, 
        mobile1 = ?, 
        email = ?,
        record_status = COALESCE(?, record_status)
    WHERE customer_id = ?;`;

    db.run(vlSql, [
        vl_customer_name, 
        vl_replica_id, 
        vl_mobile_no, 
        vl_email, 
        vl_record_status,
        vl_customer_id
    ], function (err) {
        if (err) {
            return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ status: 404, message: "Customer Record Not Found" });
        }

        res.json({
            Status: 200,
            Message: 'Update Data Success',
            Data: { 
                customer_id: vl_customer_id,
                rows_affected: this.changes
            } 
        });
    });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// DELETE CUSTOMER
router.post('/ar_customer_delete', (req, res) => {
  try {
    const vl_customer_id = req.body.vpCustomerid;

    if (!vl_customer_id) {
        return res.status(400).json({ status: 400, message: "Missing parameter: vpCustomerid" });
    }

    const vlSql = `DELETE FROM ar_customer WHERE customer_id = ?;`;

    db.run(vlSql, [vl_customer_id], function (err) {
        if (err) {
            return res.status(500).json({ status: 500, message: "Database Error", error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ status: 404, message: "Customer Record Not Found" });
        }

        res.json({
            Status: 200,
            Message: 'Delete Data Success',
            Data: { 
                customer_id: vl_customer_id,
                rows_affected: this.changes
            } 
        });
    });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;