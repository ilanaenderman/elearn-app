//Memory NL Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-nl', (request, response) => {
	let user = request.session.user
	response.render('memorydutch', {user: user})
})

router.post('/memory-food-nl', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'food',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'NL',
				theme: 'food',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(points < id.score) {
				id.update ({
					finished: true,
					score: points * 10
				})
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})

// ANIMALS
router.get('/memory-animal-nl', (request, response) => {
	let user = request.session.user
	response.render('memorydutch2', {user: user})
})

router.post('/memory-animal-nl', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'animal',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'NL',
				theme: 'animal',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(points < id.score) {
				id.update ({
					finished: true,
					score: points * 10
				})
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})


// FAMILY
router.get('/memory-family-nl', (request, response) => {
	let user = request.session.user
	response.render('memorydutch3', {user: user})
})

router.post('/memory-family-nl', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'family',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'NL',
				theme: 'family',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(points < id.score) {
				id.update ({
					finished: true,
					score: points * 10
				})
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})

module.exports = router