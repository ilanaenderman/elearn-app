//Logout Routes

const express 	= require( 'express')
const router	= express.Router( )


router.get('/logout',  (request, response)  =>{
	request.session.destroy( (error) => {
		if(error) {
			throw error;
		}
		response.redirect('/');
	})
});

module.exports = router