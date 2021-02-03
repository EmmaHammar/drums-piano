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

drumItem1.addEventListener("click", function(e) {
    console.log("klick1");
    let sound1 = document.getElementById("sound1");
    sound1.play(); 
    //Change color when clicked on
    e.target.style.backgroundColor = "darkSalmon";
    //Change back to yellow after a while
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem2.addEventListener("click", function(e) {
    console.log("klick2");
    let sound2 = document.getElementById("sound2");
    sound2.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem3.addEventListener("click", function(e) {
    console.log("klick3");
    let sound3 = document.getElementById("sound3");
    sound3.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);


drumItem4.addEventListener("click", function(e) {
    console.log("klick4");
    let sound4 = document.getElementById("sound4");
    sound4.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem5.addEventListener("click", function(e) {
    console.log("klick5");
    let sound5 = document.getElementById("sound5");
    sound5.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem6.addEventListener("click", function(e) {
    console.log("klick6");
    let sound6 = document.getElementById("sound6");
    sound6.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem7.addEventListener("click", function(e) {
    console.log("klick7");
    let sound7 = document.getElementById("sound7");
    sound7.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem8.addEventListener("click", function(e) {
    console.log("klick8");
    let sound8 = document.getElementById("sound8");
    sound8.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

drumItem9.addEventListener("click", function(e) {
    console.log("klick9");
    let sound9 = document.getElementById("sound9");
    sound9.play(); 
    e.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        e.target.style.backgroundColor = "";
    }, 100);
}, false);

//================================
//============= PIANO  =========== 
//================================

// every time the cursor is moved over the pianoItems (li)
let pianoContainer = document.querySelector(".pianoContainer")
console.log("pianoContainer", pianoContainer);
pianoContainer.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
    console.log("mouseover");
    event.target.style.backgroundColor = "orange";

   // reset the color after a short delay
   setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 500);
}, false);






let test = document.getElementById("test");
// This handler will be executed only once when the cursor moves over the unordered list

console.log("test", test);
test.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  test.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
    console.log("orange");
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

// document.addEventListener("keydown", function(evt){
//     if (evt.key == "1") {
//         var sound = document.getElementById("myAudio");
//         sound.play(); 
//     }
// });