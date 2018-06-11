/*Model*/
var model = {
	currentCat : null,
	adminShow: false,
	cats : [
		{
			name : 'Mary',
			clickCount : 0,
			imgSrc : 'img/playful cat.jpg',
			imgAlt : 'Playful cat'
		},
		{
			name : 'Minnie',
			clickCount : 0,
			imgSrc : 'img/waiting cat.jpg',
			imgAlt : 'Waiting cat'
		},
		{
			name : 'Micky',
			clickCount : 0,
			imgSrc : 'img/hidden cat.jpg',
			imgAlt : 'Hidden Cat'
		},
		{
			name : 'Munk',
			clickCount : 0,
			imgSrc : 'img/scared cat.jpg',
			imgAlt : 'Scared cat'
		},
		{
			name : 'Mui, Muo and Mua',
			clickCount : 0,
			imgSrc : 'img/kittens.jpg',
			imgAlt : 'Cute kittens'
		}
	]			
};



/*Octopus*/
var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();
        adminView.hide();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },


    //function runs when 'Admin' button is clicked.
    adminDisplay: function(){
        if (model.adminShow === false) {
            model.adminShow = true;
            adminView.show(); //displays the admin input boxes and buttons
        }
        else if (model.adminShow === true) {
            model.adminShow = false;
            adminView.hide();// hides the admin input boxes and buttons
        }
    },
    
    //hides admin display when cancel button is clicked.
    adminCancel: function(){
        adminView.hide();
    },
    
    //hides admin display and saves new cat data when save button is clicked.
    adminSave: function(){
        model.currentCat.name= adminCatName.value;
        model.currentCat.imgSrc= adminCatURL.value;
        model.currentCat.clickCount= adminCatClicks.value;
        catView.render();
        catListView.render();
        adminView.hide();
	}
};


/*View*/


var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        var currentCat = octopus.getCurrentCat();
        this.catElem = document.querySelector('.cat-area');
        this.catNameElem = document.querySelector('.cat-name');
        this.catImageElem = document.querySelector('.cat-img');
        this.countElem = document.querySelector('.cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};


var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.buttons = document.getElementsByTagName("button");


        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();
        buttons = document.getElementsByTagName("button");


        // loop over the cats
        for (var i = 0; i < buttons.length; i++) {
            // this is the cat we're currently looping over
            var buttonSelected = buttons[i];
            var cat = cats[i];

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            buttonSelected.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

        }
    }
};


var adminView = {
    init: function(){
        this.adminCatName = document.querySelector(".adminCatName");
        this.adminCatURL = document.querySelector(".adminCatURL");
        this.adminCatClicks = document.querySelector(".adminCatClicks");
        var admin = document.querySelector(".admin");
        
        this.adminBtn = document.querySelector(".adminBtn");
        this.adminCancelBtn = document.querySelector(".adminCancelBtn");
        this.adminSaveBtn = document.querySelector(".adminSaveBtn");
        
        this.adminBtn.addEventListener('click', function(){ //shows the admin display.
            octopus.adminDisplay();
        });
        
        this.adminCancelBtn.addEventListener('click', function(){ //hides the admin display without saving any new cat data.
            octopus.adminCancel();
        });
        
        this.adminSaveBtn.addEventListener('click', function(){ //hides the admin display and saves new cat data.
            octopus.adminSave();
        });
        
        this.render();
    },
    
    render: function(){
        var currentCat = octopus.getCurrentCat(); //calls current cat
        this.adminCatName.value = currentCat.name;
        this.adminCatURL.value = currentCat.imgSrc;
        this.adminCatClicks.value = currentCat.clickCount;
    },
    
    show: function(){
    	var admin = document.querySelector(".admin");
        admin.style.display = 'block'; //shows the admin div on index.html
    },
        
    hide: function(){
    	var admin = document.querySelector(".admin");
        admin.style.display = 'none';
    }

};

// make it go!
octopus.init();


// /*Main functionalities*/

// // When pressing a button the name of the cat and the related image appears on screen
// for (var i = 0; i < buttons.length; i++) {
// 	var buttonSelected = buttons[i];

// 	buttonClicked(buttonSelected, i);

// };

// // This function add an event listener to the clicked button
// function buttonClicked(buttonSelected, index) {
// 	buttonSelected.addEventListener('click', function(){
// 		catArea.innerHTML = "";
// 		var catSelected = cats['cat'+(index+1)];
// 		catSelected['clickCount'] = 0;
// 		var headerDisplayed = displayHeaderCat(catSelected);
// 		var imageDisplayed = displayImageCat(catSelected);

// 		//Add the increase click function
// 		increaseClicks(catSelected, headerDisplayed, imageDisplayed);
// 	});
// }

// // This function display the name and the clicks for the corresponding selected cat
// function displayHeaderCat(catSelected) {
// 	var catName = catSelected['name'];
// 	var clicks = catSelected['clickCount'];
// 	var headerDisplayed = document.createElement("h3");
// 	headerDisplayed.textContent = 'Clicks for ' + catName + ' : ' + clicks;
// 	catArea.appendChild(headerDisplayed);

// 	return headerDisplayed;
// };

// // This function display the image of the corresponding selected cat
// function displayImageCat(catSelected) {
// 	var catImage = catSelected['imgSrc'];
// 	var catImageDescription = catSelected['imgAlt'];
// 	var imageDisplayed = document.createElement("img");
// 	imageDisplayed.className = "imgSize";
// 	imageDisplayed.src = catImage;
// 	imageDisplayed.alt = catImageDescription;
// 	catArea.appendChild(imageDisplayed);

// 	return imageDisplayed;
// };

// // This function increases the click counter when the image is clicked
// function increaseClicks(catSelected, headerDisplayed, imageDisplayed) {
// 		var clicks = catSelected['clickCount'];
// 		var catName = catSelected['name'];
// 		imageDisplayed.addEventListener('click', function() {
// 			clicks++;
// 			headerDisplayed.textContent = 'Clicks for ' + catName + ' : ' + clicks;
// 		});
// }