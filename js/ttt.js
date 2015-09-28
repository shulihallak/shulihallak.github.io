var $box = $('.col.s4');


var nameFieldX = $('#first_name1');
var nameFieldO = $('#first_name2');
var scoreboard = $('#scoreboard');
var winnerBoard = $('.winner');

function  Player(identity, auto, turn) {
  this.identity = identity;
  this.wins = 0;
  this.auto = auto; 
  this.turn = turn;
  
}

var nameX;
var nameO;


$(nameFieldX).on('keypress', function (e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			nameX = $(this).val();
			nameFieldX.text("val");
		}
		scoreboard.text( nameX + " score:  " + PlayerX.wins + " | " + nameO  + " score: " + PlayerO.wins);
	});

$(nameFieldO).on('keypress', function (e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			nameO = $(this).val();
			nameFieldO.text("val");
		}
		scoreboard.text( nameX + " score:  " + PlayerX.wins + " | " + nameO  + " score: " + PlayerO.wins);
	}); 


var PlayerX = new Player('X', false, nameX);
var PlayerO = new Player('O', false, nameO);
 
function updateScore () {
	scoreboard.text("Player X score:  " +  PlayerX.wins + " | " + "Player O score:  " + PlayerO.wins) 
}

//get input name values
    
    var b = new Array(9);

    function playX () {

    
    	
     $box.one('click', function (e) {
        console.log(this);
        var a = e.target.dataset.index;
        b[a] = 'X';
        $(this).text('X');
        determineWinnerX();
        playO();     
  })
 }
    function playO() {


    $box.one('click', function (e) {
        console.log(this);
        var a = e.target.dataset.index;
        b[a] = 'O';
        $(this).text('O');
        determineWinnerO();
        playX();

})
}



function determineWinnerX () {

	function winnerX () {
			winner = 'X';
			PlayerX.wins +=1;
			winnerBoard.text("Winner is X!");
			updateScore();
	}
	
	//check all possible conditions for win

	if (b[0] == 'X') {
		if (b[0] == 'X' && b[1] == 'X' && b[2] == 'X') {
			winnerX();
			
		} else if (b[0] == 'X' && b[3] ==  'X' && b[6] == 'X') {
			winnerX();
		} else if (b[0] == 'X' && b[4] ==  'X' && b[8] == 'X') {
			winnerX();
		} else {
		    	playO();  
		    }
	}	if (b[1] == 'X') {
		if(b[0] == 'X' && b[1] == 'X' && b[2] == 'X') {
			winnerX();
		} else if (b[1] == 'X' && b[4] == 'X' && b[7] == 'X') {
			winnerX();
		} else {
				playO();
			}
	} if (b[2] == 'X') {
		if (b[0] == 'X' && b[1] == 'X' && b[2]) {
			winnerX();
		} else if (b[2] == 'X' && b[5] == 'X' && b[8]) {
			winnerX();
		} else if ([2] == 'X' && b[4] == 'X' && b[6]) {
			winnerX();
		} else {
			playO();
		}
	} if (b[3] == 'X') {
		if(b[3] == 'X' && b[4] == 'X' && b[5]) {
			winnerX();
		} else if (b[2] == 'X' && b[4] == 'X' && b[6] == 'X') {
			winnerX();
		} else {
			playO();
			}
	
	} if (b[4] == 'X') {
		if(b[1] == 'X' && b[4] == 'X' && b[7] == 'X') {
			winnerX();
		} else if (b[3] == 'X' && b[4] == 'X' && b[5] == 'X') {
			winnerX();
		} else if (b[0] == 'X' && b[4] == 'X' && b[8] == 'X') {
			winnerX();
		} else if (b[2] == 'X' && b[4] == 'X' && b[6] == 'X') {
			winnerX();
		} else {
			playO();
		}
	} if (b[5] == 'X') {
		if(b[3] == 'X' && b[4] == 'X' && b[5] == 'X') {
			winnerX();
		} else if ([2] == 'X' && b[5] == 'X' && b[8] == 'X') {
			winnerX();
		} else {
			playO();
		}
	} if (b[6] == 'X') {
		if(b[6] == 'X' && b[7] == 'X' && b[8] == 'X') {
			winnerX();
		} else if (b[0] == 'X' && b[3] == 'X' && b[6] == 'X') {
			winnerX();
		} else if (b[2] == 'X' && b[4] == 'X' && b[6] == 'X') {
			winnerX();
		} else {
			playO();
		}
	} if (b[7] == 'X') {
		if (b[6] == 'X' && b[7] == 'X' && b[8] == 'X') {
			winnerX();
		} else if (b[1] == 'X' && b[4] == 'X' && b[7] == 'X') {
			winnerX();
		} else {
			playO();
		}
	} if (b[8] == 'X') {
		if(b[6] == 'X' && b[7] == 'X' && b[8] == 'X') {
			winnerX();
		} else if (b[2] == 'X' && b[5] == 'X' && b[8] == 'X') {
			winnerX();
		} else if (b[0] == 'X' && b[4] == 'X' && b[8] == 'X') {
			winnerX();
		}else {
			playO();
		}
	}
}

