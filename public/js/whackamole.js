// Define Variables

var random;

var game = $('#gameBox').children();

var whackTime = null;

var score = null;

var timeLeft = 10;

var timerId;


// Define Functions

// Returns a random integer between 0 (included) and 9 (excluded)
function getRandomInt() {
  return Math.floor(Math.random() * (8 - 0)) + 0;
}

// Clear whackTime and remove event handlers
function stopClicking() {
  clearInterval(whackTime);
  $('.emptyHole').off();
}

// sets internal game interval of 1 second
function timer() {
	timerID = setInterval(countdown, 1000);
}

// main game functions
function countdown() {
  if (timeLeft == -1) {
    clearInterval(timerId);
    clearInterval(whackTime);
    $('#startButton').off();
    $(game[random]).off('click',keepScore);
    console.log('Game Over!');
    console.log(timeLeft);
  } 
  else {
    $('#shotClock span').html(timeLeft);
    timeLeft--;
    }
}

// randomly places activeHole and event handler for scorekeeping
function moveBox() {
	random = getRandomInt();
	$(game).removeClass('activeHole');
  $(game[random]).addClass('activeHole');
  $(game[random]).on('click',keepScore);

}

// increments score counter and sends to html
function keepScore() {
	score = score +1;
	$('#myScore span').html(score);
}



// Event Listeners

$('#startButton').on('click', function() {
	timer();
	whackTime = setInterval(moveBox, 1000);
});




