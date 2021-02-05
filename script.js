const drumContainer = document.querySelector(".drumContainer");

//alla divar med class="drumItem"
const drumItems = document.querySelectorAll("div.drumItem");

//play drums when press 1-9 keys
document.addEventListener("keydown", function(evt) {
    if (evt.key == "1") {
        sound1.play(); 
    } 
    if (evt.key == "2") {
        sound2.play(); 
    }
    if (evt.key == "3") {
        sound3.play(); 
    }
    if (evt.key == "4") {
        sound4.play(); 
    }
    if (evt.key == "5") {
        sound5.play(); 
    }
    if (evt.key == "6") {
        sound6.play(); 
    }
    if (evt.key == "7") {
        sound7.play(); 
    }
    if (evt.key == "8") {
        sound8.play(); 
    }
    if (evt.key == "9") {
        sound9.play(); 
    }
});

//play drums when click
document.addEventListener("click", function(clickEvent) {
    console.log(clickEvent);
    console.log("clickEvent.target", clickEvent.target.id);

    //change background when click
    function changeColor() {
        clickEvent.target.style.backgroundColor = "darkSalmon";
        setTimeout(function() {
            clickEvent.target.style.backgroundColor = "";
        }, 100);
    };

    if (clickEvent.target.id == 1) {
        sound1.play();
        changeColor();
    }
    if (clickEvent.target.id == 2) {
        sound2.play();
        changeColor();
    }
    if (clickEvent.target.id == 3) {
        sound3.play();
        changeColor();
    }
    if (clickEvent.target.id == 4) {
        sound4.play();
        changeColor();
    }
    if (clickEvent.target.id == 5) {
        sound5.play();
        changeColor();
    }
    if (clickEvent.target.id == 6) {
        sound6.play();
        changeColor();
    }
    if (clickEvent.target.id == 7) {
        sound7.play();
        changeColor();
    }
    if (clickEvent.target.id == 8) {
        sound8.play();
        changeColor();
    }
    if (clickEvent.target.id == 9) {
        sound9.play();
        changeColor();
    }
});

//================================
//============= PIANO  =========== 
//================================
const pianoContainer = document.querySelector("#pianoContainer");

//alla divar med class="pianoItem"
const pianoItems = document.querySelectorAll("div.pianoItem");

//piano sound when clicked keys a-j
document.addEventListener("keydown", function(evt) {
    // console.log(evt.key);
    if (evt.key === "a") {
        pianoSound1.play();;
    }
    if (evt.key === "s") {
        pianoSound2.play();
    }
    if (evt.key === "d") {
        pianoSound3.play();
    }
    if (evt.key === "f") {
        pianoSound4.play();
    }
    if (evt.key === "g") {
        pianoSound5.play();
    }
    if (evt.key === "h") {
        pianoSound6.play();
    }
    if (evt.key === "j") {
        pianoSound7.play();
    }
});

//piano sound when mouseover
document.addEventListener("mouseover", function(e) {

    //change key color when mouseover
    function changeKeyColor() {
        e.target.style.backgroundColor = "darkSalmon";
        setTimeout(function() {
            e.target.style.backgroundColor = "";
        }, 300);
    };

    console.log(e.target.id);
    if (e.target.id == "pianoItem1") {
        pianoSound1.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem2") {
        pianoSound2.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem3") {
        pianoSound3.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem4") {
        pianoSound4.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem5") {
        pianoSound5.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem6") {
        pianoSound6.play();
        changeKeyColor();
    }
    if (e.target.id == "pianoItem7") {
        pianoSound7.play();
        changeKeyColor();
    }
});

//KVAR: HUR ÄNDRA FÄRG NÄR KEYDOWN för trummor resp synt??