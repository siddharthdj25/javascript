function delayedFunction (){
    console.log("this function is delayed by the 2 seconds ");
}
setTimeout(delayedFunction,2000);
function setinterval(){
    console.log("this function is called after every 2 seconds ");
}
setInterval(setinterval,2000);