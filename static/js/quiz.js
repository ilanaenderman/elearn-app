$(function () {
	$('#slickQuiz').slickQuiz();
});

$(document).ready(function(){
	$("#backBtn").click(function() {
		var score = {
			input: $("#score").html()
		}
		$.post('/quiz-food-NL', score, function(response) {
			var redirect = function(url, method) {
              $('<form>', {
                 method: method,
                 action: url
              }).submit();
            };
            redirect('http://localhost:8000/profile', 'get')
		})
	})
	$("#againBtn").click(function() {
		var score = {
			input: $("#score").html()
		}
		$.post('/quiz-food-NL', score, function(response) {
			var redirect = function(url, method) {
              $('<form>', {
                 method: method,
                 action: url
              }).submit();
            };
            redirect('http://localhost:8000/quiz', 'get')
		})
	})
})