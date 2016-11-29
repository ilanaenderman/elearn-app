$(document).ready(function() {
	$("#gs-closebut").click(function() {
		$("#memoryForm").attr('action', location.pathname)
		var memoryScore = {
			seconds: $("#gs-colum2").html(),
			clicks: $("#gs-column3").html()
		}
		console.log(memoryScore)
		$.post(location.pathname, memoryScore, function(response) {
			response.redirect('/profile')
		} )
	})
})