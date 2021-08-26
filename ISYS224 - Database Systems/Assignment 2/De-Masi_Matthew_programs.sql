/********************************************************** 
****** Stored Programs for Assn.2, 2019 *******************
********** Matthew De Masi and 45585342 *******************
******************* Date **********************************
** I declare that the code provided below is my own work **
******* Any help received is duely acknowledged here ******
**********************************************************/

/********* Trigger TR_OVERDUE ************/

delimiter //
drop trigger if exists tr_overdue
//

create trigger tr_overdue
-- type of trigger, etc   
AFTER UPDATE ON invoice
FOR EACH ROW
    begin
-- implementation goes here
 IF NEW.status = 'OVERDUE' THEN
 INSERT INTO 
 alerts (message_no,message_date,orign,message) 
values (current_date(), current_user(),CONCAT('Invoice with number: ', OLD.INVOICENO ,'is now overdue!'));
 END IF;
    end
//

/************* Helper Functions/Procedures used, two functions for example ****************/

drop function if exists rate_on_date //

create function rate_on_date(staff_id int, given_date DATE) returns float

DETERMINISTIC
begin
declare hour_rate float;
declare start_date date;
declare finish_date date;
declare hourly_rate int default 0;
declare v_finished int default 0;

declare hourly_work CURSOR FOR
select hourlyrate, startdate, finishdate
from salarygrade join staffongrade on staffongrade.grade = salarygrade.grade
where staffongrade.staffno = staff_id;
declare continue handler for not found set v_finished = 1;

open hourly_work;
repeat fetch hourly_work into hourly_rate, start_date, finish_date;

if(given_date between start_date and finish_date) 
then set hour_rate = hourly_rate;

elseif given_date >= start_date and finish_date is null
then set hour_rate = hourly_rate;
end if;
until v_finished
end repeat;
close hourly_work;

return hour_rate;

end //


drop function if exists cost_of_campaign //

create function cost_of_campaign (camp_id int) returns float

DETERMINISTIC
begin
declare total_cost float;
select sum(rate_on_date(STAFFNO,WDATE)*hour)
into total_cost from workson
where camp_id = CAMPAIGN_NO;
return total_cost;
end //

/************Procedure SP_FINISH_CAMPAIGN******************/


drop procedure if exists sp_finish_campaign //

create procedure sp_finish_campaign (in c_title varchar(30))

begin
declare B varchar(30);

select count(c_title) into B
from campaign where c_title = TITLE;

if (B != 1) then signal sqlstate '45000'

set message_text = 'ERROR! Campaign title does not exist!';

end if;

update campaign
set ACTUALCOST = cost_of_campaign (CAMPAIGN_NO)
where c_title = TITLE;
update campaign
set CAMPAIGNFINISHDATE = current_date() where c_title = TITLE;

end //
Delimiter ;

/************Procedure SYNC_INVOICE******************/
delimiter //
drop procedure if exists sync_invoice //

CREATE procedure sync_invoice()
begin
declare dDate date;
declare stat varchar(20);
declare d_finished int default 0;
declare d_array cursor for select DATEISSUED, STATUS from invoice;
declare continue handler for not found set d_finished = 1;

open d_array;

repeat
fetch d_array into dDate, stat; 
if (datediff(current_date(), dDate)> 30 )then
Update invoice Set STATUS = 'OVERDUE' Where datediff(current_date(), DATEISSUED) > 30 And STATUS = 'UNPAID';
end if;

until d_finished
end repeat;

close d_array;
end
//
delimiter ;

