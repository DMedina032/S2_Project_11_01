"use strict";

/*

   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Dajah Medina
   Date:   2.13.19

*/
//By using the var, we are then able to declare the varible thisTime and give it a value of new date. I did the same thing for timeStr and gave it its value along with converting date and time to a string. 
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
// By using document.getElementById we are then able to return the reference to the first object by using an element or Id. I then connect the innerHTML returns to the HTML document. After that, I then gave it a value of timeStr to connect it back to the var with the value of timeStr.
document.getElementById("timeStamp").innerHTML = timeStr;

// By using var again, I was then able to set both thisHours, and thisMonth to assign their values along the getHours, and getMonth.
var thisHours = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// By using var and by declaring mapNum and giving it a value, I was then able to calculate the formula of 2xmonth plus hour with the percentage of 24%. I then used var and declared the value ofimgStr to set the value of the link ot the image along with mapNum an dthe ending of the link of png. 
var mapNum = (2 * thisMonth + thisHours) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);