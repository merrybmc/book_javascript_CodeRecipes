"use strict";

var date = new Date();
var locale1 = date.toLocaleString();
var locale2 = date.toLocaleDateString();
var locale3 = date.toLocaleTimeString();
console.log(locale1);
console.log(locale2);
console.log(locale3);