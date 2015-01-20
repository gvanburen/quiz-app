$(document).ready(function(){
	$('#startQuiz').click(function(){
		$('#startButton').hide();
		$('#quizPaper').show();
		newGame();
	});

	function newGame() {
		var newQuestion = '<li><h3 id="actualQuestion">' + qA[0].question + '</h3></li><li><input type="checkbox">' + qA[0].answers[0] + '</input></li><li><input type="checkbox">' + qA[0].answers[1] + '</input></li><li><input type="checkbox">' + qA[0].answers[2] + '</input></li><li><input type="checkbox">' + qA[0].answers[3] + '</input></li><li><button id="submitAnswer">Submit</button></li>';
		$('#quizChoices').html(newQuestion);
	};
	
	//Question
	$('#submitAnswer').click(function(){
			alert("You clicked");
			checkAnswer();
	});

	function checkAnswer() {
		var answerLong = $('input:checked').parent().html();
		var answer = answerLong.replace('<input type="checkbox">','');
		if (answer == qA[0].answer){
			alert("Correct!")
		} else {
			alert("Incorrect")
		};
	};

	var qA = [
		{
		question: 'Who was the first president?',
		answers: [
		'John Adams',
		'Andrew Jackson',
		'George Washington',
		'Thomas Jefferson'
		],
		correct: 2
		},
		{
		question: 'What president is not featured on Mt. Rushmore?',
		answers: [
		'Franklin Roosevelt',
		'George Washinton',
		'Thomas Jefferson',
		'Theodore Roosevelt'
		],
		correct: 0
		},
		{
		question: 'There are two non-presidents featured on US currency, Benjamin Franklin and...?',
		answers: [
		'Alexander Hamilton',
		'John Jay',
		'Samuel Adams',
		'John Hancock'
		],
		correct: 0
		},
		{
		question: 'How many presidents have been assassinated while in office?',
		answers: [
		'1',
		'2',
		'3',
		'4'
		],
		correct: 3
		},
		{
		question: 'What president had the shortest term?',
		answers: [
		'Zachary Taylor',
		'William Henry Harrison',
		'James Buchanan',
		'Warren Harding'
		],
		correct: 1
		}
	];

	console.log(qA[0].question);
	console.log(qA[0].answers[0])
});