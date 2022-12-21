var dt = new Date();
var hours = dt.getHours() ; // gives the value in 24 hours format
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = dt.getMinutes() ;
var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
finalTime // final time Time - 22:10