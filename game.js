



//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColours = ["red", "blue", "green", "yellow"];


////5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false ;


//2. Create a new variable called level and start at level 0.
var level = 0 ;


//4.1


$(document).keypress(function(){
if (!started){

$("#level-title").text("Level" + level);
nextSequence();
started = true;

}
});






$(".btn").click(function() {
//4.2
var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour); 

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);

} );







function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("succues");
    
      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
            nextSequence();
         },1000);
    }
    
    } else  {
      playSound("wrong")
      console.log("wrong");
      
      $("body").addClass("game-over");
      setTimeout(function(){
     
        $("body").removeClass("game-over"); 
      },200);

      $("h1").text("press any key for restart the game");

      startOver ();


    }

}






function nextSequence() {
     //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
 
     userClickedPattern =[];

    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

//start here diffrent steps step3 page

// 3.1. Use jQuery to select the button with the same id as the
//3.2.Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

}







function playSound(name) {
//3.3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

//rememeber always dont put any extra space between audio path 
var audio = new Audio( "sounds/"+ name +".mp3")
audio.play();
}






//for animation 
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");

setTimeout (function() {
$("#" +currentColor).removeClass("pressed");

},100);


} 


function startOver(){
        
 level = 0 ;
 gamePattern = [];
 started = false ;  

        

      }