document.addEventListener("keydown", function(evt){
    if (evt.key == "1") {
        var sound = document.getElementById("myAudio");
        sound.play(); 
    }
});