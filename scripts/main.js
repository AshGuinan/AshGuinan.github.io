(function($) {

	var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
	var data = {
		q : "Galway",
		units : "metric",
		appId : "a00d122c50b2ace5b1a122771eec968a"
	};
	var response= function showWeather(weatherReport) {
		var res = [];

		for(var x = 0; x <= weatherReport.weather.length-1; x++){
			res.push(x);
			// weatherReport.weather[0].main
			switch (weatherReport.weather[0].main) {
				case 'Thunderstorm':
				console.log('Storm!');
				// dark sky + dark clouds
				//Flashing animation
				$(".cloud").addClass("dark");
				$(".sky").addClass("darkSky");
				$(".sun").addClass("hidden");
				break;
				case 'Drizzle':
				console.log('Drizzle!');
				// blue sky & dark clouds
				$(".sky").addClass("darkSky");
				// $(".sky").removeClass("sky");
				break;
				case 'Rain':
				console.log('Rain!');
				//dark clouds & sky
				$(".cloud").addClass("dark");
				$(".sun").addClass("hidden");
				$(".sky").addClass("darkSky");
				// $(".sky").removeClass("sky");
				break;
				case 'Snow':
				console.log('Snow!');
				$(".cloud").addClass("dark");
				$(".sky").addClass("darkSky");
				// $(".sky").removeClass("sky");
				break;
				case 'Atmosphere':
				console.log('Some real atmosphere!');
				break;
				case 'Clear':
				console.log('Clear!');
				// no clouds, blue sky
				$(".cloud").removeClass("cloud");
				break;
				case 'Clouds':
				console.log('Some clouds!');
				//clear sky, white clouds
				$(".sun").addClass("hidden");
				break;
				case 'Extreme':
				console.log('Blown Away!');
				//dark sky, dark clouds
				$(".cloud").addClass("dark");
				break;
				case 'Additional':
				console.log('Bonus!');
				break;
				default: 
				console.log('Default option');
				break;

			}
		}

		if(weatherReport.weather.id == '801' || weatherReport.weather.id == '800' || weatherReport.weather[0].main == 'Additional'){
			$('#temperature').text("Looks like we're having a" + weatherReport.weather[0].description + " in " + data.q + " at the moment!");
		} else {	
			$('#temperature').text("Looks like we're having " + weatherReport.weather[0].description + " in " + data.q + " at the moment!");
		}
	}


	$(document).ready(function () {
		$.getJSON(weatherAPI, data, response);
		$.preloadImages = function() {
			for (var i = 0; i < arguments.length; i++) {
				$("<img />").attr("src", arguments[i]);
			}
		}

		$.preloadImages("images/jez-timms-83901.jpg","images/catsanddogs_Hiura_Flour.png", "images/william-iven-19844.jpg");

		// inView.offset(300);
		// inView('.projects').on('enter', function(element){
		// 	// console.log('in view', element)
		// 	// $(element).removeClass('invisible');
		//    	//$(element).addClass('animated bounceInDown');
		//    	$(element).hide().fadeIn(1000);
		//    	$('.projects').fadeIn(1500).removeClass('hidden');
	 //  }).on('exit', function(element){
		// // console.log('exit', element)
		// 	setTimeout(function(){ 
		// 	}, 2000);
		// });
	
		var $el, $ps, $up, totalHeight;

		$(".skills .button").click(function() {
		      

		  $el = $(this);
		  $p  = $el.parent();
		  $up = $p.parent();
		  $ps = $up.find("p:not('.continue')");
		  
		  totalHeight = $up[0].scrollHeight
		  $up.css({
	      // Set height to prevent instant jumpdown when max height is removed
	      "height": $up.height(),
	      "max-height": 9999
	    }).animate({
	      "height": totalHeight
	    });
		  
		  // fade out read-more
		  $p.fadeOut();
		  
		  // prevent jump-down
		  return false;
		    
		});
	});
})(jQuery);

