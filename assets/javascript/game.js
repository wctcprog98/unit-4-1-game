

$(document).ready(function () {
    //variables
    var wins = 0;
    var losses = 0;
    var score = 0;

    //create random function
 
    //random values for crystals 
    var crystalValue1 = Math.floor((Math.random() *12) + 1);
    var crystalValue2 = Math.floor((Math.random() * 12) + 1);
    var crystalValue3 = Math.floor((Math.random() * 12) + 1);
    var crystalValue4 = Math.floor((Math.random() * 12) + 1);
    var random = Math.floor((Math.random() * 12) + 1);

    $("#randomNum").text(random);
    
    console.log(random);
    console.log(crystalValue1);
    console.log(crystalValue2);
    console.log(crystalValue3);
    console.log(crystalValue4);


    $(".blue-button").click(function() {
        score += crystalValue1;
        $("#totalScore").text(score);
        winLose();
        //update the display of score on the page
    });

    $(".yellow-button").click(function() {
       score += crystalValue2;
        $("#totalScore").text(score);
        winLose();
        //update the display of score on the page
    });

    $(".gem-button").click(function() {
        score += crystalValue3;
        $("#totalScore").text(score);
        winLose();
        //update the display of score on the page
    });

    $(".ruby-button").click(function() {
        score += crystalValue4;
        $("#totalScore").text(score);
        winLose();
        //update the display of score on the page
    });

    function winLose() {

        if (score == random) {
            wins += 1;
            $(".wins").text(wins);
            alert("Winner!");
            startgame();

        }
        else if (score > random) {
            losses += 1;
            $(".losses").text(losses);
            alert("You lose your score was " + score); 
            startgame();
        }
    }

    function startgame() {
        //reset html
        wins = 0;
        losses = 0;
        score = 0
        crystalValue1 = Math.floor((Math.random() * 12) + 1);
        crystalValue2 = Math.floor((Math.random() * 12) + 1);
        crystalValue3 = Math.floor((Math.random() * 12) + 1);
        crystalValue4 = Math.floor((Math.random() * 12) + 1);
        random = Math.floor((Math.random() * 12) + 1);
        var counter = 0; 
        $(".wins").text(counter);
        $(".losses").text(counter);
        $("#totalScore").text(counter);
        $("#randomNum").text(random);

        //generate new random numbers
    
    }
});
















































































