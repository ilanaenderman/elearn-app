//Memory NL Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')


// FOOD
router.get('/memory-food-nl', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'food',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memorydutch', {user: user, score: score})
	})
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
		if(id.score == null) {
			id.update({
				finished: true,
				score: points * 10
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
router.get('/memory-animal-nl', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'animals',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memorydutch2', {user: user, score: score})
	})
})

router.post('/memory-animal-nl', (request, response) => {
	let seconds = request.body.seconds
	let tries = request.body.tries
	let points = Number(tries) + (Number(seconds)/10)
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'animals',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id.score == null) {
			id.update({
				finished: true,
				score: points * 10
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
router.get('/memory-family-nl', (request, response) => {
	let user = request.session.user
	db.game.findOne({
		where: {
			language: 'NL',
			theme: 'family',
			userId: request.session.user.id
		},
		attributes: ['score']
	}).then(score => {
		response.render('memorydutch3', {user: user, score: score})
	})
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
		if(id.score == null) {
			id.update({
				finished: true,
				score: points * 10
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