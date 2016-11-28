//Memory FR Routes

const express 	= require( 'express')
const router	= express.Router( )


// FOOD
router.get('/memory-food-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench', {user: user})
})

router.post('/memory-food-fr', (request, response) => {
	Game.findOne ({
		where: {
			id: 7
		}
	}).then(id => {
		id.update ({
			finished: true
		}).then(id => {
			response.redirect('/profile')
		})
	})
})


// ANIMALS
router.get('/memory-animal-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench2', {user: user})
})

router.post('/memory-animal-fr', (request, response) => {
	Game.findOne ({
		where: {
			id: 8
		}
	}).then(id => {
		id.update ({
			finished: true
		}).then(id => {
			response.redirect('/profile')
		})
	})
})


// FAMILY
router.get('/memory-family-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench3', {user: user})
})

router.post('/memory-family-fr', (request, response) => {
	Game.findOne ({
		where: {
			id: 9
		}
	}).then(id => {
		id.update ({
			finished: true
		}).then(id => {
			response.redirect('/profile')
		})
	})
})

module.exports = router