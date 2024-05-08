let myImage = document.querySelector('img');
myImage.addEventListener('click', function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/151-1513422_big.jpg') {
		myImage.setAttribute('src', 'images/2.jpg');
	} else {
		myImage.setAttribute('src', 'images/151-1513422_big.jpg');
	}
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Veuillez sasir votre nom. ');
	localStorage.setItem('nom', myName);
	myHeading.textContent = 'Good morning, ' + myName;
}

if (!localStorage.getItem('nom')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('nom');
	myHeading.textContent = 'Salut, ' + storedName;
}

myButton.addEventListener('click', function(){
	setUserName();
});