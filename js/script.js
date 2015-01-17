$(document).ready(function(){
	$('#startQuiz').click(function(){
		$('#startButton').css('display','none');
		$('#quizPaper').css('display','block');
	});

	function Question (questionNumber, question, answerOne, answerTwo, answerThree, answerFour, correctAnswer) {
		this.questionNumber = questionNumber;
		this.question = question;
		this.answerOne = answerOne;
		this.answerTwo = answerTwo;
		this.answerThree = answerThree;
		this.answerFour = answerFour;
		this.correctAnswer = correctAnswer;
	};

	var firstQuestion = new Question(
		"Question 1", "Who was the first president of the United States (under the current Constitution",
			"George Washington", "John Adams", "Benjamin Franklin", "Thomas Jefferson", "George Washington");

	console.log(firstQuestion.correctAnswer);

});