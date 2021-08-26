CREATE TABLE `supervisor`
(
 `supervisorid` varchar(8),
 `supervisorfirstname` varchar(30),
 `supervisorlastname` varchar(30),
 `supervisorphone` int,
PRIMARY KEY (`supervisorid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO 
`supervisor` (`supervisorid`, `supervisorfirstname`,`supervisorlastname`,`supervisorphone`) values
('S1', 'Jacob','Sadler','0412324312'),
('S2', 'Lachlan','McConnell','0412324314'),
('S3', 'Eric','Xu','0412324316'),
('S4', 'Mary','Steakhouse','0412324318'),
('S5', 'Will','Guo','0412324310');

CREATE TABLE `staff` 
(
  `staffid` varchar(10) NOT NULL,
  `stafffirstname` varchar(30) NOT NULL,
  `stafflastname` varchar(30) NOT NULL,
  `staffposition` varchar(30) NOT NULL,
  `staffemail` varchar(100) NOT NULL,
  `staffphonenumber` int NOT NULL,
  `staffstatus` varchar(30) NOT NULL,
  `staffofficelocation` varchar(30) DEFAULT NULL,
  `supervisorid` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`staffid`),
  CONSTRAINT fk_supervisorstaff FOREIGN KEY (`supervisorid`) REFERENCES supervisor(`supervisorid`)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
`staff`(`staffid`,`stafffirstname`,`stafflastname`,`staffemail`,`staffphonenumber`, `staffposition`, `staffstatus`, `staffofficelocation`, `supervisorid`) values
(1001,'Geoff','Luo', 'duckface@shine.com', 0424932119, 'Director', 'Full Time', 'Film Room', NULL),
(1002,'Guy','Findlay', 'funguy@shine.com', 0424932112, 'Actor', 'Casual', NULL, NULL),
(1003,'Jacob','Sadler', 'jabocsadler@shine.com', 0412324312, 'Manager', 'Full Time', 'Head Office', 'S1'),
(1004,'Lachlan','McConnell', 'lachie147@shine.com', 0412324314, 'Manager', 'Full Time', 'Head Office', 'S2'),
(1005,'Bryan','Jacobs', 'bj-jacobs@shine.com', 0424932198, 'Model', 'Casual', NULL, NULL),
(1006,'Selina','Kim', 'skimmers@shine.com', 0424432198, 'Accountant', 'Full Time', 'Brayson Office', NULL),
(1007,'Eric','Xu', 'xulander@shine.com', 0442324314, 'Account Manager', 'Full Time', 'Head Office', 'S3'),
(1008,'Manu','Arora', 'manny435@shine.com', 0424936969, 'Graphical Designer', 'Casual', NULL, NULL),
(1009,'Nicholas','Morley', 'nickymicky@shine.com', 0424111111, 'Technical Personnel', 'Casual', NULL, NULL),
(1010,'Daniel','Smith', 'dannysmithery@shine.com', 0411324311, 'Admin Personnel', 'Full Time', 'Foyer Office', NULL),
(1011,'Mary','Steakhouse', 'meateatermary@shine.com', 0412314114, 'Account Manager', 'Full Time', 'Head Office', 'S4'),
(1012,'Will','Guo', 'willyg@shine.com', 0412324310, 'Manager', 'Full Time', 'Head Office', 'S5'),
(1013,'Wilson','Chen', 'chennyc@shine.com', 0412323310, 'Model', 'Casual', NULL, NULL);

CREATE TABLE `client` 
(
  `clientid` varchar(8) NOT NULL,
  `clientname` varchar(30) NOT NULL,
  `clientphonenumber` varchar(10) NOT NULL,
  `clientemailaddress` varchar(100) NOT NULL,
  `clientaddress` varchar(200) NOT NULL,
  `staffresponsible` varchar(10) NOT NULL,
  PRIMARY KEY (`clientid`),
  CONSTRAINT fk_clientcustomer FOREIGN KEY (staffresponsible) REFERENCES staff(staffid)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO
`client`(`clientid`,`clientname`,`clientphonenumber`,`clientemailaddress`,`clientaddress`,`staffresponsible`)values
('C1', 'NSW Tourism Group', '0234278077', 'admin@nsw.org.au', '21 Price Drive Sydney 2000', 1001),
('C2', 'QLD Tourism Group', '0710123345', 'admin@qld.org.au', '58 Barney Place Brisbane 4000', 1003),
('C3', 'NT Tourism Group', '0812345802', 'admin@nt.org.au', '98 Bill Parkway Darwin 8000', 1001),
('C4', 'WA Tourism Group', '0851133343', 'admin@wa.org.au', '69 Sally Street Adelaide 6000', 1004),
('C5', 'VIC Tourism Group', '0332334582', 'admin@vic.org.au', '89 Sentry Drive Melboure 3000', 1006);


CREATE TABLE `campaign`
(
`campaignid` varchar(8) NOT NULL,
`campaignname` varchar(30) NOT NULL,
`campaigntheme` varchar(30) NOT NULL,
`campaignestimatedcost` int NOT NULL,
`campaignactualcost` int NOT NULL,
`campaignstartdate` date NOT NULL,
`campaignfinishdate` date NOT NULL,
`campaignstafftime` int NOT NULL,
`campaignstudiotime` int NOT NULL,
`campaignconsumablescost` int NOT NULL,
`campaignclient` varchar(8) NOT NULL,
PRIMARY KEY (`campaignid`),
CONSTRAINT fk_campaign FOREIGN KEY (campaignclient) REFERENCES client(clientid)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
`campaign`(`campaignid`,`campaignname`,`campaigntheme`,`campaignestimatedcost`,`campaignactualcost`,`campaignstartdate`,`campaignfinishdate`,`campaignstafftime`,`campaignstudiotime`,`campaignconsumablescost`,`campaignclient`) values 
('CC1','Sydney Tour','Summer Holiday', 600, 900, '2019-01-18', '2019-01-30', 40, 28, 500, 'C1'),
('CC2','Brisbane Tour','Footy Weekend', 850, 600, '2019-03-05', '2019-03-25', 40, 28, 500, 'C2'),
('CC3','Gold Coast Tour','Party Out', 900, 800, '2019-04-28', '2019-05-07', 40, 28, 500, 'C2'),
('CC4','Adelaide Tour','City Vibes', 600, 600, '2019-05-10', '2019-05-28', 40, 28, 500, 'C4'),
('CC5','Darwin Tour','Waterfalls Sightseeing', 750, 650, '2019-06-22', '2019-07-15', 40, 28, 500, 'C3'),
('CC6','Melbourne Cup','Horse Racing', 550, 600, '2019-09-20', '2019-10-07', 40, 28, 500, 'C5'),
('CC7','Melbourne Tour','Tennis Weekend', 450, 700, '2019-09-20', '2019-10-03', 40, 28, 500, 'C5'); 

CREATE TABLE `studio` 
(
  `studioid` varchar(8) NOT NULL,
  `studioname` varchar(30) NOT NULL,
  `studiolocation` varchar(100) NOT NULL,
  PRIMARY KEY (`studioid`)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into `studio` (`studioid`, `studioname`,`studiolocation`) values
('S1', 'Photo Studio', 'Hall 3 Level 3 Shine Building'),
('S2', 'Filming Studio', 'Level 10 Shine Building'),
('S3', 'Drawing Studio', 'Room 10 Level 7 Shine Building'),
('S4', 'Design Studio', 'Room 12 Level 7 Shine Building'),
('S5', 'Painting Studio', 'Room 2 Level 5 Shine Building');

CREATE TABLE `advert` 
(
  `advertid` varchar(8) NOT NULL,
  `adverttype` varchar(30) NOT NULL,
  `advertstarttime` time NOT NULL,
  `advertendtime` time NOT NULL,
  `advertdate` date NOT NULL,
  `advertcampaign` varchar(10) NOT NULL,
  PRIMARY KEY (`advertid`),
  CONSTRAINT fk_advertstudio FOREIGN KEY (advertcampaign) REFERENCES campaign(campaignid)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO 
`advert` (`advertid`, `adverttype`,`advertstarttime`,`advertendtime`, `advertdate`,`advertcampaign`)values
('A1', 'Magazine', '11:00:00','17:00:00', '2019-01-21','CC1'),
('A2', 'Television', '09:00:00','13:00:00', '2019-03-18','CC2'),
('A3', 'Newspaper', '12:00:00','16:00:00', '2019-04-22','CC3'),
('A4', 'Internet', '08:00:00','16:00:00','2019-05-21','CC4'),
('A5', 'Radio', '10:00:00','17:00:00', '2019-06-30','CC5'),
('A6', 'Billboard', '14:00:00','20:00:00', '2019-09-21','CC6'),
('A7', 'Newspaper', '12:00:00','14:00:00', '2019-09-28','CC6'),
('A8', 'Brochure', '10:00:00','19:00:00', '2019-09-23','CC7');

CREATE TABLE `invoice` 
(
  `invoiceid` varchar(8) NOT NULL,
  `invoicename` varchar(30) NOT NULL,
  `invoiceissuedate` date NOT NULL,
  `campaigncompletiondate` date NOT NULL,
  `invoicepaymentstatus` boolean NOT NULL,
  `invoicepaiddate` date DEFAULT NULL,
  `campaigninvoice` varchar(8) NOT NULL,
  `clientinvoice` varchar(8) NOT NULL,
  PRIMARY KEY (`invoiceid`),
  CONSTRAINT fk_campaigninvoice FOREIGN KEY (campaigninvoice) REFERENCES campaign(campaignid),
 CONSTRAINT fk_clientinvoice FOREIGN KEY (clientinvoice) REFERENCES client(clientid)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
`invoice` (`invoiceid`,`invoicename`, `invoiceissuedate`, `campaigncompletiondate`, `invoicepaymentstatus`, `invoicepaiddate`,`campaigninvoice`,`clientinvoice`)values
('I1', 'Sydney Tour', '2019-02-01', '2019-01-31', 1, '2019-02-01','CC1','C1'),
('I2', 'Brisbane Tour', '2019-03-28', '2019-03-27', 1, '2019-03-30','CC2','C2'),
('I3', 'Gold Coast Tour', '2019-05-11', '2019-05-10', 1, '2019-05-20','CC3','C2'),
('I4', 'Adelaide Tour', '2019-05-29', '2019-05-28', 1, '2019-06-06','CC4','C4'),
('I5', 'Darwin Tour', '2019-07-28', '2019-07-27', 1, '2019-08-03','CC5','C3'),
('I6', 'Melbourne Cup', '2019-10-09', '2019-10-08', 0, NULL,'CC6','C5'),
('I7', 'Melbourne Tour', '2019-10-11', '2019-10-10', 0, NULL,'CC7','C5');


CREATE TABLE `staffsalary` 
(
  `staffsalaryid` varchar(10) NOT NULL,
  `StaffID` varchar(10) NOT NULL,
  `CampaignID` varchar(8) NOT NULL,
  `SalaryGrade` int NOT NULL,
  `Staffstatus` varchar(30) NOT NULL,
  PRIMARY KEY (`staffsalaryid`)
) 
ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into 
`staffsalary` (`staffsalaryid`, `StaffID`, `CampaignID`, `SalaryGrade`, `Staffstatus`)values
('SS01',1003, 'CC1', 4, 'Full Time'),
('SS02',1005, 'CC1', 2, 'Casual'),
('SS03',1010, 'CC1', 2, 'Casual'),
('SS04',1004, 'CC2', 5, 'Full Time'),
('SS05',1002, 'CC2', 1, 'Casual'),
('SS06',1007, 'CC3', 5, 'Full Time'),
('SS07',1008, 'CC3', 1, 'Casual'),
('SS08',1011, 'CC4', 5, 'Full Time'),
('SS09',1009, 'CC4', 3, 'Casual'),
('SS10',1012, 'CC5', 4, 'Full Time'),
('SS11',1010, 'CC5', 4, 'Full Time'),
('SS12',1012, 'CC6', 4, 'Full Time'),
('SS13',1009, 'CC6', 4, 'Casual'),
('SS14',1003, 'CC7', 4, 'Full Time'),
('SS15',1002, 'CC7', 4, 'Casual');

SELECT campaignname as `campaigntitle`, campaigntheme
FROM campaign
WHERE campaignactualcost - (select avg(campaignestimatedcost) from campaign);

SELECT campaignname as 'campaigntitle', count(adverttype)
from advert,campaign, invoice
where campaign.campaignfinishdate > invoice.campaigncompletiondate
GROUP BY campaignname;

SELECT stafffirstname, stafflastname
FROM staff, staffsalary
WHERE staff.staffid = staffsalary.StaffID
AND staffsalary.Staffstatus LIKE 'Full Time'
AND NOT staffsalary.Staffid = staff.staffid;

Select campaignname AS 'campaigntitle', count(*) AS 'COUNTSTAFF'
from campaign, staffsalary
WHERE campaign.campaignid = staffsalary.CampaignID
AND staffsalary.salarygrade > 2
group by campaign.campaignname
having count(*) > 2;

select StaffID, stafffirstname, stafflastname
from staffsalary INNER JOIN staff 
WHERE staffsalary.StaffID = staff.staffid
and staff.staffid != staffsalary.StaffID;