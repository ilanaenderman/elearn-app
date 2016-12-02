// Settings

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')
const bcrypt	= require('bcrypt-node')

// Account
router.get('/settings', (request, response) => {
	var user = request.session.user
	response.render('settings', {message: request.query.message ,user: user})
})

router.post('/settings', (request, response) => {
	let user = request.session.user
	let newUserName = request.body.newUserName
	let newEmail = request.body.newEmail
	console.log(request.body)

	if(  newUserName.length <= 3 || newUserName.length >= 13){
		response.redirect('/settings?message=' + encodeURIComponent("Username must be between 3 and 13 characters long."))
	}

	if(  newUserName != "" && newEmail != "") {
		console.log( 'both')
		db.user.findOne({
			where: {id: user.id},
			attributes: ['id', 'userName', 'email']
		}).then( newSetting => {
			newSetting.update({
				userName: newUserName,
				email: newEmail
			}).then( newSetting => {
				response.redirect('/settings?message=' + encodeURIComponent("Succesfully changed your username and email address. Next time you login the changes will be visible."))
			})
		})
	}
	else if( newEmail != "") {
		console.log('email')
		db.user.findOne({
			where: {id: user.id},
			attributes: ['id', 'email']
		}).then( newSetting => {
			newSetting.update({
				email: newEmail
			}).then( newSetting => {
				response.redirect('/settings?message=' + encodeURIComponent("Succesfully changed your email address.Next time you login the changes will be visible"))
			})
		})
	}

	else if( newUserName != "") {
		console.log('user')
		db.user.findOne({
			where: {id: user.id},
			attributes: ['id', 'userName']
		}).then( newSetting => {
			console.log(newSetting)
			newSetting.update({
				userName: newUserName
			}).then( newSetting => {
				response.redirect('/settings?message=' + encodeURIComponent("Succesfully changed your username. Next time you login the changes will be visible."))
			})
		})
	}
	else {
		console.log('none')
		response.redirect('/settings?message=' + encodeURIComponent("Please fill in a new username and/or email address."))
	}
})



// Password
router.get('/password', (request, response) => {
	let user = request.session.user
	response.render('password', {message: request.query.message, user: user})
})

router.post('/password', (request, response) => {
	let user = request.session.user
	let currentPW = request.body.currentPW
	console.log(currentPW)
	let newPW = request.body.newPW
	let confirmPW = request.body.confirmPW
	let hash = user.password


	bcrypt.compare(currentPW, hash, (err, res) => {
		if( res == false) {
			response.redirect('/password?message=' + encodeURIComponent("Your current password input is invalid."))
			return
		}
	})

	if(newPW.length < 8) {
		response.redirect('/password?message=' + encodeURIComponent("Your new password must be at least 8 characters."))
		return
	}

	if(newPW !== confirmPW) {
		response.redirect('/password?message=' + encodeURIComponent("Your confirmed password does not match with your new password."))
		return
	}


	bcrypt.compare(currentPW, hash, (err, res) => {
		if(res == true && newPW == confirmPW && newPW.length >= 8) {
			db.user.findOne({
				where: {id: user.id},
				attributes: ['id', 'password']
			}).then( newPassword => {
				bcrypt.hash(newPW, null, null, (err, hash) => {
					newPassword.update({
						password: hash
					}).then( newPassword => {
						response.redirect('/password?message=' + encodeURIComponent("Succesfully changed your password."))
					})
				})
			})
		}
	})
})


// Profile
router.get('/profileSettings', (request, response) => {
	var user = request.session.user
	response.render('profileSettings', {user: user})
})

router.post('/profile', (request, response) => {
	var user = request.session.user
	response.render('profileSettings', {user: user})
})



module.exports = router