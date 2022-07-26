// $(document).ready();

let colorsToPress = [];
let userPressed = [];
var colors = new Array("green", "red", "yellow", "blue");
var songs = new Array("sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3")



let start = false;
let highScore = 0;

// $(".high-score").text("High Score: " + level);
gameStart();

function gameStart() {
    $(document).keypress(function(){
        if (!start) {

            gameOn();
            start = true
            $(".top-head").text("Level: 1");
        }

    });
}

function gameOn() {

    userPressed = [];
    let randColour = Math.floor(colors.length * Math.random());
    $("#" + colors[randColour]).fadeOut();
    $("#" + colors[randColour]).fadeIn();

    colorsToPress.push(colors[randColour]);

}



$(".btn").click(function () {

    var a = this.id;
    playSound(a);

    $("#" + this.id).addClass("pressed");
    setTimeout(function () {
        $("#" + "red").removeClass("pressed");
    }, 100);
    setTimeout(function () {
        $("#" + "green").removeClass("pressed");
    }, 100);
    setTimeout(function () {
        $("#" + "yellow").removeClass("pressed");
    }, 100);
    setTimeout(function () {
        $("#" + "blue").removeClass("pressed");
    }, 100);

    if (start) {
        userPressed.push(this.id);
        checkAnswer(userPressed.length - 1);
    }
})

function playSound(a){

    var audio = new Audio("sounds/" + a + ".mp3")
    audio.play();

}

function checkAnswer(level) {
    if (colorsToPress[level] == userPressed[level]) {
        if (colorsToPress.length == userPressed.length) {
            $(".top-head").text("Level: " + (level + 1));
            // $(".").text("Level: " + (level+1));
            setTimeout(function () {
                gameOn();
            }, 1000);
        }
    }
    else {

        $(".high-score").css("display", "block")

        if (colorsToPress.length >= highScore) {
            highScore = colorsToPress.length + 1;
            $(".high-score").text("High Score: " + (colorsToPress.length - 1));
        }
        $(".top-head").text("Opps! Press Any Key To Restart")
        // gameStart();
        start = false;
        colorsToPress = [];
        userPressed = [];
        $(document).keypress(function () {
            if (!start) {

                gameOn();
                start = true
                $(".top-head").text("Level: 1");
            }

        })

    }

}






