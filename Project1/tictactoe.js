var board = [0,0,0,0,0,0,0,0,0];

var labels = 'abcdefghi';

// var wins = [
// 	[a,b,c]
// 	[d,e,f]
// 	[h,i,j]
// 	[a,d,g]
// 	[b,e,h]
// 	[c,f,i]

// ];

var Game = {
	playerScore: 0,
	computerScore: 0,

	updateScore: function (scoreIncrement) {
		this.score +=scoreIncrement;
	},
	updateScoreView: function() {
		$('.badge').text("Current Player Score: " + this.playerScore + "\n" + "Current Computer Score" + this.computerScore );
	}
	
}

var player = {

}

var autoplayer = {

}
