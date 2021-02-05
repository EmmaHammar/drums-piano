const drumContainer = document.querySelector(".drumContainer");

//alla divar med class="drumItem"
const drumItems = document.querySelectorAll("div.drumItem");

//HUR ÄNDRA BAKGRUND NÄR DU TRYCKER 1 för box 1?
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
})


//================================
//============= PIANO  =========== 
//================================

//ljudet
let pianoSound1 = document.getElementById("pianoSound1");
let pianoSound2 = document.getElementById("pianoSound2");

//li ljudet
let liPianoSound1 = document.getElementById("liPianoSound1");
let liPianoSound2 = document.getElementById("liPianoSound2");


//elementet li har eventListener
liPianoSound1.addEventListener("mouseover", function() {
    pianoSound1.play();
    liPianoSound1.style.backgroundColor = "orange";
    setTimeout(function() {
        liPianoSound1.style.backgroundColor = "";
    }, 200);
})

liPianoSound2.addEventListener("mouseover", function() {
    pianoSound2.play();
    liPianoSound2.style.backgroundColor = "orange";
    setTimeout(function() {
        liPianoSound2.style.backgroundColor = "";
    }, 200);
})



/*
const pianoContainer = document.querySelector(".pianoContainer");
// console.log("pianoContainer", pianoContainer);
const pianoItems = document.querySelectorAll(".pianoItem");

let pianoArray = [pianoSound1, pianoSound2, pianoSound3, pianoSound4, pianoSound5, pianoSound6, pianoSound7];

pianoContainer.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "orange";

    //Vill koppla till respektive tangent
    document.getElementById("pianoSound1").play();

//    reset the color after a short delay
   setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 200);
}); 
*/

//VILL EJ ATT DE SKA SPELAS SAMTIDIGT DOCK
// for (i=0; i<pianoArray.length; i++) {
//     console.log(pianoArray[i])

//     pianoArray[0].addEventListener("mouseover",      function(event1) {
//         console.log("mouseover pianoarray0");
//         event1.target.style.backgroundColor = "pink";
//     })
// };


        // if(pianoArray[0]) {
        //     console.log("ljud 1");
        //     document.getElementById("pianoSound1");
        //     pianoSound1.play();
        // }
        // if(pianoArray[1]) {
        //     console.log("ljud 2");
        //     break;
        // }
        // };


// document.addEventListener("keydown", function(evt){
//     if (evt.key == "1") {
//         var sound = document.getElementById("myAudio");
//         sound.play(); 
//     }
// });
