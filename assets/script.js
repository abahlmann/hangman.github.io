
var wordlist=[
    "oval",//0
    "tentacle",//1
    "bright",//2
    "yard",//3
    "hole",//4
    "pollution",//5
    "nail",//6
    "fish",//7
    "tractor",//8
    "dinosaur",//9
    "walrus",];//10

var guessedWord=[];

//html variables
var entryScreen=document.getElementById("entryScreen");
var container=document.getElementById("container");
var letterBox=document.getElementById("letterBox");
var wrongLetter=document.getElementById("wrongLetter");

var guess={
        lose:false,
        win:false,
        correctGuess:false,
        currentWord:" ",
        guessedWord:" ",
        letterGuessed:"",
        lettersNeeded:0,

        newWord: function(){
            //random number/index
            var x=Math.floor(Math.random()*11);
            this.currentWord=wordlist[x];

            //push guessedWord array
            for (var i=0;i<this.currentWord.length;i++){
                guessedWord.push("_");
            }//close for-loop

            //set lettersNeeded
            this.lettersNeeded=this.currentWord.length;
        },//close newWord

        checkGuess: function(){
            //reset guess
            this.correctGuess=false;

                //check each letter
                for (var i=0;i<this.currentWord.length;i++){
                    if (this.letterGuessed===this.currentWord.charAt(i)){
                        guessedWord[i]=this.currentWord.charAt(i);
                        this.correctGuess=true;
                        this.lettersNeeded=this.lettersNeeded-1;
                    }//close if
                    else{
                        this.lettersGuessed+=1;
                        if (this.lettersGuessed<=15){
                            lose=true;
                        }//close if
                    }//close else
                }//close for-loop
            
             //check for win
            if (this.lettersNeeded===0){
                win=true;
            }//close if
        },//close checkGuess()
        load:function(){
            entryScreen.innerHTML="PRESS ANY KEY TO CONTINUE..";
            container.appendChild(entryScreen);
        },
        game: function(){
            var that=this;
            document.onkeyup=function(letter){
                letterGuessed=letter.key.toLowerCase;
                guess.checkGuess();
                if (!that.correctGuess){
                    //wrongLetter.innerHTML=;
                    letterBox.append(letter.key);
                }
            }//end letter/guess
        },//end game

        start: function(){
            var that = this;
            //react to press any key to continue
            document.onkeyup=function(event){
                entryScreen.innerHTML="";
                console.log(event.key);
                that.newWord();
                console.log(that.currentWord);
                var guessBox = document.createElement("div");
                for (var i=0;i<that.currentWord.length;i++){
                guessBox.innerHTML+=guessedWord[i]+" ";
                }
                container.appendChild(guessBox);
                // while(!that.win||!that.lose){
                    that.game();
                // }
            }
        }//end start

    }//close guess
    guess.load();
    guess.start();
    guess.load();