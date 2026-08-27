// function delayedFunction (){
//     console.log("this function is delayed by the 2 seconds ");
// }
// setTimeout(delayedFunction,2000);
// function setinterval(){
//     console.log("this function is called after every 2 seconds ");
// }
// setInterval(setinterval,2000);
const repeatedFunction = ()=>{
    console.log("this function is called after every 2 seconds ");
};
const intervalid=setInterval(repeatedFunction,1000);
function stopInterval() {
    clearInterval(intervalid);
}

setTimeout(stopInterval, 5000);
