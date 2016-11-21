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
const db = new sequelize('postgres://floriandalhuijsen@localhost/elearn')
//const db = new sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/elearn')

//define modes
let User = db.define('user', {
	fullName: sequelize.STRING,
	userName: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

//define relations

//route login page
app.get('/', (request, response) => {
	response.render('login', {message: request.query.message})
})

app.post('/', (request, response) => {
	let fullName = request.body.fullName
	let userName = request.body.userName
	let email 	 = request.body.email
	let password = request.body.password
	let pwConfirm= request.body.conPassword
	let firstChar= fullName.substr(0,1)
	let fCharUser= userName.substr(0,1)

	if( fullName.length === 0) {
		response.redirect('/register?message=' + encodeURIComponent("Please fill out your full name."))
		return
	}
	if( userName.length === 0) {
		response.redirect('/register?message=' + encodeURIComponent("Please fill out your user name."))
		return
	}
	if( !firstChar.match(/[a-zA-Z ]/)) {
		response.redirect('/register?message=' + encodeURIComponent("First letter must be alphabetic."))
		return
	}
	if( !fCharUser.match(/[a-zA-Z ]/)) {
		response.redirect('/register?message=' + encodeURIComponent("First letter must be alphabetic."))
		return
	}
	if( email.length === 0) {
		response.redirect('/register?message=' + encodeURIComponent("Please fill out your email address."))
		return
	}
	if( !email.match(/@/)){
		response.redirect('/register?message=' + encodeURIComponent("Please fill in a valid email address."))
		return
	}
	if( password.length < 8 ){
		response.redirect('/register?message=' + encodeURIComponent("Password is too short."))
		return
	}
	if( pwConfirm !==  password) {
		response.redirect('/register?message=' + encodeURIComponent("Not the same password."))
		return
	}

	User.findOne({
		where: {
			$or: [{
				userName: userName
			},{
				email: email 
			}]
		}
	}).then (user => {
		bcrypt.hash(password, null, null, (err, hash) => {
			if(user == null) {
				User.create({
					fullName: fullName,
					userName: userName,
					email: email,
					password: hash
				})
				response.redirect('/?message=' + encodeURIComponent("Succesfully registered."))
			} else {
				response.redirect('/register?message=' + encodeURIComponent("User name or email already in use."))
			}
		})
	})
})

// Sync
//Create test User
db.sync({force: true}).then( database => {
	bcrypt.hash('password1', null, null, (err, hash) => {
		User.create({
			fullName: "Ilana Enderman",
			userName: "ienderman",
			email: "ilana@hotmail.com",
			password: hash
		})
	})
})


//listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})