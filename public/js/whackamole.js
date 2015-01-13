// Whackamole JS File

$('document').ready(function() {
    
    $('#mole').fadeIn();
    $('#mole').click(function() {
    $('#mole').fadeOut();
		});

    $('.emptyHole').click(function() {
    	$(this).addClass('activeHole');
    	console.log(this);


            });




});

