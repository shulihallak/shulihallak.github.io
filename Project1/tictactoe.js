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

	setListeners: function () {
		var theGame = this;

		$('.container').on('click', function (e) {
			console.log(e.target.id);
			var boxID = e.target.id;
			})
	},
	
	setX: function () {
		$(box1).on('click', function (){
			$(box1).text('X');
		})
		$(box2).on('click', function (){
			$(box2).text('X');
		})
		$(box3).on('click', function (){
			$(box3).text('X');
		})
		$(box4).on('click', function (){
			$(box4).text('X');
		})
		$(box5).on('click', function (){
			$(box5).text('X');
		})
		$(box6).on('click', function (){
			$(box6).text('X');
		})
		$(box7).on('click', function (){
			$(box7).text('X');
		})
		$(box8).on('click', function (){
			$(box8).text('X');
		})
		$(box9).on('click', function (){
			$(box9).text('X');
		})
	}	
		

}
	

function determineWinner () {
	
}