//set up libraries
const sequelize 	= require('sequelize')
const express 		= require('express')
const bodyParser 	= require('body-parser')
const session 		= require('express-session')
const pug			= require('pug')
const pg 			= require('pg')
const bcrypt		= require('bcrypt-node')
const sass 			= require('node-sass')

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

//Route Memory Games NL
app.get('/memory-food-nl', (request, response) => {
	response.render('memorydutch')
})

app.get('/memory-animal-nl', (request, response) => {
	response.render('memorydutch2')
})

app.get('/memory-family-nl', (request, response) => {
	response.render('memorydutch3')
})

//Route Memory Games ES
app.get('/memory-food-es', (request, response) => {
	response.render('memoryspain')
})

app.get('/memory-animal-es', (request, response) => {
	response.render('memoryspain2')
})

app.get('/memory-family-es', (request, response) => {
	response.render('memoryspain3')
})

//Route Memory Games FR
app.get('/memory-food-fr', (request, response) => {
	response.render('memoryfrench')
})

app.get('/memory-animal-fr', (request, response) => {
	response.render('memoryfrench2')
})

app.get('/memory-family-fr', (request, response) => {
	response.render('memoryfrench3')
})

//listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})