//trigger create profile modal and Ajax
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal()
})

$(document).ready(function() {
    $('#submitLogin').submit(function(event) {
		event.preventDefault()
		var profile = {
			email: 	$("#email2").val(),
			password: $("#password2").val(),
		}
    	$.post("/loginProfile", profile, function(response) {
        	$("#error-message2").append(response.message)
    	})
	})
})

//Keep create profile modal open after submit
$(document).ready(function(){
	var url = window.location.href
	if(url.indexOf('?message=') != -1 || url.indexOf('/?message=') != -1) {
		console.log(url)
		if(url.substring(31,32) == "Y") {
			$('#modal1').modal('open')
		}
		else if(url.substring(31,32) != "Y") {
			$('#modal2').modal('open')
		}
	}
})

//Profile page navigation hamburger
$(document).ready(function(){
	$(".button-collapse").sideNav()
})
