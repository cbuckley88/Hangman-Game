

window.onload = function(){
	var lives = 8;
	//I would've got this from the database
 	var answerArray = ['reach for the sky', 'howdy', 'boot',];
 	//creates into individual arrays to index for later
 	var randomWordArray = answerArray[0].split('');

 	// Init hangman onload
 	init();

 	// this creates the dashes(word) on the page
 	function init(){
 		//loops is going the random wordArray (above)...
 		for(var i = 0; i < randomWordArray.length; i ++){
 			//create new h3 element
 			var newH3 = document.createElement("h3"); 
 			// checking for spaces...
 			if( randomWordArray[i] == ' '){
 				// if space create a space element
 				newH3.className = "space";
	 			newH3.innerHTML = ' ';
 			} else {
 				// else create underscore for our letter
				newH3.className = "underscore";
	 			newH3.innerHTML = '_';
 			}
			// give an ID of the index for the letter in  the wordArray
 			newH3.id = "index-" + i;
 			console.log(document.getElementById('dash-container'));
 			//grabs the ID of dash-container and adds a new H3
 			document.getElementById('dash-container').appendChild(newH3);	
 		}
 	};

 	//Tests users keystrokes and displays key on the screen
    document.onkeyup = function (event){
    	var userText = document.getElementById('userText');
		//this test users key stroke for a letter a-z in lower case unsing regex
		if (/^[a-z]$/.test(event.key)) {
			userText.textContent = event.key;

			for(var i = 0; i < randomWordArray.length; i ++) {
				// if the UI keystroke equals a letter in the answerArray... 
				if (event.key == randomWordArray[i]){
					// display letter 
					document.getElementById('index-' + i).innerHTML = event.key;

				} else {
					//lose a life
					
				}
				console.log(event.key, randomWordArray[i], event.key == randomWordArray[i]);
			}
		};
    };
};    

