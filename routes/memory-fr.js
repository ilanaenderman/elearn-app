//Memory FR Routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-fr', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'food',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryfrench', {user: user, score: score})
	})
})

router.post('/memory-food-fr', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'food',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'FR',
				theme: 'food',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if((points * 10) < id.score) {
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
router.get('/memory-animal-fr', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'animals',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryfrench2', {user: user, score: score})
	})
})

router.post('/memory-animal-fr', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'animals',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'FR',
				theme: 'animals',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if((points * 10) < id.score) {
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
router.get('/memory-family-fr', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'family',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memoryfrench3', {user: user, score: score})
	})
})

router.post('/memory-family-fr', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'FR',
			theme: 'family',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.game.create({
				language: 'FR',
				theme: 'family',
				finished: true,
				score: points * 10,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if((points * 10) < id.score) {
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