$(document).ready(function(){
	$('#startQuiz').click(function(){
		$('#startButton').css('display','none');
		$('#quizPaper').css('display','block');
	});

	var qA = [
		[
		'Who was the first president?',
		'What president is not featured on Mt. Rushmore?',
		'There are two non-presidents featured on US currency, Benjamin Franklin and...?',
		'How many presidents have been assassinated while in office?',
		'What president had the shortest term?'
		],
		[
		'John Adams',
		'Andrew Jackson',
		'George Washington',
		'Thomas Jefferson'
		],
		[
		'Franklin Roosevelt',
		'George Washinton',
		'Thomas Jefferson',
		'Theodore Roosevelt'
		],
		[
		'Alexander Hamilton',
		'John Jay',
		'Samuel Adams',
		'John Hancock'
		],
		[
		'1',
		'2',
		'3',
		'4'
		],
		[
		'Zachary Taylor',
		'William Henry Harrison',
		'James Buchanan',
		'Warren Harding'
		],
		[
		'George Washington',
		'Franklin Roosevelt',
		'Alexander Hamilton',
		'Alexander Hamilton',
		'4',
		'William Henry Harrison'
		]
	];

	$('#submitAnswer').click(function(){
		alert(first.number);
		alert(first.question);
	});

	function askQuestion(question, one, two, three, four, answer){
		this.question = question;
		this.one = one;
		this.two = two;
		this.three = three;
		this.four = four;
		this.answer = answer;
	};

	var first = new askQuestion (qA[0][0], qA[1][0],qA[1][1],
		qA[1][2],qA[1][3],qA[6][0]);
	var second = new askQuestion (qA[0][1],qA[2][0],qA[2][1],
		qA[2][2],qA[2][3],qA[6][1]);
	var third = new askQuestion (qA[0][2],qA[3][0],qA[3][1],
		qA[3][2],qA[3][3],qA[6][2]);
	var fourth = new askQuestion (qA[0][3],qA[4][0],qA[4][1],
		qA[4][2],qA[4][3],qA[6][3]);
	var fifth = new askQuestion (qA[0][4],qA[5][0],qA[5][1],
		qA[5][2],qA[5][3],qA[6][4]);

	console.log(first);
	
	// function askQuestion(question){
	// 	var answer = $('#checkBoxId').checked;//checkbox value;
	// 		if(answer == question[0][1]) {
	// 			alert('Correct');
	//  			score++
	//  		} else {
	//  			alert('Sorry. The correct answer is ' + question[0][1]);
	//  		}
	// }

	// for (var i=0, i < questionsAnswers.length, i++) {
	// 	askQuestion(questionsAnswers[i]);
	// };

	// var message = 'You got ' + score;
	// message += ' out of ' + questions.length;
	// message += ' questions correct.';
	// console.log(message);
	
});