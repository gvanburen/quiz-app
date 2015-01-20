$(document).ready(function(){
	//Click on the start button to start the game
	$('#startQuiz').click(function(event){
		event.preventDefault();
		startQuiz();
	});


	function startQuiz() {
		//Clear the screen and display the quiz
		$('#startButton').hide();
		$('#quizPaper').show();
	
		//Display one question at a time
		
		//Checks answers against correct answer
		$('#submitAnswer').click(function(event){
			event.preventDefault();
			//Check answer
			
			var answerLong = $('input:checked').parent().html();
			var answer = answerLong.replace('<input type="checkbox">','');
			if (answer == questions[i].answer){
				alert("Correct!")
			} else {
				alert("Incorrect")
			};
		});
		/*After clicking submit button
		- Hide the current question
		- Display the next question
		*/

	};

	






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

	function askQuestion(question, one, two, three, four, answer){
		
		this.UL = $('#quizChoices');

		this.question = question;
		this.UL.append('<h3 id="actualQuestion">' + this.question + '</h3>');

		this.one = one;
		this.UL.append('<li><input type="checkbox">' + this.one + '</input></li>');

		this.two = two;
		this.UL.append('<li><input type="checkbox">' + this.two + '</input></li>');
		
		this.three = three;
		this.UL.append('<li><input type="checkbox">' + this.three + '</input></li>');

		this.four = four;
		this.UL.append('<li><input type="checkbox">' + this.four + '</input></li>');

		this.UL.append('<li><button id="submitAnswer">Submit</button></li>')

		this.answer = answer;

		this.displayQuestion = $(this).hide();

	};
	
	//Create Instances of the Question 
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
	var questions = [first, second, third, fourth, fifth];

	//On click hide current array value and show the next
	// $('#submitAnswer').click(function(event){
	// 	event.preventDefault();
	// 	//Check answer
	// 	var answer = $('input:checked').val();
	// 	if (answer == questions[0].answer){
	// 		alert("yes!")
	// 	};
	// });

	// var message = 'You got ' + score;
	// message += ' out of ' + questions.length;
	// message += ' questions correct.';
	// console.log(message);
	
});