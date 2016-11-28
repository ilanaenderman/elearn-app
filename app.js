//set up libraries
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

app.use( express.static('static'))
app.use( bodyParser.urlencoded({extended: true}))
app.use(session({
	secret: 'security is important',
	resave: true,
	saveUninitialized: false
}))

//connect to database
 const db = new sequelize('postgres://floriandalhuijsen@localhost/elearn')
//const db = new sequelize('postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/elearn')

//define modes
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

//define relations

//route landing page
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
		response.redirect('/?message=' + encodeURIComponent("Please fill out your full name."))
		return
	}
	if( userName.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("Please fill out your user name."))
		return
	}
	if( !firstChar.match(/[a-zA-Z ]/)) {
		response.redirect('/?message=' + encodeURIComponent("First letter must be alphabetic."))
		return
	}
	if( !fCharUser.match(/[a-zA-Z ]/)) {
		response.redirect('/?message=' + encodeURIComponent("First letter must be alphabetic."))
		return
	}
	if( email.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("Please fill out your email address."))
		return
	}
	if( !email.match(/@/)){
		response.redirect('/?message=' + encodeURIComponent("Please fill in a valid email address."))
		return
	}
	if( password.length < 8 ){
		response.redirect('/?message=' + encodeURIComponent("Password is too short."))
		return
	}
	if( pwConfirm !==  password) {
		response.redirect('/?message=' + encodeURIComponent("Not the same password."))
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
				response.redirect('/?message=' + encodeURIComponent("User name or email already in use."))
			}
		})
	})
})

// //Ajax Login
// app.post('/loginProfile', (request, response) => {
// 	if(request.body.email.length === 0) {
// 		response.redirect('/?message=' + encodeURIComponent("Please fill out your email."))
// 		return;
// 	}

// 	if(request.body.password.length === 0) {
// 		response.redirect('/?message=' + encodeURIComponent("Please fill out your password."))
// 		return;
// 	}

// 	User.findOne({
// 		where: {
// 			email: request.body.email
// 		}
// 	}).then( (user) => {
// 		var hash = user.password 
// 		bcrypt.compare(request.body.password, hash, (err, res) => {
// 			if (user !== null && res == true) {
// 				request.session.user = user
// 				response.redirect('/profile')
// 			} 
// 			else {
// 				var message = "Invalid email or password"
// 				response.send({message: message})
// 			}
// 		})
// 	})
// })







//Route Profile page
app.get('/profile', (request, response) => {
	var user = request.session.user
	Game.findAll ({
		where: {
			finished: true
		},
		attributes: ['id', 'language']
	}).then(id => {
		var result = []
		for(var i = 0; i < id.length; i++){
			result.push({id: id[i].id, language: id[i].language})
		}
		return result
	}).then(id => {
		console.log(id)
		response.render('profile', {id: id, user: user})
	})
})

//Route Memory Games NL
app.get('/memory-food-nl', (request, response) => {
	var user = request.session.user
	Game.findOne ({
		where: {
			id: 1
		},
		attributes: ['id']
	}).then(id => {
		response.render('memorydutch', {id: id, user: user})
	})
})

app.post('/memory-food-nl', (request, response) => {
	console.log(request.body)
	Game.findOne ({
		where: {
			id: 1
		}
	}).then(id => {
		id.update ({
			finished: true
		}).then(id => {
			response.redirect('/profile')
		})
	})
})

app.get('/memory-animal-nl', (request, response) => {
	var user = request.session.user
	Game.findOne ({
		where: {
			id: 2
		},
		attributes: ['id']
	}).then(id => {
		response.render('memorydutch2', {id: id, user: user})
	})
})

app.post('/memory-animal-nl', (request, response) => {
	console.log("Reacting!")
	Game.findOne ({
		where: {
			id: 2
		}
	}).then(id => {
		id.update ({
			finished: true
		}).then(id => {
			response.redirect('/profile')
		})
	})
})

app.get('/memory-family-nl', (request, response) => {
	var user = request.session.user
	response.render('memorydutch3', {user: user})
})

//Route Memory Games ES
app.get('/memory-food-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain', {user: user})
})

app.get('/memory-animal-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain2', {user: user})
})

app.get('/memory-family-es', (request, response) => {
	var user = request.session.user
	response.render('memoryspain3', {user: user})
})

//Route Memory Games FR
app.get('/memory-food-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench', {user: user})
})

app.get('/memory-animal-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench2', {user: user})
})

app.get('/memory-family-fr', (request, response) => {
	var user = request.session.user
	response.render('memoryfrench3', {user: user})
})

// Log out 
app.get('/logout',  (request, response)  =>{
	request.session.destroy( (error) => {
		if(error) {
			throw error;
		}
		response.redirect('/');
	})
});


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


//listen port 8000
app.listen(8000, () => {
	console.log('Server is running')
})