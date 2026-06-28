const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '../../database');
const dbPath = path.join(dbDir, 'local_dev.db');

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('SQLite connection error:', err.message);
    } else {
        createTable();
    }
});

function createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS ar_customer (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id TEXT DEFAULT NULL,
        customer_name TEXT DEFAULT NULL,  
        upline_id TEXT DEFAULT NULL,
        recruiter_id TEXT DEFAULT NULL, 
        login_id TEXT DEFAULT NULL,
        login_password TEXT DEFAULT NULL,
        replika_id TEXT DEFAULT NULL,
        reff_id TEXT DEFAULT NULL,  
        mobile1 TEXT DEFAULT NULL,  
        email TEXT DEFAULT NULL,
        join_date TEXT DEFAULT NULL,
        role_id TEXT DEFAULT NULL, 
        record_status TEXT DEFAULT NULL,
        created_at TEXT DEFAULT (STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW')),  
        created_by TEXT
    );`;

    db.run(sql);
}

module.exports = db;