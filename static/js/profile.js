$(document).ready(function() {
	$("#gs-closebut").click(function() {
		$("#gs-closebut").attr('action', location.pathname)
		// if(location.pathname.substring(1, location.pathname.length) == 'memory-food-nl') {
		
			// $("#food-nl").css({image: url("images/food-btn-color")})
		// } else if (location.pathname.substring(1, location.pathname.length) == 'memory-animal-nl') {
		// 	$("#family-nl").attr("href", "/memory-family-nl")
			// $("#animal-nl").attr({image: url("images/animal-btn-color")})
		// }
	})
	


	// 	$("#animal-nl").attr("href", location)
	// 	// $("#food-nl").css({image: url("images/food-btn-color")})
	// })
	
	// $("#family-nl").removeAttr('href')
	//If animal-nl = finished
	//$("#family-nl").attr("href", location)
})