(function($) {

	var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
	var data = {
		q : "Galway",
		units : "metric",
		appId : "a00d122c50b2ace5b1a122771eec968a"
	};
	var response= function showWeather(weatherReport) {
		var res = [];

		for(var x = 0; x <= weatherReport.weather.length-1; x++){
			res.push(x);
			switch (weatherReport.weather[0].main) {
				case 'Thunderstorm':
				console.log('Storm!');
				break;
				case 'Drizzle':
				console.log('Drizzle!');
				break;
				case 'Rain':
				console.log('Rain!');
				break;
				case 'Snow':
				console.log('Snow!');
				break;
				case 'Atmosphere':
				console.log('Some real atmosphere!');
				break;
				case 'Clear':
				console.log('Clear!');
				break;
				case 'Clouds':
				console.log('Some clouds!');
				break;
				case 'Extreme':
				console.log('Blown Away!');
				break;
				case 'Additional':
				console.log('Bonus!');
				break;
				default: 
				console.log('Default option');
				break;

			}
		}

		$('#temperature').text("Looks like we're having " + weatherReport.weather[0].description + " in Galway at the moment!");
	}


	$(document).ready(function () {
		$.getJSON(weatherAPI, data, response);
		$.preloadImages = function() {
			for (var i = 0; i < arguments.length; i++) {
				$("<img />").attr("src", arguments[i]);
			}
		}

		$.preloadImages("images/jez-timms-83901.jpg","images/catsanddogs_Hiura_Flour.png", "images/william-iven-19844.jpg");

		
		console.log('ready');
		inView.offset(300);
		inView('.projects').on('enter', function(element){
			// console.log('in view', element)
			$(element).removeClass('invisible');
		   	//$(element).addClass('animated bounceInDown');
		   	$(element).hide().fadeIn(1000);
		   	$('.hidden').fadeIn(1500).removeClass('hidden');

	   })
		.on('exit', function(element){
		// console.log('exit', element)
			setTimeout(function(){ 
		}, 2000);
	});
		
	});
})(jQuery);

