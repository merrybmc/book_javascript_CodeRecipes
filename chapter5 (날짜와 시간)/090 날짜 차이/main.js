const dataA = new Date("2020/06/01");
const dataB = new Date("2020/05/01");

const diffMSec = dataA.getTime() - dataB.getTime();
const diffMSec2 = Date.parse(dataA) - Date.parse(dataB);
console.log(diffMSec);
console.log(diffMSec2);

const diffDate = diffMSec / (24 * 60 * 60 * 1000);
console.log(diffDate);
