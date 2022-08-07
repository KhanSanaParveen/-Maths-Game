var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick = function() {
    //if we are playing
    if(playing == true){
         //reload page
        location.reload();
    } 
    else{ //if we are not playing
        
        //change mode to playing
        playing=true;
        
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML=score;
   
     //show countdown box
       show("timeremaining");  
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        //hide gameover box
        hide("gameOver");
    
    //change button to reset
    document.getElementById("startreset").innerHTML="Reset Game";
        
        //start countdown
        startCountdown();
        
           //generate new Q&A
           generateQA();

}
}


//clicking on answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick=function(){
    
      //check if we are playing
    if(playing==true){//yes
        if(this.innerHTML== correctAnswer){
            //correct answer
            
             //increase score
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
             //show correct box hide wrong box
            hide("wrong");
            show("correct");
            
             //show correct box for 1sec
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //genetrate new Q&a
            
            generateQA();
        }else{//wrong ans
             hide("correct");
            show("wrong");
            
             //show wrong box for 1sec
            setTimeout(function(){
                hide("wrong");
            },1000);
            
        }
    }
    
}
}
  //check if we are playing
    //correct?
       //yes
          //increase score
          //show correct box for 1sec
          //generate new Q&A
      //no
        //show try again box for 1sec 

//function

//start counter

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining == 0){//game Over
            stopCountdown();
            
            show("gameOver");
            
            document.getElementById("gameOver").innerHTML="<p>Game Over!</p><p>your score is " + score +"</p>";
            
           hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
},1000);
    
}

//stop counter

function stopCountdown(){
    clearInterval(action);
}

// hide an element

function hide(Id){
    document.getElementById(Id).style.display="none"; 
}
//show  an element

function show(Id){
    document.getElementById(Id).style.display="block";
}
//generate multiple Q & A
function generateQA(){
   var x = 1+ Math.round(9*Maths.random());
   var y = 1+ Math.round(9*Maths.random());
    correctAnswer= x*y;
    document.getElementById("question").innerHTML= x + "x" + y;
    var correctPosition =1+ Math.round(3*Maths.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;//fill one box with the correct ans
    
    //fill other box wrong ans
    var answers = [correctAnswer];
    for(i=1; i<5; i++){
        if( i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Maths.random()))*
                    (1+ Math.round(9*Maths.random()));
           
            }
            while(answers.indexOf(wrongAnswer)>-1)
             document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
         }

    }
    
}