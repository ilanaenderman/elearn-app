//set up libraries
const sequelize 	= require('sequelize')
const express 		= require('express')
const bodyParser 	= require('body-parser')
const session 		= require('express-session')
const pug			= require('pug')
const pg 			= require('pg')
const bcrypt		= require('bcrypt-node')

const app			= express()

app.set( 'view engine', 'pug')
app.set( 'views', __dirname + '/views' )

app.use( express.static('static'))
app.use( bodyParser.urlencoded({extended: true}))
app.use(session({
	secret: 'security is important',
	resave: true,
	saveUninitialized: false
}))

//contect to database
const db = new sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/elearn')

//define modes


//define relations

//route login page
app.get('/', (request, response) => {
	response.render('login')
})

//Route Profile page
app.get('/profile', (request, response) => {
	response.render('profile')
})

//Route Memory Game
app.get('/memory', (request, response) => {
	console.log(request.body)
	if(request.body.name == "food-nl") {
		response.render('memory1')
	} else if(request.body.name == "animal-nl") {
		response.render('memory2')
	} else {
		response.render('memory3')
	}
})


//listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})