$(document).ready(function() {
	// var location = $('#animal-nl').attr("href")
	// $("#animal-nl").removeAttr('href')
	$("#gs-closebut").click(function() {
		$("#gs-closebut").attr('action', document.location.pathname)
		var id = {
			id: $('#gs-closebut').val()
		}
	})



	// 	$("#animal-nl").attr("href", location)
	// 	// $("#food-nl").css({image: url("images/food-btn-color")})
	// })
	
	// $("#family-nl").removeAttr('href')
	//If animal-nl = finished
	//$("#family-nl").attr("href", location)
})