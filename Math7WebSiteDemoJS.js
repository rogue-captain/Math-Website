document.addEventListener('DOMContentLoaded', function() {
  var answer; // Declare answer in the correct scope

  function generateProblem(difficulty) {
      var operand1 = Math.floor(Math.random() * 100);
      var operand2 = Math.floor(Math.random() * 100);
      var operator = difficulty === 'easy' ? '+' : '*';
      
      var problemText = `${operand1} ${operator} ${operand2}`;
      answer = operator === '+' ? operand1 + operand2 : operand1 * operand2;  

      // Debugging line
      console.log("generateProblem() executed. answer =", answer);

      return {
          text: problemText,
          answer: answer
      };
  }

  function checkAnswer() {
      var userAnswer = parseInt(document.getElementById('answer').value);

      if (!isNaN(userAnswer)) {
          console.log('checkAnswer() called: answer =', answer, ', userAnswer =', userAnswer);
          
          if (answer === userAnswer) {
              document.getElementById('result').innerText = "CORRECT !!!";
          } else {
              document.getElementById('result').innerText = "Incorrect Answer. Try Again.";
          }
      } else {
          alert("Please enter a number into the textbox.");
      }
  }

  // Initialize with easy difficulty at form load
  var initialProblem = generateProblem('easy');
  document.getElementById('problem').innerText = initialProblem.text + ' =';

  // Event Listener to modify problem
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
});
