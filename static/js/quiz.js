$(function () {
	$('#slickQuiz').slickQuiz();
});

$(document).ready(function(){
	$("#backBtn").click(function() {
		var score = {
			input: $("#score").html()
		}
		$.post('/quiz-food-NL', score, function(response) {
			response.redirect('/profile')
		})
	})
	$("#againBtn").click(function() {
		var score = {
			input: $("#score").html()
		}
		$.post('/quiz-food-NL', score, function(response) {
			response.redirect('/quiz')
		})
	})
})