function determineWinnerO () {

	function winnerO () {
			winner = 'O';
			PlayerO.wins +=1;
			winnerBoard.text("Winner is X!");
			updateScore();
	}
	
	//check all possible conditions for win

	if (b[0] == 'O') {
		if (b[0] == 'O' && b[1] == 'O' && b[2] == 'O') {
			winnerO();
			
		} else if (b[0] == 'O' && b[3] ==  'O' && b[6] == 'O') {
			winnerO();
		} else if (b[0] == 'O' && b[4] ==  'O' && b[8] == 'O') {
			winnerO();
		} else {
		    	playO();  
		    }
	}	if (b[1] == 'O') {
		if(b[0] == 'O' && b[1] == 'O' && b[2] == 'O') {
			winnerO();
		} else if (b[1] == 'O' && b[4] == 'O' && b[7] == 'O') {
			winnerO();
		} else {
				playO();
			}
	} if (b[2] == 'O') {
		if (b[0] == 'O' && b[1] == 'O' && b[2]) {
			winnerO();
		} else if (b[2] == 'O' && b[5] == 'O' && b[8]) {
			winnerO();
		} else if ([2] == 'O' && b[4] == 'O' && b[6]) {
			winnerO();
		} else {
			playO();
		}
	} if (b[3] == 'O') {
		if(b[3] == 'O' && b[4] == 'O' && b[5]) {
			winnerO();
		} else if (b[2] == 'O' && b[4] == 'O' && b[6] == 'O') {
			winnerO();
		} else {
			playO();
			}
	
	} if (b[4] == 'O') {
		if(b[1] == 'O' && b[4] == 'O' && b[7] == 'O') {
			winnerO();
		} else if (b[3] == 'O' && b[4] == 'O' && b[5] == 'O') {
			winnerO();
		} else if (b[0] == 'O' && b[4] == 'O' && b[8] == 'O') {
			winnerO();
		} else if (b[2] == 'O' && b[4] == 'O' && b[6] == 'O') {
			winnerO();
		} else {
			playO();
		}
	} if (b[5] == 'O') {
		if(b[3] == 'O' && b[4] == 'O' && b[5] == 'O') {
			winnerO();
		} else if ([2] == 'O' && b[5] == 'O' && b[8] == 'O') {
			winnerO();
		} else {
			playO();
		}
	} if (b[6] == 'O') {
		if(b[6] == 'O' && b[7] == 'O' && b[8] == 'O') {
			winnerO();
		} else if (b[0] == 'O' && b[3] == 'O' && b[6] == 'O') {
			winnerO();
		} else if (b[2] == 'O' && b[4] == 'O' && b[6] == 'O') {
			winnerO();
		} else {
			playO();
		}
	} if (b[7] == 'O') {
		if (b[6] == 'O' && b[7] == 'O' && b[8] == 'O') {
			winnerO();
		} else if (b[1] == 'O' && b[4] == 'O' && b[7] == 'O') {
			winnerO();
		} else {
			playO();
		}
	} if (b[8] == 'O') {
		if(b[6] == 'O' && b[7] == 'O' && b[8] == 'O') {
			winnerO();
		} else if (b[2] == 'O' && b[5] == 'O' && b[8] == 'O') {
			winnerO();
		} else if (b[0] == 'O' && b[4] == 'O' && b[8] == 'O') {
			winnerO();
		}else {
			playO();
		}
	}
}

function start () {
	playX();
	updateScore();	
}
 
// function resetGame () {
// 	setTimeout(function () {
// 		$box.text('');
// 	}, 2000);
// }



function buttons () {
	$('.waves-effect').on('click', function() {
	 
		start();
	})
}


buttons();



	

// styling

var $buttons = $('button');

$(buttons).find('button').css("background-color", '#D74B4B');



