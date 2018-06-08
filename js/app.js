// Global Variables
var catArea = document.querySelector(".cat-area");
var buttons = document.getElementsByTagName("button");

var cats = {
	cat1: {
		name : 'Mary',
		clickCount : 0,
		imgSrc : 'img/playful cat.jpg',
		imgAlt : 'Playful cat'
	},
	cat2: {
		name : 'Minnie',
		clickCount : 0,
		imgSrc : 'img/waiting cat.jpg',
		imgAlt : 'Waiting cat'
	},
	cat3: {
		name : 'Micky',
		clickCount : 0,
		imgSrc : 'img/hidden cat.jpg',
		imgAlt : 'Hidden Cat'
	},
	cat4: {
		name : 'Munk',
		clickCount : 0,
		imgSrc : 'img/scared cat.jpg',
		imgAlt : 'Scared cat'
	},
	cat5: {
		name : 'Mui, Muo and Mua',
		clickCount : 0,
		imgSrc : 'img/kittens.jpg',
		imgAlt : 'Cute kittens'
	}			
};

/*Main functionalities*/

// When pressing a button the name of the cat and the related image appears on screen
for (var i = 0; i < buttons.length; i++) {
	var buttonSelected = buttons[i];

	buttonClicked(buttonSelected, i);

};

// This function add an event listener to the clicked button
function buttonClicked(buttonSelected, index) {
	buttonSelected.addEventListener('click', function(){
		var catSelected = cats['cat'+(index+1)];
		displayNameCat(catSelected);
		displayImageCat(catSelected);
	});
}

// This function display the name of the corresponding selected cat
function displayNameCat(catSelected) {
	var catName = catSelected['name'];
	var nameDisplayed = document.createElement("h3");
	nameDisplayed.textContent = catName;
	catArea.appendChild(nameDisplayed);
};

// This function display the image of the corresponding selected cat
function displayImageCat(catSelected) {
	var catImage = catSelected['imgSrc'];
	var catImageDescription = catSelected['imgAlt'];
	var imageDisplayed = document.createElement("img");
	imageDisplayed.className = "imgSize";
	imageDisplayed.src = catImage;
	imageDisplayed.alt = catImageDescription;
	catArea.appendChild(imageDisplayed);
}