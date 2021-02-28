// Create score variable
var score = 0;

// identify centerDiv
var centerDiv = document.querySelector('#centerDiv');

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
        correct: "c"}
]


// Target the start button
var startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startQuiz);

var check = function() {
if (this.innerHTML===quiz[0].correct) {
    var alert = document.createElement('p');
    centerDiv.appendChild(alert);
    alert.innerText=("Correct!");
    score+=1;
    console.log(score);
} else {
    var alert = document.createElement('p');
    centerDiv.appendChild(alert);
    alert.innerText=("Incorrect!");
}
//two seconds later, go to the next question
}

function startQuiz() {
  // remove the start button
    document.querySelector('#startButton').remove();

    document.querySelector('#question').textContent = quiz[0].q;
    //display 4 choices
    for (i=0; i<4; i++) {
    var centerDiv = document.querySelector('#centerDiv');
    var btn = document.createElement("BUTTON");
    btn.classList.add("btn-primary");
    btn.classList.add("btn");
    var linebreak = document.createElement("br");
    centerDiv.appendChild(btn);
    centerDiv.appendChild(linebreak);
    btn.innerHTML=(quiz[0].choices[i]);
    btn.addEventListener('click', check);
    }
}