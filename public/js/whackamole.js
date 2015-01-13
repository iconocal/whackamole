// Returns a random integer between 0 (included) and 9 (excluded)
function getRandomInt() {
  return Math.floor(Math.random() * (9 - 0)) + 0;
}


function clickBox() {
	$('.emptyHole').on('click',(function() {
    	$(this).addClass('activeHole');
    }));
    console.log('running');
}

function stopClicking() {
	clearInterval(interval);
	// Remove all existing event listeners from the boxes
	$('.emptyHole').off();

}

// Generate A Random Number
 var random = getRandomInt();

// Define an array of boxes
 var game = $('#gameBox').children();

 // Use the number to pick one random box


 var interval = null;

$('#startButton').click(function(){
	interval = setInterval(clickBox,1000);
});

$('#stopButton').click(stopClicking);





// $('#button').click(function(){
//     $(game[random]).addClass('activeHole');   
//     });

// $('#button').click(function(){
// 	// interval = setInterval(testFunction,1000);
// 	interval = setInterval(clickBox,1000);

//     });






// function testFunction() {
// 	var calvin = 'Calvin is great!';
// 	console.log(calvin);
// }


// Grabs a random emptyHole and adds class activeHole
// $(game[random]).addClass('activeHole');
