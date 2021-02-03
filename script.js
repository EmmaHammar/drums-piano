const drumContainer = document.querySelector(".drumContainer");

//Varför behöver vi ha både queryselector o getelementbyid?
const drumItem = document.querySelector(".drumItem");
const drumItem1 = document.getElementById("1");
const drumItem2 = document.getElementById("2");
const drumItem3 = document.getElementById("3");
const drumItem4 = document.getElementById("4");
const drumItem5 = document.getElementById("5");
const drumItem6 = document.getElementById("6");
const drumItem7 = document.getElementById("7");
const drumItem8 = document.getElementById("8");
const drumItem9 = document.getElementById("9");

console.log(drumItem2);
console.log("drumItem", drumItem);


drumItem1.addEventListener("click", function() {
    console.log("klick1");
});

drumItem2.addEventListener("click", function() {
    console.log("klick2");
});

drumItem3.addEventListener("click", function() {
    console.log("klick3");
});

drumItem4.addEventListener("click", function() {
    console.log("klick4");
});

drumItem5.addEventListener("click", function() {
    console.log("klick5");
});

drumItem6.addEventListener("click", function() {
    console.log("klick6");
});

drumItem7.addEventListener("click", function() {
    console.log("klick7");
});

drumItem8.addEventListener("click", function() {
    console.log("klick8");
});

drumItem9.addEventListener("click", function() {
    console.log("klick9");
});
// document.addEventListener("keydown", function(evt){
//     if (evt.key == "1") {
//         var sound = document.getElementById("myAudio");
//         sound.play(); 
//     }
// });


