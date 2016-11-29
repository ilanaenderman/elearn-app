//Memory NL Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-nl', (request, response) => {
	var user = request.session.user
	response.render('memorydutch', {user: user})
})

router.post('/memory-food-nl', (request, response) => {
	db.game.findOne ({
		where: {
			id: 1
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
router.get('/memory-animal-nl', (request, response) => {
	var user = request.session.user
	response.render('memorydutch2', {user: user})
})

router.post('/memory-animal-nl', (request, response) => {
	db.game.findOne ({
		where: {
			id: 2
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
router.get('/memory-family-nl', (request, response) => {
	var user = request.session.user
	response.render('memorydutch3', {user: user})
})

router.post('/memory-family-nl', (request, response) => {
	db.game.findOne ({
		where: {
			id: 3
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