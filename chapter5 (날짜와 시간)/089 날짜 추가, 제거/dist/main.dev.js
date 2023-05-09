"use strict";

var date = new Date("2020/06/02");
date.setFullYear(date.getFullYear() - 1);
date.setMonth(date.getMonth() - 1);
date.setDate(date.getDate() - 10);
date.setHours(date.getHours() - 1);
date.setMinutes(date.getMinutes() - 30);
date.setSeconds(date.getSeconds() - 30);
date.setMilliseconds(date.getMilliseconds() - 300);
console.log(date); // console.log(new Date(date1));
// console.log(new Date(date2));