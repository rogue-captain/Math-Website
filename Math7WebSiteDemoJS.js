
<script>
  
var answer 

function generateProblem(difficulty) {

var operand1 = Math.floor(Math.random() * 100);
var operand2 = difficulty === 'easy' ? Math.floor(Math.random() * 100) : Math.floor(Math.random() * 100);
var operator = difficulty === 'easy' ? '+' : '*';

var problemText = `${operand1} ${operator} ${operand2}`;
answer = eval(problemText);  

//DEBUGGING LINE ----------------------------------------------------------------------------------------->
  alert("generateProblem() executed. answer = " + answer)

//DEBUGGING LINE ----------------------------------------------------------------------------------------->
  var resultElement = document.getElementById('result');
resultElement.innerText = 'Answer = ' + answer;
 //DEBUGGING LINE ----------------------------------------------------------------------------------------->

return {
  text: problemText,
  answer: answer	
};
}


function checkAnswer() {

var userAnswer = parseInt(document.getElementById('answer').value);

if (!isNaN(userAnswer)) {

  //DEBUGGING LINE ----------------------------------------------------------------------------------------->
  alert('checkAnswer() called: answer = ' + answer + ', userAnswer = ' + userAnswer);
  //DEBUGGING LINE ----------------------------------------------------------------------------------------->
  
  if (answer === userAnswer) {
  
    document.getElementById('result').innerText = "CORRECT !!!";
  } else {
  
    document.getElementById('result').innerText = "Incorrect Answer. Try Again.";
  }
  
} else {

  alert("Please enter a number into the textbox.");
}
}




//Event Listener to modify problem
  document.getElementById('difficulty').addEventListener('change', function() {
    var difficulty = this.value;
    var problem = generateProblem(difficulty);
    document.getElementById('problem').innerText = problem.text + ' =';
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
  });
  
  
  // Event Listener to generate a new problem when the "New Problem" button is clicked
  document.getElementById('newProblemButton').addEventListener('click', function() {
  var difficulty = document.getElementById('difficulty').value;
  var problem = generateProblem(difficulty);

   document.getElementById('problem').innerText = problem.text + ' =';
   document.getElementById('answer').value = '';
   document.getElementById('result').innerText = '';
});

  //Event Listener to generate new problem
  /* document.getElementById('difficulty').addEventListener('change', function() {
    var difficulty = this.value;
    var problem = generateProblem(difficulty);
    document.getElementById('problem').innerText = problem.text + ' =';
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
  }); */

  // Initialize with easy difficulty at form laod 
  //var initialProblem = generateProblem('easy');
  document.getElementById('problem').innerText = generateProblem('easy').text + ' =';
  
</script>