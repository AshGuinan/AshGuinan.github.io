$(document).ready(function(){
	console.log('ready');
	inView.offset(300);
	inView('.projects').on('enter', function(element){
		// console.log('in view', element)
		$(element).removeClass('invisible');
	   	$(element).addClass('animated bounceInDown');
	   
	})
	.on('exit', function(element){
		// console.log('exit', element)
		setTimeout(function(){ 
		}, 2000);
	});
});
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("images/jez-timms-83901.jpg","images/catsanddogs_Hiura_Flour.png", "images/william-iven-19844.jpg");