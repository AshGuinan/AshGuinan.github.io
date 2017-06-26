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
