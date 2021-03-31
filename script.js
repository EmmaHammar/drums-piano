const drumContainer = document.querySelector(".drumContainer");
const drumItems = document.querySelectorAll("div.drumItem");

//play drum sound when press key + change color
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

//play drum sound when click + change color
document.addEventListener("click", function(clickEvent) {
    // console.log("varje drumItem vid klick", clickEvent.target);

    switch (clickEvent.target.id) {
        case "drumItem1":
            sound1.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem2":
            sound2.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem3":
            sound3.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem4":
            sound4.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem5":
            sound5.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem6":
            sound6.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem7":
            sound7.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem8":
            sound8.play();
            changeColorKey(clickEvent.target);
        break;

        case "drumItem9":
            sound9.play();
            changeColorKey(clickEvent.target);
        break;
    };
});

//============= PIANO  =========== 
const pianoContainer = document.querySelector("#pianoContainer");
const pianoItems = document.querySelectorAll("div.pianoItem"); 

//play piano sound when click key + change color
document.addEventListener("keydown", function(evt) {
    // console.log("pianoItems:", evt.target.childNodes[11].childNodes);
    switch (evt.key){
        case "a": 
            pianoSound1.play();
            changeColorKey(evt.target.childNodes[11].childNodes[1]);
        break;
        case "s": 
            pianoSound2.play();
            changeColorKey(evt.target.childNodes[11].childNodes[3]);
        break;
        case "d": 
            pianoSound3.play();
            changeColorKey(evt.target.childNodes[11].childNodes[5]);
        break;
        case ("f"):
            pianoSound4.play();
            changeColorKey(evt.target.childNodes[11].childNodes[7]);
        break;
        case ("g"):
            pianoSound5.play();
            changeColorKey(evt.target.childNodes[11].childNodes[9]);
        break;
        case ("h"):
            pianoSound6.play();
            changeColorKey(evt.target.childNodes[11].childNodes[11]);
        break;
        case ("j"):
            pianoSound7.play();
            changeColorKey(evt.target.childNodes[11].childNodes[13]);
        break;
    }
});

//play piano sound when mouseover + change color
document.addEventListener("mouseover", function(e) {
    
    if (e.target.id == "pianoItem1") {
        // console.log(document.querySelector("#pianoItem1"));
        pianoSound1.currentTime = 0; 
        pianoSound1.play();
        changeColorKey(document.querySelector("#pianoItem1"));
    }
    if (e.target.id == "pianoItem2") {
        pianoSound2.currentTime = 0; 
        pianoSound2.play();
        changeColorKey(document.querySelector("#pianoItem2"));
    }
    if (e.target.id == "pianoItem3") {
        pianoSound3.currentTime = 0; 
        pianoSound3.play();
        changeColorKey(document.querySelector("#pianoItem3"));
    }
    if (e.target.id == "pianoItem4") {
        pianoSound4.currentTime = 0; 
        pianoSound4.play();
        changeColorKey(document.querySelector("#pianoItem4"));
    }
    if (e.target.id == "pianoItem5") {
        pianoSound5.currentTime = 0; 
        pianoSound5.play();
        changeColorKey(document.querySelector("#pianoItem5"));
    }
    if (e.target.id == "pianoItem6") {
        pianoSound6.currentTime = 0; 
        pianoSound6.play();
        changeColorKey(document.querySelector("#pianoItem6"));
    }
    if (e.target.id == "pianoItem7") {
        pianoSound7.currentTime = 0; 
        pianoSound7.play();
        changeColorKey(document.querySelector("#pianoItem7"));
    }
});


//change color with css class
function changeColorKey (element) {
    element.classList.toggle("changeColorKey");

    //change back to default color
    setTimeout( function() {
        element.classList.toggle("changeColorKey")
    }, 150);
};