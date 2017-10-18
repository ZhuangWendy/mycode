//内容左边日期start
function Year_Month(){
				var now = new Date();
				var yy = now.getYear()+1900;	
				var mm = now.getMonth()+1;
				var c1='<font color="#ffffff">';
				if(now.getDay() == 0)c1='<font color="#ffffff">';
				if(now.getDay() == 6)c1='<font color="#ffffff">';
				return(c1+yy+'年'+mm+'月</font>');
			}
			
function Date_of_Today(){
				var now = new Date();
				var c1 = '<font color="#ff0000">';
				if(now.getDay() == 0)c1='<font color="#c00000">';
				if(now.getDay() == 6)c1='<font color="#00c000">';
				return(c1 + now.getDate()+'</font>');
			}
			
function Day_of_Today(){
				var day = new Array();
				day[0] = "星期日";
				day[1] = "星期一";
				day[2] = "星期二";
				day[3] = "星期三";
				day[4] = "星期四";
				day[5] = "星期五";
				day[6] = "星期六";
				var now = new Date();
				var c1 = '<font color="#ffffff">';
				if(now.getDay() == 0)c1='<font color="#ffffff">';
				if(now.getDay() == 6)c1='<font color="#ffffff">';
				return(c1 + day[now.getDay()]+'</font>');
			}
			
function CurentTime(){
				var now = new Date();
				var hh = now.getHours();
				var mm = now.getMinutes();
				var ss = now.getTime()%60000;
				ss = (ss-(ss%1000))/1000;
				var clock = hh+':';
				if(mm<10)
				clock += '0';
				clock += mm+':';
				if(ss<10)
				clock +='0';
				clock +=ss;
				return(clock);
			}

function refreshCalendarClock(){
		document.all.calendarClock1.innerHTML = Year_Month();
		document.all.calendarClock2.innerHTML = Date_of_Today();
		document.all.calendarClock3.innerHTML = Day_of_Today();
		document.all.calendarClock4.innerHTML = CurentTime();	
	}
setInterval('refreshCalendarClock()',1000);
//内容左边日期end

                    