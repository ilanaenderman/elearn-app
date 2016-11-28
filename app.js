// Set up libraries
const sequelize 	= require('sequelize')
const express 		= require('express')
const bodyParser 	= require('body-parser')
const session 		= require('express-session')
const pug			= require('pug')
const pg 			= require('pg')
const bcrypt		= require('bcrypt-node')
const sass			= require('node-sass')

const app			= express()

app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )

// Routes
let loginRoute 		= require(__dirname + '/routes/login')
let logoutRoute 	= require(__dirname + '/routes/logout')
let profileRoute	= require(__dirname + '/routes/profile')
let memoryNLRoute	= require(__dirname + '/routes/memory-nl')
let memoryESRoute	= require(__dirname + '/routes/memory-es')
let memoryFRRoute	= require(__dirname + '/routes/memory-fr')

app.use( express.static('static'))
app.use( bodyParser.urlencoded({extended: true}))
app.use(session({
	secret: 'security is important',
	resave: true,
	saveUninitialized: false
}))


// Connect to database

// const db = new sequelize('elearn', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
// 	server: 'localhost',
// 	dialect: 'postgres'
// })

const db = new sequelize('elearn', floriandalhuijsen, null, {
	server: 'localhost',
	dialect: 'postgres'
})


// Define modes
let User = db.define('user', {
	fullName: sequelize.STRING,
	userName: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

let Game = db.define('game', {
	language: sequelize.STRING,
	theme: sequelize.STRING,
	finished: sequelize.BOOLEAN
})

//Define relations


// Make DB accessible to router ???
app.use(function(request, response, next){
    request.db = db
    next()
})



// Routes
app.use( loginRoute )
app.use( logoutRoute )
app.use( profileRoute ) 
app.use( memoryNLRoute )
app.use( memoryESRoute )
app.use( memoryFRRoute )


// Sync
// Create test User
db.sync({force: true}).then( database => {
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


// Listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})