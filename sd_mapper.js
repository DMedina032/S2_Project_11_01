"use strict"

/*

   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Dajah Medina
   Date:   2.13.19

*/
var thisTime = Date("February 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleTimestring();
document.getElementById("timeStr").innerHTML;

var thisHour = thisTime.getHours();
var thisMont = thisTime.getMonth();

var thisTime = (thisMonth - thisHour) % 24