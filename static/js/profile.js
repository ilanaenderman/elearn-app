$(document).ready(function() {
	$("#food-nl").click(function() {
		var memory = {
			input: $("#food-nl").val()
		}
		$.get('/food-nl', memory, function(response) {
			response.render('memory1')
		})
	})
})