//Profile Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')

router.get('/profile', (request, response) => {
	let user = request.session.user
	db.user.findOne({
		where: {
			id: user.id
		},
		include: [{
			model: db.game,
			where: {
				finished: true
			},
			attributes: ['id', 'language', 'theme', 'score']
		}, {
			model: db.quiz,
			where: {
				finished: true
			},
			attributes: ['id', 'language', 'theme', 'score']
		}]
	}).then(id => {
		let gamesresult = []
		let quizresult = []
		let totalresult = []
		for(let i = 0; i < id.games.length; i++){
			gamesresult.push({
					id: id.games[i].id, 
					language: id.games[i].language,
					theme: id.games[i].theme,
					score: id.games[i].score
			})
		}
		for(let j = 0; j < id.quizzes.length; j++) {
			quizresult.push({
					id: id.quizzes[j].id,
					language: id.quizzes[j].language,
					theme: id.quizzes[j].theme,
					score: id.quizzes[j].score
			})
		}
		totalresult.push({
			memory: gamesresult
			},{
			quiz: quizresult
			})
		return totalresult
	}).then(id => {
		response.render('profile', {id: id, user: user})
	})
})

module.exports = router