//generates random number between min and max(inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate a random number 
var imageNumber = getRandomInt(1,27);

//adds new image to the body
$(function(){
	$('body').css('background-image', 'url(img/'+imageNumber+'.jpg)');
});

//quotes

quotes=["It does not matter how slowly you go as long as you do not stop. - Confucius","Don't watch the clock; do what it does. Keep going. - Sam Levenson", "Open your eyes, look within. Are you satisfied with the life you're living? - Bob Marley", "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain"];

var quoteNumber = getRandomInt(0,quotes.length-1);

// add quote 
$(function(){
	$('.quote').html(quotes[quoteNumber]);
});

//append option of input if clicked on icon
$('#goal-pad').click(function(){
	$('#writepad').html("<input type='text' placeholder='please put a measurable goal'>");
});

