function  Player(identity) {
  this.identity = identity;
  this.wins = 0; 
  this.setListener();
  this.position;


}



var $box = $('.col-md-4');

var b = [null, null, null, null, null, null, null, null, null];

var temp = [];

Player.prototype.setListener = function () {
//if player X
	var thisPosition = this.position
  $box.on('click', function (e) {
  	console.log(e.target.dataset.index);
  	var a = e.target.dataset.index;
  	b[a] = 'X';
  	thisPosition = b[a];
  })
 //else player O
}




function placeMark(value, index) {
	$(box).text('value');

	

}


