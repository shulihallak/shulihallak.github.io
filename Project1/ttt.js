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

	// } else if (this.identity == 'O') {
	// 	 $box.on('click', function (e) {
	//   	console.log(e.target.dataset.index);
	//   	var a = e.target.dataset.index;
	//   	b[a] = 'O';
	//   	$(this).text('O');
	// 	})
	// }
}
}

function autoplayer () {

  		var random = Math.floor(Math.random() * 9);
		//loop through b array
		for (var i = 0; i < b.length; i++) {
			//if null, set value
			if (b[random] == null) {
				b[random] = 'O';
			var next = $box[random];
			$(next).text('O');
 
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


// var PlayerX = {
// 	identity: 'X',
// 	wins: 0,
// 	function: setListener('X')
// }


// var PlayerO = {
// 	identity: 'O',
// 	wins: 0,
// 	auto: true,
// 	function: autoplayer()
// }



// function setListener (identity) {
// 	if (PlayerX.identity == 'X') {
// 		$box.on('click', function (e) {
// 			console.log(e.target.dataset.index);
// 			var a = e.target.dataset.index;
// 			b[a] = 'X';
// 			$(this).text('X');
// 	})
// 	} else {
// 		console.log('error')
// 	}
// }


// function autoPlayer () {
// 	if (PlayerO.auto) {
// 		var random = Math.floor(Math.random() * 9);
// 		//loop through b array
// 		for (var i = 0; i < b.length; i++) {
// 			//if null, set value
// 			if (b[i] = null) {
// 				b[i] = random;
// 				$(this).text('O');
// 			} else {
// 				console.log('error');
// 			}
// 		}
// 		} 
// 	}




	




