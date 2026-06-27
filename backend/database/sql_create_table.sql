

DROP TABLE IF EXISTS ar_customer;
CREATE TABLE ar_customer (
  id bigint NOT NULL AUTO_INCREMENT,
  customer_id varchar(10) DEFAULT NULL,
  customer_name varchar(50) DEFAULT NULL,  
  upline_id varchar(10) DEFAULT NULL,
  recruiter_id varchar(10) default null, 
  login_id varchar(10) default null,
  login_password varchar(20) default null,
  replika_id varchar(10) default null,
  reff_id varchar(10) default null,  
  mobile1 varchar(20) default null,  
  email varchar(30) default null,
  join_date datetime(6) DEFAULT NULL,
  role_id varchar(20) default null, 
  record_status varchar(10) default null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  created_by VARCHAR(50),
  PRIMARY KEY (id)
);

