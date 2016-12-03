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
		include: [db.game, db.quiz]
	}).then(id => {
		let gamesresult = []
		let quizresult = []
		let totalresult = []
		for(let i = 0; i < id.games.length; i++){
			if(id.games[i].finished == true)
			gamesresult.push({
					id: id.games[i].id, 
					language: id.games[i].language,
					theme: id.games[i].theme,
					score: id.games[i].score
			})
		}
		for(let j = 0; j < id.quizzes.length; j++) {
			if(id.quizzes[j].finished == true)
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
		response.render('profile', {id: totalresult, user: user})
	})
})

module.exports = router