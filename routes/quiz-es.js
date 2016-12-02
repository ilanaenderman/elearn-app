//Quiz ES routes

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')

//Food ES Quiz
router.get('/quiz-food-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-food-es', (request, response) => {
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
			language: 'ES',
			theme: 'food',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'ES',
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
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})

//Animal ES Quiz
router.get('/quiz-animal-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-animal-es', (request, response) => {
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
			language: 'ES',
			theme: 'animal',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'ES',
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
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})

//Family ES Quiz
router.get('/quiz-family-es', (request, response) => {
	response.render('demoquiz')
})

router.post('/quiz-family-es', (request, response) => {
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
			language: 'ES',
			theme: 'family',
			userId: request.session.user.id
		}
	}).then(id => {
		if(id == null) {
			db.quiz.create({
				language: 'ES',
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
				response.send('Done')
			} else {
				response.send('Done')
			}
		}
	})
})

module.exports = router