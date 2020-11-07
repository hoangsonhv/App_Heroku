
var  color = ["orange","red","black"];
var i = 0;

function click1() {
    var box = document.getElementById("box");
    i++;
    box.style.backgroundColor = color[i%3];
}
function hover1(e) {
    // var box = document.getElementById("box");
    e.style.backgroundColor = "black";
}
function hover2(e) {
    // var box = document.getElementById("box");
    e.style.backgroundColor = "green";
}
function key1(e) {
    var v = e.value;

}
function key2(e) {
    var v = e.value;
    var k = event.keyCode;
    if(k==13){
        console.log(V);
    }
    console.log(k);
}
function key3(e) {
    var v = e.value;
    // console.log(v);
}
function cop1(e) {
    console.log("copy");
}
function change1(e) {
    var v = e.value;
    console.log(v);
}