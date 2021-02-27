// Create score variable
var score = 0;

// identify centerDiv
//var centerDiv = document.querySelector('#centerDiv');

// Target the start button
var startButton = document.querySelector('#startButton');

var quiz = [
    {
        q: "this is question 1",
        choices: ["a","b","c","d"],
        correct: "c"},
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
        correct: "c"}
]

function verifyClick() {
    var centerDiv = document.querySelector('#centerDiv');
    console.log("answer was clicked");
    console.log(this.id);
    // compare button id with correct answer
    if (this.id==="answer3") {
        var correct = document.createTextNode("Correct!");
        centerDiv.appendChild(correct); 
    }
    else {
        var incorrect = document.createTextNode("Incorrect!");
        centerDiv.appendChild(incorrect);
    }
}

// define a function to display questions and answers but I don't understand the currentQuestion argument
var nextQuestion = function(currentQuestion) {
    // replace Start Quiz with a question and iterate through the questions
    document.querySelector('#question').textContent = currentQuestion.q;

        var centerDiv = document.querySelector('#centerDiv');
        var btn = document.createElement("BUTTON");
        btn.id = "answer1"
        centerDiv.appendChild(btn);
        var linebreak = document.createElement("br");
        centerDiv.appendChild(linebreak);
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        var btnText = document.createTextNode(currentQuestion.choices[0]);
        btn.appendChild(btnText); 
        btn.addEventListener('click', verifyClick);

        btn = document.createElement("BUTTON");
        btn.id = "answer2"
        centerDiv.appendChild(btn);
        linebreak = document.createElement("br");
        centerDiv.appendChild(linebreak);
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        btnText = document.createTextNode(currentQuestion.choices[1]);
        btn.appendChild(btnText); 
        btn.addEventListener('click', verifyClick);

        btn = document.createElement("BUTTON");
        btn.id = "answer3"
        centerDiv.appendChild(btn);
        linebreak = document.createElement("br");
        centerDiv.appendChild(linebreak);
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        btnText = document.createTextNode(currentQuestion.choices[2]);
        btn.appendChild(btnText); 
        btn.addEventListener('click', verifyClick);

        btn = document.createElement("BUTTON");
        btn.id = "answer4"
        centerDiv.appendChild(btn);
        linebreak = document.createElement("br");
        centerDiv.appendChild(linebreak);
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        btnText = document.createTextNode(currentQuestion.choices[3]);
        btn.appendChild(btnText); 
        btn.addEventListener('click', verifyClick);



}



function startQuiz() {
    // remove the start button
    document.querySelector('#startButton').remove();
    //display the first question
    nextQuestion(quiz[0]);

    

    // add 4 buttons
        /*    for (c=0; c<4; c++) {
        // create a button var, style it
        var btn = document.createElement("BUTTON");
        btn.classList.add("btn-primary");
        btn.classList.add("btn");
        // add a unique id to each button
        btn.id = "answer" + i;
        // add button to centerDiv
        var centerDiv = document.querySelector('#centerDiv');
        centerDiv.appendChild(btn);
        var linebreak = document.createElement("br");
        centerDiv.appendChild(linebreak);
        // add text variable to button and iterate through the choices
        
    };*/
}


    // pause and listen for choice

    // check choice

    function check() {

    }

    // display correct incorrect

    // add to score

    // move to next question


/*
 
    // loop to iterate through questions and answers in quiz array
    for (i=0; i<quiz.length; i++) {
    
    
    }

    
    btn.appendChild(btnText);
    // add Event LIstener 
    btn.addEventListener('click', check() {
        
    });

*/
    
    
    

//document.querySelector('#centerDiv').add(btn);

// when do you use get element by id?


startButton.addEventListener('click', startQuiz);


/*   var x = document.createElement("BUTTON");
  var t = document.createTextNode("Click me");
  x.appendChild(t);
  document.body.appendChild(x);
  */

/*// Creates a variable to hold the count
var count = 0;

// Uses querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incrementEl = document.querySelector('#increment');

// Displays the current count on the page
function setCounterText() {
  countEl.textContent = count;
}
function callbackIncrement() {
  count++;
  setCounterText();
}
// Increments the count on click and calls setCounterText()
incrementEl.addEventListener('click', callbackIncrement);

// Decrements the count on click and calls setCounterText()
// see unsolved for better option
decrementEl.addEventListener('click', function() {
  if (count > 0) {
    count--;
    setCounterText();
  }
});  */