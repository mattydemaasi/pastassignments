/************ Matthew De Masi ***********/
/*********** 45585342 **********/

INSERT INTO `customer` (`CUSTOMER_ID`, `COMPANYNAME`, `ADDRESS`,  `STAFF_STAFFNO`) VALUES ('2', 'ANU', 'Eastwood',  '3');
INSERT INTO `customer` (`CUSTOMER_ID`, `COMPANYNAME`, `ADDRESS`,  `STAFF_STAFFNO`) VALUES ('4', 'UNSW', 'Sydney',  '5');

INSERT INTO `campaign` (`CAMPAIGN_NO`, `TITLE`, `CUSTOMER_ID`, `THEME`, `CAMPAIGNSTARTDATE`, `CAMPAIGNFINISHDATE`, `ESTIMATEDCOST`, `ACTUALCOST`) 
    VALUES ('3', 'Green', '3', 'Summer', '2018-07-01', '2019-08-10', '1600', '1650');

INSERT INTO `campaign` (`CAMPAIGN_NO`, `TITLE`, `CUSTOMER_ID`, `THEME`, `CAMPAIGNSTARTDATE`, `ESTIMATEDCOST`) 
    VALUES ('4', 'Black', '4', 'Winter', '2019-03-10', '2000');
    
INSERT INTO `invoice` (`INVOICENO`, `CAMPAIGN_NO`, `DATEISSUED`, `DATEPAID`, `BALANCEOWING`, `STATUS`) 
    VALUES ('3', '3', '2019-09-19',  '2019-09-30', '980', 'UNPAID');

INSERT INTO `invoice` (`INVOICENO`, `CAMPAIGN_NO`, `DATEISSUED`, `BALANCEOWING`, `STATUS`) 
    VALUES ('4', '4', '2019-10-10', '675', 'UNPAID');
    
-- Turn off autocommit so you can have better control on what you are doing by rolling back transactions.
set autocommit = 0;

-- Inspect the invoice and the alerts table
select * from invoice;
select * from alerts;

-- Update the invoice table
UPDATE invoice set STATUS = 'UNPAID' where INVOICENO = 1;

-- Verify that the trigger you implemented works
select * from invoice;
select * from alerts;

-- Bring DB back to original state; re-check
rollback;
select * from invoice;
select * from alerts;

-- Synchronise the invoice table and verify the procedure behaves as desired ----------
call sync_invoice;
select * from invoice;
select * from alerts;

-- Bring DB back to original state; delete campaign# 2; check all relevant tables
rollback;
delete from invoice where campaign_no = 2;
select * from invoice;
select * from alerts;
select * from campaign;
select * from salarygrade;
select * from staff;
select * from staffongrade;
select * from workson;

-- Finish the campaign titled RED. Verify that it behaves as desired.
call sp_finish_campaign('BLUE');
select * from campaign;
select * from invoice;
call sp_finish_campaign('GREEN'); -- should SIGNAL error condition 


-- Synchronise the invoice table and verify the procedure behaves as desired
call sync_invoice;
select * from alerts;
rollback;

