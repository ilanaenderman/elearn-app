// DB Object

const db = { }

// Setup SQL
const sequelize = require( 'sequelize' )
const bcrypt 	= require('bcrypt-node')

// db.sequelize = sequelize
db.conn = new sequelize('elearn', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})

//>>>>>>>>>>> MODELS

db.user = db.conn.define('user', {
	fullName: sequelize.STRING,
	userName: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

db.game = db.conn.define('game', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN,
	score: sequelize.INTEGER
})

db.quiz = db.conn.define('quiz', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN,
	score: sequelize.INTEGER
})


// Define relationships between tables
db.user.hasMany(db.game)
db.user.hasMany(db.quiz)
db.game.belongsTo(db.user)
db.quiz.belongsTo(db.user)

// Create test User
db.conn.sync({force: true}).then( database => {
	bcrypt.hash('password1', null, null, (err, hash) => {
		db.user.create({
			fullName: "Ilana Enderman",
			userName: "ienderman",
			email: "ilana@hotmail.com",
			password: hash
		})
		db.game.create({
			language: 'NL',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'ES',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'FR',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'NL',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'ES',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'FR',
			theme: 'food',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'NL',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'ES',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'FR',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'NL',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'ES',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'FR',
			theme: 'animals',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'NL',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'ES',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
		db.game.create({
			language: 'FR',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'NL',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'ES',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
		db.quiz.create({
			language: 'FR',
			theme: 'family',
			finished: false,
			score: null,
			userId: 1
		})
	})
})


module.exports = db

