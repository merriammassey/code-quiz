// Create score variable
var score = 0;

// Target the start button
var startButton = document.querySelector('#startButton');

var questions = [

];

var answers = [

];

var quiz = [
    {
        q: "this is question 1",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "c"},
    {
        q: "this is question 2",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "c"},
    { 
        q: "this is question 3",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "c"},
    {
        q: "this is question 4",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "c"}
]


function startQuiz() {

    // remove the start button
    document.querySelector('#startButton').remove();
    // add 4 buttons
    // create a button var, style it
    var btn = document.createElement("BUTTON");
    btn.classList.add("btn-primary");
    btn.classList.add("btn");
    // add button to centerDiv
    var centerDiv = document.querySelector('#centerDiv');
    centerDiv.appendChild(btn);

    // loop to iterate through questions
    for (i=0; i<quiz.length; i++) {
    
    // replace Start Quiz with a question and iterate through the questions
    document.querySelector('#question').textContent = quiz[0].q;
    
     // add text variable to button   
    var btnText = document.createTextNode(quiz[i].a);
    

    }

    
    
    btn.appendChild(btnText);

//document.querySelector('#centerDiv').add(btn);

// when do you use get element by id?
}

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