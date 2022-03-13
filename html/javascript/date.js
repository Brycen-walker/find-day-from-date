// vars
var url = window.location.href;
var date;
date = url.replace("http://45.33.127.113/javascript/date.html?date=","");
date = decodeURIComponent(date);
var split_date = date.split("/");
var day_str  = split_date[1];
var month_str = split_date[0];
var year_str = split_date[2];

// math



function count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;

  }


  return count;
}

var month = parseInt(month_str);
var day = parseInt(day_str);
var year = parseInt(year_str);
var century = parseInt(year_str);
var length_year = count(century)
var store_length_year = length_year;






function deleteFromEnd(num, n)
    {
        
        // Declare a variable
        // to form the reverse resultant number
        let rev_new_num = 0;
        
        // Loop with the number
        for (let i = 1; num != 0; i++) {
        
            let digit = num % 10;
            num = parseInt(num / 10, 10);
        
            if (i == n) {
                continue;
            }
            else {
        
                rev_new_num = (rev_new_num * 10) + digit;
            }
        }
        
        // Declare a variable
        // to form the resultant number
        let new_num = 0;
        
        // Loop with the number
        for (let i = 0; rev_new_num != 0; i++) {
        
            new_num = (new_num * 10)
                    + (rev_new_num % 10);
            rev_new_num = parseInt(rev_new_num / 10, 10);
        }
        
        // Return the resultant number
        return new_num;
    }

function deleteFromStart(num, n)
    {
        
        // Get the number of digits
        let d = parseInt(Math.log10(num), 10) + 1;
        
        // Declare a variable
        // to form the reverse resultant number
        let rev_new_num = 0;
        
        // Loop with the number
        for (let i = 0; num != 0; i++) {
        
            let digit = num % 10;
            num = parseInt(num / 10, 10);
        
            if (i == (d - n)) {
                continue;
            }
            else {
        
                rev_new_num = (rev_new_num * 10) + digit;
            }
        }
        
       // Declare a variable
        // to form the resultant number
       let new_num = 0;
        
        // Loop with the number
        for (let i = 0; rev_new_num != 0; i++) {
        
           new_num = (new_num * 10)
                    + (rev_new_num % 10);
            rev_new_num = parseInt(rev_new_num / 10, 10);
        }
        
        // Return the resultant number
        return new_num;
    }

if (length_year == 4) {
	
	while (2 < length_year) {
    		century = deleteFromStart(century, length_year);
 		length_year -= 1;
	}
	length_year = store_length_year;
	century *= 100
	if (count(century) == 3) {
		century *= 10
	}
	 if (count(century) == 2) {
                century *= 100
        }
	 if (count(century) == 1) {
                century *= 1000
        }
	century /= 100;
	var doomyear = 0;
	doomyear += century % 4;
}
var sunday = 0;
var monday = 1;
var tuesday = 2;
var wednesday = 3;
var thursday = 4;
var friday = 5;
var saturday = 6;

if (doomyear == 0){
	doomyear = doomyear.toString()
	doomyear = 2; 
}else if (doomyear == 1){
        doomyear = doomyear.toString()
	doomyear = 0;
}else if (doomyear == 2){
        doomyear = doomyear.toString()
        doomyear = 5;
}else if (doomyear == 3){
        doomyear = doomyear.toString()
        doomyear = 3;
}


// add years
if (length_year == 4) {
	century *= 100;
	var small_years = year - century;
	var day_num = doomyear + small_years; 
	day_num %= 7;
	leap_years = small_years / 4
	leap_years = leap_years | 0
	day_num += leap_years
}

// check months for doomsday
var doomsdate;
if (month == 1 && small_years % 4 != 0){
	doomsdate = 3;
}else if (month == 1 && small_years % 4 == 0) {
	doomsdate = 4;
}
if (month == 2 && small_years % 4 != 0){
        doomsdate = 28;
}else if (month == 2 && small_years % 4 == 0) {
	doomsdate = 29;
}
if (month == 3) {
	doomsdate = 7;
}
if (month == 4) {
        doomsdate = 4;
}
if (month == 5) {
        doomsdate = 9;
}

if (month == 6) {
        doomsdate = 6;
}

if (month == 7) {
        doomsdate = 11;
}

if (month == 8) {
        doomsdate = 8;
}

if (month == 9) {
        doomsdate = 5;
}

if (month == 10) {
        doomsdate = 10;
}

if (month == 11) {
        doomsdate = 7;
}

if (month == 12) {
        doomsdate = 12;
}
var day_dif;
if (day > doomsdate) {
	day_dif = day - doomsdate
	day_num += day_dif
}
//could be wrong
if (doomsdate > day) {
	day_dif = doomsdate - day
	day_num -= day_dif
	var n_num = day_num % 7
	day_num = 7 + n_num

}

//day_num += day_dif
day_num = day_num % 7
if (day_num == 0){
	document.body.innerHTML = "sunday"

}
if (day_num == 1){
        document.body.innerHTML = "monday"

}

if (day_num == 2){
        document.body.innerHTML = "tuesday"

}

if (day_num == 3){
        document.body.innerHTML = `wednesday`

}

if (day_num == 4){
        document.body.innerHTML = "thursday"

}

if (day_num == 5){
        document.body.innerHTML = "friday"

}

if (day_num == 6){
        document.body.innerHTML = "saturday"

}





//test
//document.body.innerHTML = `doomsdate: ${doomsdate}<br>day: ${day}<br>month: ${month}<br>leap years: ${leap_years}<br>century: ${century}<br>year: ${year}<br>small years: ${small_years}<br>day_num: ${day_num}<br>doomyear: ${doomyear}`;




//window.location.replace("../action.html")
