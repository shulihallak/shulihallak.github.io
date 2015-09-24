var board = $('.container');

var boxes = $('.col-md-4');	

var values = ['X', 'O'];

var box1 = $('#a'),
 	box2 = $('#b'),
 	box3 = $('#c'),
 	box4 = $('#d'),
 	box5 = $('#e'),
 	box6 = $('#f'),
 	box7 = $('#g'),
 	box8 = $('#h'),
 	box9 = $('#i');

var moves = 0;

var Game = {
	playerScore: 0,
	computerScore: 0,



	updatePlayerScore: function () {
		this.playerScore +=1;
	},
	updateComputerScore: function () {
		this.computerScore +=1;
	},
	updateScoreView: function() {
		$('.badge').text("Current Player Score: " + this.playerScore + "\n" + "Current Computer Score" + this.computerScore );
	},

	
	
	// set conditionals for allowing 'X'
	setX: function () {
		
		$(box1).on('click', function (){
			if ((box1 != 'X') && (box1 != 'O')) {
				$(box1).text('X');
				box1 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box2).on('click', function (){
			if ((box2 != 'X') && (box2 != 'O')) {
				$(box2).text('X');
				box2 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box3).on('click', function (){
			if ((box3 != 'X') && (box3 != 'O')) {
				$(box3).text('X');
				box3 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})
		
		$(box4).on('click', function (){
			if ((box4 != 'X') && (box4 != 'O')) {
				$(box4).text('X');
				box4 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box5).on('click', function (){
			if ((box5 != 'X') && (box5 != 'O')) {
				$(box5).text('X');
				box3 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box6).on('click', function (){
			if ((box6 != 'X') && (box6 != 'O')) {
				$(box6).text('X');
				box6 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})
		
		$(box7).on('click', function (){
			if ((box7 != 'X') && (box7 != 'O')) {
				$(box7).text('X');
				box7 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box8).on('click', function (){
			if ((box8 != 'X') && (box8 != 'O')) {
				$(box8).text('X');
				box8 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})

		$(box9).on('click', function (){
			if ((box9 != 'X') && (box9 != 'O')) {
				$(box9).text('X');
				box3 = 'X';
				moves +=1;
				setComputerMove();
			
			} else { 
				console.log('try again');
			}
		})
		if (moves == 9) {
			tie();
		}
	},	
	
	setComputerMove: function () {
		//sets a random # from 1 - 9 
		var random = Math.floor(Math.random() * 9) + 1;

		while(x) {
		if ((random == 1) && (box1 != 'X') && (box1 != 'O')) {
			$(box1).text('O');
			box1 = 'O';
			moves +=1;
			x = true;
		}
		if ((random == 2) && (box2 != 'X') && (box2 != 'O')) {
			$(box2).text('O');
			box2 = 'O';
			moves +=1;
			x = true;
		}
		if ((random == 3) && (box3 != 'X') && (box3 != 'O')) {
			$(box3).text('O');
			box3 = 'O';
			moves +=1;
			x = true;
		}
		if ((random == 4) && (box4 != 'X') && (box4 != 'O')) {
			$(box4).text('O');
			box4 = 'O';
			moves +=1;
			x = true;
		}
		if (random == 5 && box5 != 'X' && box5 != 'O') {
			$(box5).text('O');
			box5 = 'O';
			moves +=1;
			x = true;
		}
		if (random == 6 && box6 != 'X' && box6 != 'O') {
			$(box6).text('O');
			box6 = 'O';
			moves +=1;
			x = true;
		}
		if (random == 7 && box7 != 'X' && box7 != 'O') {
			$(box7).text('O');
			box7 = 'O';
			x = true;
			moves +=1;
		}
		if (random == 8 && box8 != 'X' && box8 != 'O') {
			$(box8).text('O');
			box8 = 'O';
			x = true;
			moves +=1;
		}
		if (random == 9 && box9 != 'X' && box9 != 'O') {
			$(box9).text('O');
			box9 = 'O';
			x = true;
			moves +=1;
		}
		x = false;
		break;

}
}
}
	

function determineWinner () {
	if (box1 == 'X' && box2 == 'X' && box3 == 'X') {
		xWins();
	}
	if (box4 == 'X' && box5 == 'X' && box6 == 'X') {
		xWins();
	}
	if (box7 == 'X' && box8 == 'X' && box9 == 'X') {
		xWins();
	}
	if (box1 == 'X' && box4 == 'X' && box7 == 'X') {
		xWins();
	}
	if (box2 == 'X' && box5 == 'X' && box8 == 'X') {
		xWins();
	}
	if (box3 == 'X' && box6 == 'X' && box9 == 'X') {
		xWins();
	}
	if (box1 == 'X' && box5 == 'X' && box9 == 'X') {
		xWins();
	}
	if (box3 == 'X' && box5 == 'X' && box7 == 'X') {
		xWins();
	}
	//determine Y
	if (box1 == 'Y' && box2 == 'Y' && box3 == 'Y') {
		yWins();
	}
	if (box4 == 'Y' && box5 == 'Y' && box6 == 'Y') {
		yWins();
	}
	if (box7 == 'Y' && box8 == 'Y' && box9 == 'Y') {
		yWins();
	}
	if (box1 == 'Y' && box4 == 'Y' && box7 == 'Y') {
		yWins();
	}
	if (box2 == 'Y' && box5 == 'Y' && box8 == 'Y') {
		yWins();
	}
	if (box3 == 'Y' && box6 == 'Y' && box9 == 'Y') {
		yWins();
	}
	if (box1 == 'Y' && box5 == 'Y' && box9 == 'Y') {
		yWins();
	}
	if (box3 == 'X' && box5 == 'X' && box7 == 'X') {
		xWins();
	}
	
}