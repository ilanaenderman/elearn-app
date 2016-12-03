//Login Route

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')
const bcrypt	= require('bcrypt-node')


// GET
router.get('/', (request, response) => {
	response.render('login', {message: request.query.message})
})

// POST
router.post('/', (request, response) => {
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
	if( userName.length <= 3 || userName.length >= 13) {
		response.redirect('/?message=' + encodeURIComponent("Please fill out a username that is between 3 and 13 characters."))
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
		response.redirect('/?message=' + encodeURIComponent("Password must be at least 8 characters."))
		return
	}
	if( pwConfirm !==  password) {
		response.redirect('/?message=' + encodeURIComponent("Not the same password."))
		return
	}

	db.user.findOne({
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
				db.user.create({
					fullName: fullName,
					userName: userName,
					email: email,
					password: hash
				}).then(user => {
					db.game.create({
						language: 'NL',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'ES',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'FR',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'NL',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'ES',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'FR',
						theme: 'food',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'NL',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'ES',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'FR',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'NL',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'ES',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'FR',
						theme: 'animals',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'NL',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'ES',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					db.game.create({
						language: 'FR',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'NL',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'ES',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					db.quiz.create({
						language: 'FR',
						theme: 'family',
						finished: false,
						score: null,
						userId: user.id
					})
					response.redirect('/?message=' + encodeURIComponent("Succesfully registered."))	
				})
			} else {
				response.redirect('/?message=' + encodeURIComponent("User name or email already in use."))
			}
		})
	})
})

//AJAX LOGIN
router.post('/loginProfile', (request, response) => {
	if(request.body.email.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("You need to fill out your email."))
		return
	}

	if(request.body.password.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("You need to fill out your password."))
		return
	}

	db.user.findOne({
		where: {
			email: request.body.email
		}
	}).then( (user) => {
		if(user == null) {
			response.redirect('/?message=' + encodeURIComponent("You need to fill out a valid email."))
			return
		}
		else{
			let hash = user.password 
			bcrypt.compare(request.body.password, hash, (err, res) => {
				if (user !== null && res == true) {
					request.session.user = user
					response.redirect('/profile')
				} 
				else {
					response.redirect('/?message=' + encodeURIComponent("Your password or email is invalid."))
				}
			})
		}
	})
})

module.exports = router
