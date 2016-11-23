//trigger create profile modal and Ajax
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal2').modal(function(){
    	
    }
})

$(document).ready(function() {
    	$('#submitProfile').click(function() {
    		var profile = {
    			fullName: $("#fullName").val(),
    			userName: $("#userName").val(),
    			email: 	$("#email").val(),
    			password: $("#password").val(),
    			conPassword: $("#conPassword").val()
    		}
    		$.post("/createdProfile", profile, function(response) {
    			$('#error-message').append(response.message) 
    	})
    })
})

//Keep create profile modal open after submit
$(document).ready(function(){
	var url = window.location.href
	if(url.indexOf('?message=') != -1 || url.indexOf('/?message=') != -1) {
		console.log(url)
		$('#modal2').modal('open')
	}
})

//trigger login modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal()
  })

