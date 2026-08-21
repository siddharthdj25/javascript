// const currentDate= new Date();
// console.log(new Date());
 
// const datestring = "2026-08-21T11:18:48.355Z";
// const dateFromString=new Date(datestring);
// console.log(dateFromString);
// const currMillisec= new Date().getTime();
// console.log(currMillisec);
// const datefromMillisec= new Date(currMillisec);
// console.log(datefromMillisec);
const currentdate =new Date();
// const year =currentdate.getFullYear();
// const month=currentdate.getMonth();
// console.log(month);
// console.log(year);
const hours= currentdate.getHours();
const minitues = currentdate.getMinutes();
const seconds = currentdate.getSeconds();
console.log(`current time is ${hours}:${minitues}:${seconds}`);
