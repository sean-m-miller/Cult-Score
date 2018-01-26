var elFilm = document.getElementById('userFilm');
elFilm.addEventListener('submit', function(){
	alert.log("Hello!");
}, false);

function find(){
	var parEl = document.getElementById('yourFilm');
	//var firstItem = parEl[0];
	parEl.textContent = 'Hello';
}
function filmsNearYou(){
	var x = document.getElementById("userFilm");
	var elements = document.getElementsByClassName('hot');
	var firstItem = elements[0];
	firstItem.textContent = 'hello';
	var cultscore = 5.8;
	var secondListNode = document.createElement('li');
	var newText = document.createTextNode(x.value + ' ' + cultscore);
	secondListNode.appendChild(newText);
	firstItem.appendChild(secondListNode);
}
