
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

var guess={
        lose:false,
        win:false,
        correctGuess:false,
        currentWord:" ",
        guessedWord:" ",
        lettersGuessed:0,
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
                    if (guess===this.currentWord.charAt(i)){
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

        }//close checkGuess()
    }//close guess
document.onkeyup=function(start){
    guess.newWord();
    var guessBox = document.createElement("div");
    for (var i=0;i<guess.currentWord.length;i++){
    guessBox.innerHTML+=guessedWord[i]+" ";
    }
    container.appendChild(guessBox);
    do{

    document.onkeyup=function(letter){
        guess=letter;
        guess.checkGuess();

    }//end letter/guess
    } while(guess.win||!guess.lose);//end do-while
}//end start
