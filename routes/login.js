//Login Route

const express 	= require( 'express')
const router	= express.Router( )


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

//AJAX LOGIN
router.post('/loginProfile', (request, response) => {
	if(request.body.email.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("You need to fill out your email."))
		return;
	}

	if(request.body.password.length === 0) {
		response.redirect('/?message=' + encodeURIComponent("You need to fill out your password."))
		return;
	}

	User.findOne({
		where: {
			email: request.body.email
		}
	}).then( (user) => {
		if(user == null) {
			response.redirect('/?message=' + encodeURIComponent("You need to fill out a valid email."))
			return
		}
		else{
			var hash = user.password 
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
