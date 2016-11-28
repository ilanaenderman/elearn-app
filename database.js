// Container object

const db = {
	mod: {}
}

// Setup SQL
const sequelize = require( 'sequelize' )

db.sequelize = Sequelize
db.conn = new Sequelize('elearn', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})


//>>>>>>>>>>> MODELS

db.user = db.con.define('user', {
	fullName: sequelize.STRING,
	userName: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

db.game = db.con.define('game', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN
})


// Define relationships between tables


//sync database
db.conn.sync({force: true}).then( database => {
	bcrypt.hash('password1', null, null, (err, hash) => {
		User.create({
			fullName: "Ilana Enderman",
			userName: "ienderman",
			email: "ilana@hotmail.com",
			password: hash
		})
		Game.create({
			language: 'NL',
			theme: "food",
			finished: false
		})
		Game.create({
			language: 'NL',
			theme: "animal",
			finished: false
		})
		Game.create({
			language: 'NL',
			theme: "family",
			finished: false
		})
		Game.create({
			language: 'ES',
			theme: "food",
			finished: false
		})
		Game.create({
			language: 'ES',
			theme: "animal",
			finished: false
		})
		Game.create({
			language: 'ES',
			theme: "family",
			finished: false
		})
		Game.create({
			language: 'FR',
			theme: "food",
			finished: false
		})
		Game.create({
			language: 'FR',
			theme: "animal",
			finished: false
		})
		Game.create({
			language: 'FR',
			theme: "family",
			finished: false
		})
	})
})

module.exports = db

