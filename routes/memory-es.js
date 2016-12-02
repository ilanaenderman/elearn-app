//Memory ES Routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-es', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'food',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryspain', {user: user, score: score})
	})
})

router.post('/memory-food-es', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'food',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'ES',
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
router.get('/memory-animal-es', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'animals',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryspain2', {user: user, score: score})
	})
})

router.post('/memory-animal-es', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'animals',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'ES',
				theme: 'animals',
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
router.get('/memory-family-es', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'family',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryspain3', {user: user, score: score})
	})
})

router.post('/memory-family-es', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'ES',
			theme: 'family',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'ES',
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