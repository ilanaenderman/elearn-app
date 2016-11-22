//trigger create profile modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal2').modal()
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
