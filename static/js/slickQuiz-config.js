// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizNLFood = {
    "info": {
        "name":    "Dutch food",
        "main":    "<p>Test your knowledge of dutch food!</p>",
        "results": "<p>Play the memory game to practice your Dutch Food. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Aardappel'?",
            "a": [
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/dinner.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": true},
                {"option": "<img src='images/fish.jpg'> <p style='font-size: 0;'>4</p>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/potato.jpg'><span>No, this is a 'Aardappel' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these food items would you eat in the evening? You can pick multiple answers.",
            "a": [
                {"option": "Vlees",     "correct": true},
                {"option": "Brood",     "correct": false},
                {"option": "Ontbijt",   "correct": false},
                {"option": "Vis",       "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Vlees' and 'Vis'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which food item can you see in this picture? <br> <img src='images/lunch.jpg' style='display: block; margin-left: 29%;'>",
            "a": [
                {"option": "Aardappel", "correct": false},
                {"option": "Brood",     "correct": true},
                {"option": "Rijst",     "correct": false},
                {"option": "Vlees",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> You can see 'Brood'.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Groente'?",
            "a": [
                {"option": "<img src='images/vegetable.jpg'> <p style='font-size: 0;'>1</p>",   "correct": true},
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>2</p>",       "correct": false},
                {"option": "<img src='images/lunch.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false},
                {"option": "<img src='images/rice.jpg'> <p style='font-size: 0;'>4</p>",        "correct": false} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/vegetable.jpg'><span>No sorry, this is a 'Groente'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of 'Rijst', 'Avondeten' and 'Vis'.",
            "a": [
                {"option": "<img src='images/fruit.png'><img src='images/lunch.jpg'><img src='images/rice.jpg'> <p style='font-size: 0;'>1</p>",     "correct": false},
                {"option": "<img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'> <p style='font-size: 0;'>2</p>",     "correct": true}, 
                {"option": "<img src='images/dinner.jpg'><img src='images/meat.jpg'><img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizNLAnimal = { //Done!
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
                {"option": "<img src='images/dog.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>2</p>", "correct": false},
                {"option": "<img src='images/cat.jpg'> <p style='font-size: 0;'>3</p>",    "correct": true},
                {"option": "<img src='images/cow.jpg'> <p style='font-size: 0;'>4</p>",    "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
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
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Only a 'Vogel' can fly.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Muis'?",
            "a": [
                {"option": "<img src='images/horse.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/sheep.jpg'> <p style='font-size: 0;'>2</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false},
                {"option": "<img src='images/mouse.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/mouse.jpg'><span>No sorry, this is a 'Muis</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Paard', 'Koe' and 'Schaap'.",
            "a": [
                {"option": "<img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'> <p style='font-size: 0;'>1</p>",     "correct": true},
                {"option": "<img src='images/mouse.jpg'><img src='images/goat.jpg'><img src='images/horse.jpg'> <p style='font-size: 0;'>2</p>",    "correct": false},
                {"option": "<img src='images/sheep.jpg'><img src='images/cow.jpg'><img src='images/dog.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizNLFamily = {
    "info": {
        "name":    "Dutch family",
        "main":    "<p>Test your knowledge of dutch family!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your Dutch Family. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Oma'?",
            "a": [
                {"option": "<img src='images/brother.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",      "correct": false},
                {"option": "<img src='images/parent.jpg'> <p style='font-size: 0;'>3</p>",     "correct": false},
                {"option": "<img src='images/grandma.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/grandma.jpg'><span>No, this is a 'Oma' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these people are male? You can pick multiple answers.",
            "a": [
                {"option": "Vader",     "correct": true},
                {"option": "Zus",       "correct": false},
                {"option": "Moeder",    "correct": false},
                {"option": "Opa",       "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Vader' and 'Opa'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these are multiple people? You can pick multiple answers.",
            "a": [
                {"option": "Ouders",   "correct": true},
                {"option": "Familie",  "correct": true},
                {"option": "Baby",     "correct": false},
                {"option": "Broer",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Both 'Ouders' and 'Familie' are multiple people.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Kind'?",
            "a": [
                {"option": "<img src='images/family.jpg'> <p style='font-size: 0;'>1</p>",   "correct": false},
                {"option": "<img src='images/sister.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/mom.jpg'> <p style='font-size: 0;'>3</p>",      "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/child.jpg'><span>No sorry, this is a 'Kind'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Baby', 'Opa' and 'Family'.",
            "a": [
                {"option": "<img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'> <p style='font-size: 0;'>1</p>",      "correct": true},
                {"option": "<img src='images/grandpa.jpg'><img src='images/sister.jpg'><img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",     "correct": false},
                {"option": "<img src='images/family.jpg'><img src='images/dad.jpg'><img src='images/brother.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizESFood = {
    "info": {
        "name":    "Spanish food",
        "main":    "<p>Test your knowledge of spanish food!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your Spanish Food. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Patata'?",
            "a": [
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/dinner.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": true},
                {"option": "<img src='images/fish.jpg'> <p style='font-size: 0;'>4</p>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/potato.jpg'><span>No, this is a 'Patata'. </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these food items would you eat in the evening? You can pick multiple answers.",
            "a": [
                {"option": "Carne",      "correct": true},
                {"option": "Pan",        "correct": false},
                {"option": "Desayuno",   "correct": false},
                {"option": "Pescado",    "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Carne' and 'Pescado'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which food item can you see in this picture? <br> <img src='images/lunch.jpg' style='display: block; margin-left: 29%;'>",
            "a": [
                {"option": "Patata",  "correct": false},
                {"option": "Pan",     "correct": true},
                {"option": "Arroz",   "correct": false},
                {"option": "Carne",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> You can see 'Pan'.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Vegetal'?",
            "a": [
                {"option": "<img src='images/vegetable.jpg'> <p style='font-size: 0;'>1</p>",   "correct": true},
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>2</p>",       "correct": false},
                {"option": "<img src='images/lunch.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false},
                {"option": "<img src='images/rice.jpg'> <p style='font-size: 0;'>4</p>",        "correct": false} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/vegetable.jpg'><span>No sorry, this is a 'Vegetal'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of 'Arroz', 'Cena' and 'Pescado'.",
            "a": [
                {"option": "<img src='images/fruit.png'><img src='images/lunch.jpg'><img src='images/rice.jpg'> <p style='font-size: 0;'>1</p>",     "correct": false},
                {"option": "<img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'> <p style='font-size: 0;'>2</p>",     "correct": true}, 
                {"option": "<img src='images/dinner.jpg'><img src='images/meat.jpg'><img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizESAnimal = {
    "info": {
        "name":    "Spanish animals",
        "main":    "<p>Test your knowledge of spanish animals!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your Spanish Animals. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Gato'?",
            "a": [
                {"option": "<img src='images/dog.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>2</p>", "correct": false},
                {"option": "<img src='images/cat.jpg'> <p style='font-size: 0;'>3</p>",    "correct": true},
                {"option": "<img src='images/cow.jpg'> <p style='font-size: 0;'>4</p>",    "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/cat.jpg'><span>No, this is a 'Gato' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these animals would you see on a farm? You can pick multiple answers.",
            "a": [
                {"option": "Cabre",    "correct": true},
                {"option": "Conejo",   "correct": false},
                {"option": "Vaca",     "correct": true},
                {"option": "Gato",     "correct": false} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Cabre' and 'Vaca'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these animals can fly?",
            "a": [
                {"option": "Caballo",  "correct": false},
                {"option": "Pájaro",   "correct": true},
                {"option": "Pollo",    "correct": false},
                {"option": "Perro",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Only a 'Pájaro' can fly.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Ratón'?",
            "a": [
                {"option": "<img src='images/horse.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/sheep.jpg'> <p style='font-size: 0;'>2</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false},
                {"option": "<img src='images/mouse.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/mouse.jpg'><span>No sorry, this is a 'Ratón'</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Caballo', 'Vaca' and 'Oveja'.",
            "a": [
                {"option": "<img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'> <p style='font-size: 0;'>1</p>",    "correct": true},
                {"option": "<img src='images/mouse.jpg'><img src='images/goat.jpg'><img src='images/horse.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/sheep.jpg'><img src='images/cow.jpg'><img src='images/dog.jpg'> <p style='font-size: 0;'>3</p>",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizESFamily = {
    "info": {
        "name":    "Dutch family",
        "main":    "<p>Test your knowledge of dutch animals!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your Spanish Family. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Abuela'?",
            "a": [
                {"option": "<img src='images/brother.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",      "correct": false},
                {"option": "<img src='images/parent.jpg'> <p style='font-size: 0;'>3</p>",     "correct": false},
                {"option": "<img src='images/grandma.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/grandma.jpg'><span>No, this is a 'Abuela' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these people are male? You can pick multiple answers.",
            "a": [
                {"option": "Padre",     "correct": true},
                {"option": "Hermana",   "correct": false},
                {"option": "Madre",     "correct": false},
                {"option": "Abuelo",    "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Padre' and 'Abuelo'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these are multiple people? You can pick multiple answers.",
            "a": [
                {"option": "Padres",    "correct": true},
                {"option": "Familia",   "correct": true},
                {"option": "Bebé",      "correct": false},
                {"option": "Hermano",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Both 'Padres' and 'Familia' are multiple people.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Niño'?",
            "a": [
                {"option": "<img src='images/family.jpg'> <p style='font-size: 0;'>1</p>",   "correct": false},
                {"option": "<img src='images/sister.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/mom.jpg'> <p style='font-size: 0;'>3</p>",      "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/child.jpg'><span>No sorry, this is a 'Niño'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Bebé', 'Abuelo' and 'Familia'.",
            "a": [
                {"option": "<img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'> <p style='font-size: 0;'>1</p>",      "correct": true},
                {"option": "<img src='images/grandpa.jpg'><img src='images/sister.jpg'><img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",     "correct": false},
                {"option": "<img src='images/family.jpg'><img src='images/dad.jpg'><img src='images/brother.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizFRFood = {
    "info": {
        "name":    "French Food",
        "main":    "<p>Test your knowledge of french food!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your French Food. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Pommes de Terre'?",
            "a": [
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/dinner.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": true},
                {"option": "<img src='images/fish.jpg'> <p style='font-size: 0;'>4</p>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/potato.jpg'><span>No, this is a 'Pommes de Terre' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these food items would you eat in the evening? You can pick multiple answers.",
            "a": [
                {"option": "Viande",            "correct": true},
                {"option": "Pain",              "correct": false},
                {"option": "Petit Déjeuner",    "correct": false},
                {"option": "Poisson",           "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Viande' and 'Poisson'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which food item can you see in this picture? <br> <img src='images/lunch.jpg' style='display: block; margin-left: 29%;'>",
            "a": [
                {"option": "Pommes de Terre", "correct": false},
                {"option": "Pain",            "correct": true},
                {"option": "Riz",             "correct": false},
                {"option": "Viande",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> You can see 'Brood'.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Légume'?",
            "a": [
                {"option": "<img src='images/vegetable.jpg'> <p style='font-size: 0;'>1</p>",   "correct": true},
                {"option": "<img src='images/fruit.png'> <p style='font-size: 0;'>2</p>",       "correct": false},
                {"option": "<img src='images/lunch.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false},
                {"option": "<img src='images/rice.jpg'> <p style='font-size: 0;'>4</p>",        "correct": false} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/vegetable.jpg'><span>No sorry, this is a 'Légume'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of 'Riz', 'Dîner' and 'Poisson'.",
            "a": [
                {"option": "<img src='images/fruit.png'><img src='images/lunch.jpg'><img src='images/rice.jpg'> <p style='font-size: 0;'>1</p>",     "correct": false},
                {"option": "<img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'> <p style='font-size: 0;'>2</p>",     "correct": true}, 
                {"option": "<img src='images/dinner.jpg'><img src='images/meat.jpg'><img src='images/potato.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/rice.jpg'><img src='images/dinner.jpg'><img src='images/fish.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizFRAnimal = {
    "info": {
        "name":    "French animals",
        "main":    "<p>Test your knowledge of french animals!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your French Animals. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Chat'?",
            "a": [
                {"option": "<img src='images/dog.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>2</p>", "correct": false},
                {"option": "<img src='images/cat.jpg'> <p style='font-size: 0;'>3</p>",    "correct": true},
                {"option": "<img src='images/cow.jpg'> <p style='font-size: 0;'>4</p>",    "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/cat.jpg'><span>No, this is a 'Chat' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these animals would you see on a farm? You can pick multiple answers.",
            "a": [
                {"option": "Chèvre",    "correct": true},
                {"option": "Lapin",     "correct": false},
                {"option": "Vache",     "correct": true},
                {"option": "Chat",      "correct": false} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Chèvre' and 'Vache'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these animals can fly?",
            "a": [
                {"option": "Cheval",   "correct": false},
                {"option": "Oiseau",   "correct": true},
                {"option": "Poulet",   "correct": false},
                {"option": "Chien",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Only a 'Oiseau' can fly.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Souris'?",
            "a": [
                {"option": "<img src='images/horse.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/sheep.jpg'> <p style='font-size: 0;'>2</p>",    "correct": false},
                {"option": "<img src='images/rabbit.jpg'> <p style='font-size: 0;'>3</p>",   "correct": false},
                {"option": "<img src='images/mouse.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/mouse.jpg'><span>No sorry, this is a 'Souris'</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Cheval', 'Vache' and 'Mouton'.",
            "a": [
                {"option": "<img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'> <p style='font-size: 0;'>1</p>",     "correct": true},
                {"option": "<img src='images/mouse.jpg'><img src='images/goat.jpg'><img src='images/horse.jpg'> <p style='font-size: 0;'>2</p>",    "correct": false},
                {"option": "<img src='images/sheep.jpg'><img src='images/cow.jpg'><img src='images/dog.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/horse.jpg'><img src='images/sheep.jpg'><img src='images/cow.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};

var quizFRFamily = {
    "info": {
        "name":    "French family",
        "main":    "<p>Test your knowledge of french family!</p>",
        "results": "<h5>Learn More</h5><p>Play the memory game to practice your French Family. You also try this quiz as many times as you want!</p><form method='POST' action='/quiz'><input type='button' name='replay' value='Play Again' id='againBtn' style='margin-top: 20px;'><input type='button' value='Go Back' id='backBtn' name='score' style='margin-top: 20px; margin-left: 20px;'></form>",
        "level1":  "Amazing you got all of them!",
        "level2":  "Almost perfect!",
        "level3":  "Great job, but you need some more practice.",
        "level4":  "Good try, but you still need practice.",
        "level5":  "Did you already practice the words?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following pictures is a 'Grand-mère'?",
            "a": [
                {"option": "<img src='images/brother.jpg'> <p style='font-size: 0;'>1</p>",    "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",      "correct": false},
                {"option": "<img src='images/parent.jpg'> <p style='font-size: 0;'>3</p>",     "correct": false},
                {"option": "<img src='images/grandma.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Let's continue!</p>",
            "incorrect": "<p><img src='images/grandma.jpg'><span>No, this is a 'Grand-mère' </span>Let's try a new question!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these people are male? You can pick multiple answers.",
            "a": [
                {"option": "Père",              "correct": true},
                {"option": "Soeur",             "correct": false},
                {"option": "Mère",              "correct": false},
                {"option": "Grand-père",        "correct": true} // no comma here
            ],
            // "select_any": true,
            "correct": "<p><span>You are right!</span> You're doing great, keep this up!</p>",
            "incorrect": "<p><span>Hmmm.</span>The right answer is 'Père' and 'Grand-père'.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these are multiple people? You can pick multiple answers.",
            "a": [
                {"option": "Parents",  "correct": true},
                {"option": "Famille",  "correct": true},
                {"option": "Bébé",     "correct": false},
                {"option": "Frère",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Let's go on!</p>",
            "incorrect": "<p><span>Not Quite.</span> Both 'Parents' and 'Famille' are multiple people.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a 'Enfant'?",
            "a": [
                {"option": "<img src='images/family.jpg'> <p style='font-size: 0;'>1</p>",   "correct": false},
                {"option": "<img src='images/sister.jpg'> <p style='font-size: 0;'>2</p>",   "correct": false},
                {"option": "<img src='images/mom.jpg'> <p style='font-size: 0;'>3</p>",      "correct": false},
                {"option": "<img src='images/child.jpg'> <p style='font-size: 0;'>4</p>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Great job!</span> You know more than you think!</p>",
            "incorrect": "<p><img src='images/child.jpg'><span>No sorry, this is a 'Enfant'.</span> Let's continue!</p>" // no comma here
        },
        { // Question 5
            "q": "Pick the answer that has a picture of a 'Bébé', 'Grand-père' and 'Famille'.",
            "a": [
                {"option": "<img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'> <p style='font-size: 0;'>1</p>",      "correct": true},
                {"option": "<img src='images/grandpa.jpg'><img src='images/sister.jpg'><img src='images/child.jpg'> <p style='font-size: 0;'>2</p>",     "correct": false},
                {"option": "<img src='images/family.jpg'><img src='images/dad.jpg'><img src='images/brother.jpg'> <p style='font-size: 0;'>3</p>",       "correct": false} // no comma here
            ],
            "correct": "<p><span>Great!</span> Keep this up!</p>",
            "incorrect": "<p><img src='images/baby.jpg'><img src='images/family.jpg'><img src='images/grandpa.jpg'><span>No, this is the right answer.</span> Let's continue!</p>" // no comma here
        } // no comma here
    ]
};