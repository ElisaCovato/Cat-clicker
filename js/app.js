var catElem = document.querySelector(".cat");
var catImage = document.querySelector(".cat-img");
var catCount = document.querySelector(".cat-count");

var clickCounter = 0;

catImage.addEventListener('click', function(){
	clickCounter++;
  catCount.innerHTML = clickCounter;
}, false);