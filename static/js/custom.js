//trigger create profile modal and Ajax
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal()
})

// $(document).ready(function() {
//     $('#submitLogin').click(function() {
// 		var profile = {
// 			email: 	$("#email2").val(),
// 			password: $("#password2").val(),
// 		}

//         if(email.length === 0 ) {
//             $("#error-message2").html("Please fill out email.")
//         }

//         if(password.length === 0 ) {
//             $("#error-message2").html("Please fill out your password")
//         }

//         else{
//             $.post("/loginProfile", profile, function(response) {
//                 $("#error-message2").append(response.message)
//             })

//         }
//     })
// })

// going to try a different way
if (loginUsername.length != 0) {
  console.log('there is a login: ' + loginUsername);
    // make an ajax call
    $.ajax({
    dataType: 'json',
    data: AjaxLoginData,
    type: 'post',
      url:"http://localhost:4200/api/v1/users",
      success: (data, textStatus, jqXHR) ->
          if typeof data.redirect == 'string'
              window.location = data.redirect
      success: refreshStories,
      error: foundError
    });
// ? try above 


//Keep create profile modal open after submit
$(document).ready(function(){
	var url = window.location.href
	if(url.indexOf('?message=') != -1 || url.indexOf('/?message=') != -1) {
		console.log(url)
		$('#modal2').modal('open')
	}
})

