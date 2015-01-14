// Define Variables

// Generate A Random Number
 var random;

// // Define an array of boxes
 var game = $('#gameBox').children();

 var whackTime = null;

 var score = null;



// Define Functions

// Returns a random integer between 0 (included) and 9 (excluded)
function getRandomInt() {
  return Math.floor(Math.random() * (8 - 0)) + 0;
}

function stopClicking() {
	clearInterval(whackTime);
	$('.emptyHole').off();
}

var timeLeft = 5;
var timerId;

function timer() {
	timerID = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft == -1) {
    clearInterval(timerId);
    $('#startButton').off();
    console.log('Game Over!');
    console.log(timeLeft);
  } else {
    $('#shotClock span').html(timeLeft);
    timeLeft--;
  }
}

function moveBox() {
	random = getRandomInt();
	$(game).removeClass('activeHole');
    $(game[random]).addClass('activeHole');
    $(game[random]).on('click',keepScore);

}

function keepScore() {
	score = score +1;
	$('#myScore span').html(score);
}










// Event Listeners

$('#startButton').on('click', timer);

// $('#startButton').click(function(){
// 	whackTime = setInterval(moveBox, 1000);
// });

// $('#stopButton').click(stopClicking);

// $('#increment').on('click',shotClock);



