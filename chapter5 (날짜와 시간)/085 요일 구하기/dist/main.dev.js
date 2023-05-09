"use strict";

var date = new Date();
console.log(date);
console.log(date.getDay());
var dayList = ["월", "화", "수", "목", "금", "토", "일"];
var day = dayList[date.getDay()];
console.log(day);