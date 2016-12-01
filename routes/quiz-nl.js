//Quiz NL routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')

//Food NL Quiz
router.get('/quiz-food-nl', (request, response) => {
	db.quiz.findOne({
		where: {
			id: 1
		},
		attributes: ['id']
	}).then(id => {
		let quizId = id.id
		response.render('demoquiz', {id: quizId})
	})
})

router.post('/quiz-food-nl', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			language: 'NL',
			theme: 'food',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'NL',
				theme: 'food',
				finished: true,
				score: input,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(input > id.score) {
				id.update({
					score: input
				})
			} else {
				response.send('Done')
			}
		}
	})
})

//Animal NL Quiz
router.get('/quiz-animal-nl', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-animal-nl', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			language: 'NL',
			theme: 'animal',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'NL',
				theme: 'animal',
				finished: true,
				score: input,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(input > id.score) {
				id.update({
					score: input
				})
			} else {
				response.send('Done')
			}
		}
	})
})

//Family NL Quiz
router.get('/quiz-family-nl', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-family-nl', (request, response) => {
	let input = request.body.input
	if (input.substring(0,1) == 0) {
		input = 0
	}
	else if (input.substring(0,1) == 1) {
		input = 20
	}
	else if (input.substring(0,1) == 2) {
		input = 40
	}
	else if (input.substring(0,1) == 3) {
		input = 60
	}
	else if (input.substring(0,1) == 4) {
		input = 80
	}
	else if (input.substring(0,1) == 5) {
		input = 100
	}
	db.quiz.findOne({
		where: {
			language: 'NL',
			theme: 'family',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'NL',
				theme: 'family',
				finished: true,
				score: input,
				userId: request.session.user.id
			})
			response.send('Done')
		} else {
			if(input > id.score) {
				id.update({
					score: input
				})
			} else {
				response.send('Done')
			}
		}
	})
})

module.exports = router