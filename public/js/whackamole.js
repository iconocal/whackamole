// Define Variables

// Generate A Random Number
 var random = getRandomInt();

// Define an array of boxes
 var game = $('#gameBox').children();

 var whackTime = null;


// Define Functions
// Returns a random integer between 0 (included) and 9 (excluded)
function getRandomInt() {
  return Math.floor(Math.random() * (9 - 0)) + 0;
}

function stopClicking() {
	console.log(whackTime);
	clearInterval(whackTime);
	$('.emptyHole').off();
	// console.log('Calvin Rocks!');
}

function moveBox() {
	var trandom = getRandomInt();
	$(game).removeClass('activeHole');
    $(game[trandom]).addClass('activeHole');

}

// Event Listeners
$('#startButton').click(function(){
	whackTime = setInterval(moveBox, 1000);
});

$('#stopButton').click(stopClicking);










// setInterval(function(){
// 	var trandom = getRandomInt();
// 	$(game).removeClass('activeHole');
//     $(game[trandom]).addClass('activeHole');
// }, 1000);
