var buttonColours =["red", "blue", "green", "yellow"];
var gamePattern;
var userClickedPattern= 0;
var level=0;
var randomChosenColour;

function nextSequence(){
    var randomnumber =Math.floor(Math.random()*4);
    return randomnumber;
}


$(document).ready(function(){
    document.addEventListener("keypress",function(){
        //nextSequence();
        level=0;
        randomChosenColour = buttonColours[nextSequence()];
        gamePattern=randomChosenColour;
        $(".head").text("Level "+level);
        $("#"+gamePattern).fadeOut(100).fadeIn(100);
       });
 });



$("button").click  ((event)=>{
    var userChosenColour= event.target.id;
    $("#"+userChosenColour).fadeOut(100).fadeIn(100);
    $("body").css("background-color",userChosenColour);
    setTimeout(() => {
        $("body").css("background-color","rgb(56, 14, 90)");
    }, 100);
    randomChosenColour = buttonColours[nextSequence()];
    if(randomChosenColour==userChosenColour){
        userClickedPattern+=1;
        level+=1;
        $(".head").text("Level "+level);
    }
    else{
        alert("Score "+userClickedPattern);
        $(".head").text("Game Over, Press Any Key To Restart");
        
        if($("button").click (()=>{
            alert("Press Any Key");
        })){ }

        else{
            userClickedPattern=0; 
        }
    
        
    }
})
function starter(){
   
       
}