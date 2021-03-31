const drumContainer = document.querySelector(".drumContainer");
//alla divar med class="drumItem"
const drumItems = document.querySelectorAll("div.drumItem");


//play drums when press 1-9 keys
document.addEventListener("keydown", function(evt) {
    // console.log("alla drumItems", evt.target.childNodes[3].childNodes);
    switch (evt.key) {
        case "1":
            sound1.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[1]);
        break; 
        case "2":
            sound2.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[3]);
        break; 
        case "3":
            sound3.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[5]);
        break; 
        case "4":
            sound4.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[7]);
        break; 
        case "5":
            sound5.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[9]);
        break; 
        case "6":
            sound6.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[11]);
        break; 
        case "7":
            sound7.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[13]);
        break; 
        case "8":
            sound8.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[15]);
        break; 
        case "9":
            sound9.play(); 
            changeColorKey(evt.target.childNodes[3].childNodes[17]);
        break; 
    }
});

//ändra färg på keydown med css-klass
function changeColorKey (element) {
    element.classList.toggle("changeColorKey")
      setTimeout( function() {
         element.classList.toggle("changeColorKey")
      },150)
   }

//play drums when click
document.addEventListener("click", function(clickEvent) {
    // console.log("varje drumItem vid klick", clickEvent.target);
    changeColorKey(clickEvent.target);

    switch (clickEvent.target.id) {
        case "drumItem1":
            sound1.play();
           
            break;
        case "drumItem2":
            sound2.play();
            break;
        case "drumItem3":
            sound3.play();
            break;
        case "drumItem4":
            sound4.play();
            break;
        case "drumItem5":
            sound5.play();
            break;
        case "drumItem6":
            sound6.play();
            break;
        case "drumItem7":
            sound7.play();
            break;
        case "drumItem8":
            sound8.play();
            break;
        case "drumItem9":
            sound9.play();
            break;
    };
});

//============= PIANO  =========== 
const pianoContainer = document.querySelector("#pianoContainer");

//alla divar med class="pianoItem"
const pianoItems = document.querySelectorAll("div.pianoItem"); 

//piano sound when clicked keys a-j
document.addEventListener("keydown", function(evt) {
    // console.log("evt.key", evt.key);
    switch (evt.key){
        case "a": 
            pianoSound1.play();
            pianoItem1.classList.add("changeColorKey"); 
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case "s": 
            pianoSound2.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.add("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case "d": 
            pianoSound3.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.add("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case ("f"):
            pianoSound4.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.add("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case ("f"):
            pianoSound4.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.add("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case ("g"):
            pianoSound5.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.add("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case ("h"):
            pianoSound6.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.add("changeColorKey");
            pianoItem7.classList.remove("changeColorKey");
        break;
        case ("j"):
            pianoSound7.play();
            pianoItem1.classList.remove("changeColorKey");
            pianoItem2.classList.remove("changeColorKey");
            pianoItem3.classList.remove("changeColorKey");
            pianoItem4.classList.remove("changeColorKey");
            pianoItem5.classList.remove("changeColorKey");
            pianoItem6.classList.remove("changeColorKey");
            pianoItem7.classList.add("changeColorKey");
        break;
    }
});

//piano sound when mouseover
document.addEventListener("mouseover", function(e) {
    console.log(e.target.id);
    if (e.target.id == "pianoItem1") {
        // pianoSound1.currentTime = 0; 
        pianoSound1.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem2") {
        pianoSound2.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem3") {
        pianoSound3.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem4") {
        pianoSound4.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem5") {
        pianoSound5.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem6") {
        pianoSound6.play();
        changeColor(e);
    }
    if (e.target.id == "pianoItem7") {
        pianoSound7.play();
        changeColor(e);
    }
});


//change key color when mouseover
function changeColor(event) {
    event.target.style.backgroundColor = "darkSalmon";
    setTimeout(function() {
        event.target.style.backgroundColor = "";
    }, 300);
};


//KVAR: HUR ÄNDRA FÄRG NÄR KEYDOWN genom funktionen changeColor??