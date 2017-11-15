var elements = document.getElementsByClassName('hot');
if(elements.length >= 1){
	alert("hello!");
}
var firstItem = elements[0];
firstItem.textContent = 'hello';
var cultscore = 5.8;
var secondListNode = document.createElement('li');
var newText = document.createTextNode('Star Wars' + ' ' + cultscore);
secondListNode.appendChild(newText);
var position = firstItem;
position.appendChild(secondListNode);