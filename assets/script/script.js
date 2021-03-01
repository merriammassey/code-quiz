// Create score variable
var score = 0;
//display it in window
document.querySelector('#score').textContent =  "Score: " + score;


// save it in localStorage
//localStorage.setItem(score, 0);

// identify centerDiv
var centerDiv = document.querySelector('#centerDiv');

var questionNumber = 0;

var quiz = [
    {
        q: "this is question 1",
        choices: ["a","b","c","d"],
        correct: "a"},
    {
        q: "this is question 2",
        choices: ["e","f","g","h"],
        correct: "h"},
    { 
        q: "this is question 3",
        choices: ["a","b","c","d"],
        correct: "c"},
    {
        q: "this is question 4",
        choices: ["a","b","c","d"],
        correct: "c"},
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
if (this.innerHTML===quiz[0].correct) {
    var alert = document.createElement('p');
    centerDiv.appendChild(alert);
    alert.innerText=("Correct!");
    score+=1;
    document.querySelector('#score').textContent = "Score: " + score;
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
    questionNumber++;
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
        // add save button
        var btn = document.createElement("BUTTON");
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        buttonDiv.appendChild(btn);
        timeLeft = 0;
        btn.innerHTML="Save my score";
        btn.addEventListener('click', saveScore);
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
  // remove the start button
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
    document.querySelector('#startButton').remove();
    nextQuestion();
}
