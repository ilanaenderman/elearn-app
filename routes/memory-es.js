//Memory ES Routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain', {user: user})
})

router.post('/memory-food-es', (request, response) => {
	db.game.findOne ({
		where: {
			id: 4
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
router.get('/memory-animal-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain2', {user: user})
})

router.post('/memory-animal-es', (request, response) => {
	db.game.findOne ({
		where: {
			id: 5
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
router.get('/memory-family-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain3', {user: user})
})

router.post('/memory-family-es', (request, response) => {
	db.game.findOne ({
		where: {
			id: 6
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