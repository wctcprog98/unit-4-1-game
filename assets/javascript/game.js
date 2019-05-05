//create variables

var totalScore = 0;
var wins = 0; 
var loses = 0;
var randomNum = parseInt(Math.floor((Math.random() * 10) + 1)); 
// var randomNum = parseInt(Math.floor((Math.random() * 10) + 1));
$(".losses").text("0");
$(".wins").text("0");

    $(this).click(function () {
       
        totalScore += totalScore; 
        $("#totalScore").text(totalScore);
        randomNum = parseInt(Math.floor((Math.random() * 10) + 1)); 
            $("#randomNum").text(randomNum);
   
    if (totalScore === randomNum) {
        var wins = 1;
        $(".wins").text(wins);
        alert("You Win");
        $(".win").text("0");
       
    }
    else if (totalScore > randomNum) {
        var losses = 1;
        $(".losses").text(losses);
        alert("You lose");
        $(".losses").text("0");
      
    }
    });


$("#totalScore").text("0");
randomNum = parseInt(Math.floor((Math.random() * 10) + 1)); 
    $("#randomNum").text("0");
// function endGame(){    
//     if ($("losses").val() == 1) {
//         alert("You lose");
//         $(".losses").text("0");
//     }
//     else if ($("wins").val() == 1) {
//         alert("You Win");
//         $(".win").text("0");
//     }
// };;



// endGame(); 










































































































