//Profile Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require('../app')

router.get('/profile', (request, response) => {
	var user = request.session.user
	Game.findAll ({
		where: {
			finished: true
		},
		attributes: ['id', 'language']
	}).then(id => {
		var result = []
		for(var i = 0; i < id.length; i++){
			result.push({id: id[i].id, language: id[i].language})
		}
		return result
	}).then(id => {
		response.render('profile', {id: id, user: user})
	})
})

module.exports = router