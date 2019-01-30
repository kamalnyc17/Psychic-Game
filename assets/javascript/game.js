// Initialization Section	
var emptyString = "";
var getRandomLetter;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var totalEntry = [];
var lose = [];
var winN = 0;
var loseN = 0;
var entryLeft = 10;

// Event listener section
window.addEventListener('keydown', function() { 
		
    if (entryLeft > 0){  // as long as any attempt left it will execute this section
        getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        var usercode = event.charCode || event.keyCode;  // Get the Unicode value
        var userletter = String.fromCharCode(usercode).toLowerCase();  // Convert the value into a character	

        // keeping the score here
        if (userletter === getRandomLetter) {
            winN++;
        } else {
            loseN++;
        }
        
        totalEntry.push(userletter);					
        entryLeft--;

        // display updated score
        document.getElementById("userwin").innerHTML = winN;
        document.getElementById("userlose").innerHTML = loseN;
        document.getElementById("userguess").innerHTML = entryLeft;
        document.getElementById("userguesslist").innerHTML = totalEntry;            
    } 
    if (entryLeft <= 0) { /* when no more attemp left, it will display game over */        
        document.getElementById("gameover").innerHTML = "GAME OVER! Reload the page to restart.";
    }
});