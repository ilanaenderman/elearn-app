// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Dutch animals",
        "main":    "<p>Test your knowledge of dutch animals!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your Dutch Animals. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Kat'?",
            "a": [
                {"option": "<img src='images/dog.jpg'> 1",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> 2", "correct": false},
                {"option": "<img src='images/cat.jpg'> 3",    "correct": true},
                {"option": "<img src='images/cow.jpg'> 4",    "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's do the next question!</p>",
            "incorrect": "<p><img src='images/cat.jpg'><span>No, this is a 'Kat' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these animals would you see on a farm? You can pick multiple answers.",
            "a": [
                {"option": "Geit",    "correct": true},
                {"option": "Konijn",  "correct": false},
                {"option": "Koe",     "correct": true},
                {"option": "Kat",     "correct": false} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Geit' and 'Koe'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these animals can fly?",
            "a": [
                {"option": "Paard",   "correct": false},
                {"option": "Vogel",   "correct": true},
                {"option": "Kip",     "correct": false},
                {"option": "Hond",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's continue!</p>",
            "incorrect": "<p><span>Not Quite.</span> Only a 'Vogel' can fly.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Muis'?",
            "a": [
                {"option": "<img src='images/horse.jpg'> 1",    "correct": false},
                {"option": "<img src='images/sheep.jpg'> 2",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> 3",   "correct": false},
                {"option": "<img src='images/mouse.jpg'> 4",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> Only one more question to go!</p>",
            "incorrect": "<p><img src='images/mouse.jpg'><span>No sorry, this is a 'Muis</span> Let's go to the last question!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Paard', 'Koe' and 'Schaap'.",
            "a": [
                {"option": "<img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'> 1",    "correct": true},
                {"option": "<img src='images/mouse.jpg'><img src='images/goat.jpg'><img src='images/bird.jpg'> 2",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Let's see what you have scored!</p>",
            "incorrect": "<p><img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'><span>No, this is the right answer.</span> Let's see what you have scored!</p>" // no comma here
        } // no comma here
    ]
};