function  Player(a) {
  this.identity = a;
  this.wins = 0;
}


 

var $box = $('.col-md-4');

var b = [null, null, null, null, null, null, null, null, null];

function setListener() {
  $box.on('click', function (e) {
  	console.log(e.target.dataset.index);
  	return (e.target.dataset.index);
  	
  })
}


function placeMark(a) {

}


