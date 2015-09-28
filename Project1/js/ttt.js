var $box = $('.col.s4');
// var box0 = $('#zero');
// var box1 = $('#one');
// var box2 = $('#two');
// var box3 = $('#three');
// var box4 = $('#four');
// var box5 = $('#five');
// var box6 = $('#six');
// var box7 = $('#seven');
// var box8 = $('#eight');



// var b = [null, null, null, null, null, null, null, null, null];

var nameFieldX = $('#first_name1');
var nameFieldO = $('#first_name2');
var scoreboard = $('#scoreboard');

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

//get input name values
    

    function playX () {

    var b = new Array(9);
    	
     $box.one('click', function (e) {
        console.log(this);
        var a = e.target.dataset.index;
        b[a] = 'X';
        $(this).text('X');
        playO();     
  })
 }
    function playO() {

    $box.one('click', function (e) {
        console.log(this);
        var b = e.target.dataset.index;
        b[b] = 'O';
        $(this).text('O');

        playX();

})
}






// Player.prototype.setListener = function () {
// //if player X
// 	if (PlayerX.turn == 'X') {
// 		if (this.identity == 'X') {
// 		  $box.on('click', function (e) {
// 		  	console.log(e.target.dataset.index);
// 		  	var a = e.target.dataset.index;
// 		  	b[a] = 'X';

// 		  	$(this).text('X');
// 		  		// determineWinner('X');
// 		  		this.nextTurn = 'O';
	
// 		 })
// 	 }
// 	}  
// 	if (PlayerO.turn == 'O') {


// 		 if (this.identity == 'O' && PlayerO.autoplayer == false) {
// 			$box.on('click', function (e){
// 			console.log(e.target.dataset.index);
// 			var b = e.target.dataset.index;
// 			b[b] = 'O';
// 			$(this).text('O');
// 			// determineWinner('O');
// 			this.nextTurn = 'X';
// 		})
// 	}
// 	}
// }




// function autoplayer () {

//   		var random = Math.floor(Math.random() * 9);
// 		//loop through b array
		
// 		do {
// 		for (var i = 0; i < b.length; i++) {
// 			//if null, set value
// 			if (b[random] == null) {
// 				b[random] = 'O';
// 				var next = $box[random];
// 				$(next).text('O');
// 				nextTurn();
// 			}
// 		}
// 		} while (b.indexOf(null));
// }



	
		//loop through b array
		//need to check that b[] has more than 0 nulls
		// for (var i = 0; i < b.length; i++) {
			
		// 		if ((b.findIndex(function(a) {return a == null;})) >= 0) {  // for loop through it, if array[i] === null, 
		// 			if (b[random] == null) {
		// 			b[random] = 'O';
		// 			var next = $box[random];
		// 			$(next).text('O');

		// 			}
		// 		}else if ((b.findIndex(function(a) {return a == null;})) < -1) {
		// 			console.log('is every square full?');
		// 		}
				
		// 	}
			 	
			 	

		
			 
		// while ( b[0] != null || b[1] != null || b[2] != null || b[3] != null || b[4] != null || b[5] != null || b[6] != null || b[7] != null || b[8] != null) {
			//if null, set value	
		


var winner = null;

// where z is X or O
//creat row, col, diag var
	// var row1 = (b[0] == b[1] == b[2]),
	// 	b[3] == b[4] == b[5]  = (b[3] == b[4] == b[5]),
	// 	b[6] == b[7] == b[8]  = (b[6] == b[7] == b[8]),
	// 	b[0] == b[3] == b[6]  = (b[0] == b[3] == b[6]),
	// 	b[1] == b[4] == b[7]  = (b[1] == b[4] == b[7]),
	// 	b[2] == b[5] == b[8]  = (b[2] == b[5] == b[8]),
	// 	b[0] == b[4] == b[8] = (b[0] == b[4] == b[8]),
	// 	b[2] == b[4] == b[6] = (b[2] == b[4] == b[6]); 

function determineWinner () {
	
	//check all possible conditions for win

	if (b[0] == 'X') {
		if (b[0] == 'X' && b[1] == 'X' && b[2] == 'X') {
			winner = 'X';
			PlayerX.wins +=1;
			console.log("Winner is X!");
			resetGame();
		} else if (b[0] == b[3] == b[6]) {
			winner = 'X';
			console.log("Winner is " + nameX + "!");
			resetGame();
		} else if (b[0] == b[4] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
		    	playO();  
		    }
	}	if (b[1] == 'X') {
		if(b[3] == b[4] == b[5]) {
			winner = 'X';
			console.log("Winner is " + nameX + "!");
			resetGame();
		} else if (b[1] == b[4] == b[7]) {
			winner = 'X';
			console.log("Winner is " + nameX + "!");
			resetGame();
		} else {
				playO();
			}
	} if (b[2] == 'X') {
		if (b[6] == b[7] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[5] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[4] == b[6]) {
			winner = 'X';
			resetGame();
		} else {
			playO();
			resetGame();
		}
	} if (b[3] == 'X') {
		if(b[3] == b[4] == b[5]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[0] == b[3] == b[6]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
			playO();
			}
	
	} if (b[4] == 'X') {
		if(b[3] == b[4] == b[5]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[1] == b[4] == b[7]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[0] == b[4] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[4] == b[6]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
			playO();
		}
	} if (b[5] == 'X') {
		if(b[6] == b[7] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[5] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
			playO();
		}
	} if (b[6] == 'X') {
		if(b[6] == b[7] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[0] == b[3] == b[6]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[4] == b[6]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
			playO();
		}
	} if (b[7] == 'X') {
		if (b[6] == b[7] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[1] == b[4] == b[7]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else {
			playO();
		}
	} if (b[8] == 'X') {
		if(b[6] == b[7] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[5] == b[8]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		} else if (b[2] == b[4] == b[6]) {
			winner = 'X';
			console.log("Winner is " + winner + "!");
			resetGame();
		}else {
			playO();
		}
	}
}


function start () {
	playX();	
}
 
function resetGame () {
	setTimeout(function () {
		$box.text('');
	}, 2000);
}



function buttons () {
	$('.waves-effect').on('click', function() {
	 
		start();
	})
}


buttons();



	

// styling

var $buttons = $('button');

$(buttons).find('button').css("background-color", '#D74B4B');



