//trigger modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal()
  })

//Keep modal open after submit

$(document).ready(function(){
	var url = window.location.href
	if(url.indexOf('?message=') != -1 || url.indexOf('/?message=') != -1) {
		console.log(url)
		$('.modal').modal('open')
	}
})

