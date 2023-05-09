const date = new Date();
console.log(date);
console.log(date.getDay());

const dayList = ["월", "화", "수", "목", "금", "토", "일"];

const day = dayList[date.getDay()];
console.log(day);
