var min = 10, sec = 0;
var clock = function click(){ //khai bao ham
    console.log(min+" :"+sec);
    sec --;
    if (sec < 0){
        sec = 59;
        min --;
    }
    if (min < 0){
        clearInterval(time);
        // dung dong ho
    }
}