
   var wordlist=[
    "oval",
    "tentacle",
    "bright",
    "yard",
    "hole",
    "pollution",
    "nail",
    "fish",
    "tractor",
    "dinosaur",
    "walrus",];

   //functions for wordlist:

var guess=[];


    guess={
        
    }
    
    var entryScreen = document.createElement("p");
    entryScreen.onload = function() {
        entryScreen.innerHTML="PRESS ANY KEY TO CONTINUE";
        container.appendChild(entryScreen);
    }

    //the lines that become the words when you get them right
    container.innerHTML=word.display();

