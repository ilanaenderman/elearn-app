// Settings

const express 	= require( 'express')
const router	= express.Router( )
const db		= require(__dirname + '/../modules/database')

// Account
router.get('/settings', (request, response) => {
	var user = request.session.user
	response.render('settings', {user: user})
})

router.post('/settings', (request, response) => {
	var user = request.session.user
	response.render('settings', {user: user})
})


// Password
router.get('/password', (request, response) => {
	var user = request.session.user
	response.render('password', {user: user})
})

router.post('/password', (request, response) => {
	var user = request.session.user
	response.render('password', {user: user})
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