//trigger create profile modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal2').modal(function() {
    	$('#submitProfile').click(function() {
    		var profile = {
    			input: $("#submitProfile").val()
    		}
    		$.get("/createdProfile", profile, function(response) {
    			$('#error-message').html(message) //hier waren we gebleven!!!
    		})
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

//Ajax create profile
$(document).ready( function () {
	$("#provider-json").keyup( () => {
		if( timer() ){

		var letter = { 
			input: $("#provider-json").val()
		}
		$.post("/searchAutocomplete", letter, (response) => {
				$('#result').html("")
				for( var i = 0; i < response.data.length; i++) {
					$("#result").append(response.data[i].firstName + " " + response.data[i].lastName + ": " + response.data[i].email + "<br>")
				}
			})
		}
	} else {console.log("false")}
	})
})