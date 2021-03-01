// Create score variable
var score = 0;
//document.querySelector('#score').addEventListener('click', loadScores);

//display it in window
//document.querySelector('#score').textContent =  "Score: " + score;



// save it in localStorage
//localStorage.setItem(score, 0);

// identify centerDiv
var centerDiv = document.querySelector('#centerDiv');

var questionNumber = 0;

var saveScore = function(initials) {
    // save initials and score
    // make an array for high scores but if there are none, make an array
    // name items pulled from local storage "highscores"
    if (!localStorage.getItem("highscores")) {
    var highscores =[];
    }
    else {var highscores = localStorage.getItem("highscores");
    }   
    // make an object to hold scores
    var scoreToAdd = {
        initials: initials,
        score: score,
    };
    //add object to high scores array
    //highscores.push(scoreToAdd);
    localStorage.setItem("highscores", JSON.stringify(
        highscores));
        loadScores();
    }

    var clearScores = function() {
        //clear scores from screen
        //centerDiv.textContent="";
        localStorage.clear;
    }

// display high scores
var loadScores = function() {
    //get highscores
    var highscores=JSON.parse(localStorage.getItem("highscores"));
    //put highscores on page

    console.log(highscores);
    // eliminate timer display and display high scores link
    document.querySelector('#score').textContent="";
    timer.innerText="";
    // display "high scores"
    centerDiv.textContent="High Scores";
    // add clear and go back buttons
    var clearBtn = document.createElement("BUTTON");
    clearBtn.classList.add("btn-primary");
    clearBtn.classList.add("btn");
    //neither the query Selector nor the buttonDiv reference are working so these buttons are not appending
    document.querySelector('#buttons').appendChild(clearBtn);
    timeLeft = 0;
    clearBtn.innerHTML="Clear scores";
    var goBackBtn = document.createElement("BUTTON");
    goBackBtn.classList.add("btn-primary");
    goBackBtn.classList.add("btn");
    buttonDiv.appendChild(goBackBtn);
    goBackBtn.innerHTML="Go Back";
    // use a callback function to pass an argument 
    clearBtn.addEventListener('click', clearScores);
    goBackBtn.addEventListener('click', startQuiz);
}

var quiz = [
    {
        q: "How old is JavaScript?",
        choices: ["5 years","18 years","25 years","30 years"],
        correct: "25 years"},
    {
        q: "toLowerCase is an example of a JavaScript...",
        choices: ["object","array","conditional", "method"],
        correct: "method"},
    { 
        q: "What is the keyword that returns a value from a function?",
        choices: ["break","equals","return","value"],
        correct: "return"},
    {
        q: "Which of the following words is used to declare a variable?",
        choices: ["variable","var","lets", "cons"],
        correct: "var"},
]
var timer = document.getElementById('time');
var timeLeft=59;
var buttonDiv = document.querySelector('#buttons');
/*function countdown() {
    var timeLeft = 59;*/




// Target the start button
var startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startQuiz);

var check = function() {
    console.log(this.innerHTML);
    console.log(quiz[questionNumber].correct);
if (this.innerHTML===quiz[questionNumber].correct) {
    var alert = document.createElement('p');
    centerDiv.appendChild(alert);
    alert.innerText=("Correct!");
    score+=1;
//    document.querySelector('#score').textContent = "Score: " + score;
//   console.log(score);
} else {
    var alert = document.createElement('p');
    centerDiv.appendChild(alert);
    alert.innerText=("Incorrect!");
    timeLeft-=5;
};
//two seconds later, go to the next question
setTimeout(function () {
    //this is not removing all the buttons,just the one that was clicked
    buttonDiv.innerHTML="";
    alert.innerText="";
    //go to the next question
    questionNumber++;
    console.log(questionNumber);
    nextQuestion();
  }, 1000)
}


function nextQuestion() {
    if (questionNumber < 4) {
    document.querySelector('#question').textContent = quiz[questionNumber].q;
    //display 4 choices
    for (i=0; i<4; i++) {
    var btn = document.createElement("BUTTON");
    btn.classList.add("btn-primary");
    btn.classList.add("btn");
    //btn.setAttribute(id, btns);
    var linebreak = document.createElement("br");
    buttonDiv.appendChild(btn);
    buttonDiv.appendChild(linebreak);
    btn.innerHTML=(quiz[questionNumber].choices[i]);
    // event Listener
    btn.addEventListener('click', check);
    };
}
    // advance to the next question unless it's the last question
    else {
        document.querySelector('#question').textContent ="Your score is " + score;
        timer.innerText="";
        buttonDiv.innerHTML="";
        //create input field
        var initials = document.createElement("input");
        initials.type = "text";
        buttonDiv.appendChild(initials);
        // set var initials to the value of what's put in the initialsEl
        // add save button
        var btn = document.createElement("BUTTON");
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        buttonDiv.appendChild(btn);
        timeLeft = 0;
        btn.innerHTML="Save my score";
        // use a callback function to pass an argument 
        btn.addEventListener('click', function() {
            saveScore(initials.value);
        });
    }
}
//}
/*
when question number is 5
stop the timer
clear buttons
display your score and save button
//     buttonDiv.innerHTML="Your score is " + score;
*/

function startQuiz() {

    timeLeft--;
    // Add timer
var timeInterval = setInterval(function() {
    // As long as there is more than one second left
    if (timeLeft > 1) {
        // Show second remaining
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement time left
        timeLeft--;
    } else if (timeLeft === 1) {
        // change "seconds" to "second" when there is one second left
        timer.textContent = timeLeft + ' second remaining';
    } else {
        // Time's up when time left is 0
        timer.textContent = "Time's up";
        // Stop the timer
        clearInterval(timeInterval);
    }
    }, 1000);
      // remove the start button
    document.querySelector('#startButton').remove();
    nextQuestion();
}
