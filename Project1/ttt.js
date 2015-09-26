var $box = $('.col-md-4');

var b = [null, null, null, null, null, null, null, null, null];



function  Player(identity, auto) {
  this.identity = identity;
  this.wins = 0;
  this.auto = auto; 
  
}




Player.prototype.setListener = function (identity) {
//if player X
	if (this.identity == 'X') {
	  $box.on('click', function (e) {
	  	console.log(e.target.dataset.index);
	  	var a = e.target.dataset.index;
	  	b[a] = 'X';
	  	$(this).text('X');
	  	autoplayer();
	  	})

}
}

function autoplayer () {

	function getNull (array) {
    var newIndex = [];
    for (var i = 0; i < array.length; i++) {
    if (array[i] == null) 
    newIndex.push(i)
    }
    return newIndex;

    function setNull () {
    	getNull(b);
    	var random = Math.floor(Math.random() * newIndex.length);
		
		if ((b.indexOf(null) > -1)) {
		for (var j = 0; j < newIndex.length; j++) {
			var index = b[newIndex[j]];
			if(b[random] != null)
			b[random] = 'O';

			var set = $(box)[random];
			$(set).text('O');
    		}
		}
	}
	}

}	
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

function determineWinner () {
	//check all possible conditions for win
	if (b[0] == 'X') {
		if (b[0] == b[1] && b[0] == b[2]) {
			winner = 'X'
			Player.wins +=1;
			console.log("Winner is " + winner + "!");
		}
	}
}

function start () {
	PlayerX.setListener();
}
 

var PlayerX = new Player('X', false);
var PlayerO = new Player('O', true);


function buttons () {
	$('a').on('click', function() {
	if ($('a')[0]) {
		start();
	} else if ($('a')[1]) {
		reset();
	}
	})
}



buttons();



	




