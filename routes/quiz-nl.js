//Quiz NL routes
const express	= require( 'express')
const router    = express.Router( )
const db        = require(__dirname + '/../modules/database')

//Quiz App Demo
router.get('/quiz', (request, response) => {
    response.render('demoquiz')
})

router.post('/quiz-food-NL', (request, response) => {
    console.log(request.body) //{input: '5/5'}
})

module.exports	= router