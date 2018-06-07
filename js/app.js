var catElem = document.querySelector(".cat");
var catImage = document.querySelectorAll(".cat-img");
var catCount = document.querySelector(".cat-count");

var clickCounter = 0;

for(var i=0; i<catImage.length; i++) {
	catImage[i].addEventListener('click', function(){
	clickCounter++;
  catCount.innerHTML = clickCounter;
}, false);
};

