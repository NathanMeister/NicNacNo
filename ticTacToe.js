/*
	Creator: 	N. Meister, nathanmeister.001@gmail.com
	Date:		04/2017
	Purpose:	A JS file for tic-tac-toe game.
				It tracks wins and losses across games,
				just don't reload the page.
	
*/
//Global variable
var winTrue;
function ticTac() {
	//variables for elements of the board
	var upLeft;
	var upMiddle;
	var upRight;
	var midLeft;
	var midMiddle;
	var midRight;
	var lowLeft;
	var lowMiddle;
	var lowRight;
	//array to check for win
	var winGame;
	
	//track number of pieces placed per X and O players
	var countX;
	var countO;
	
	//elements to control who's turn it is
	var buttonX;
	var buttonO;
	var clickedX;
	var clickedO;
	var clear;
	
	//tracking wins
	var winTrackX;
	var winTrackO;
	var trackerO;
	var trackerX;
	var winStatementX;
	var winStatementO;
	//in case the game doesn't check the winner before the next turn
	//I think I fixed this by moving when the winner gets checked.
	var forceCheck;
	
	//array to check for wins. " " replaced with either X or O
	//[0,1,2 = first row | 3,4,5 = second row | 6,7,8] = third row
	winGame = [" "," "," "," "," "," "," "," "," "];

	//track winner across games
	winTrackX = 0;
	winTrackO = 0;
	
	//used for the if statement to check for a winner.
	countX = 0;
	countO = 0;
	
	//grab elements off the html page
	upLeft = document.getElementById("upLeft");
	upMiddle = document.getElementById("upMiddle");
	upRight = document.getElementById("upRight");
	midLeft = document.getElementById("midLeft");
	midMiddle = document.getElementById("midMiddle");
	midRight = document.getElementById("midRight");
	lowLeft = document.getElementById("lowLeft");
	lowMiddle = document.getElementById("lowMiddle");
	lowRight = document.getElementById("lowRight");

	//grab buttons off the html page
	buttonX = document.getElementById("X");
	buttonO = document.getElementById("O");
	pid = document.getElementById("ugh");
	trackerO = document.getElementById("winsO");
	trackerX = document.getElementById("winsX");
	
	//function to turn on the force win check
	debug();
	forceCheck = document.getElementById("forceCheck");
	
	//reset the board without losing the win/loss data
	clear = document.getElementById("clear");
	clear.onclick = function() {
		upLeft.innerHTML = "#";
		winGame[0] = " ";
		countX = 0;
		countO = 0; 
		upMiddle.innerHTML = "#";
		winGame[1] = "X";
		upRight.innerHTML = "#";
		winGame[2] = " ";
		midLeft.innerHTML = "#";
		winGame[3] = " ";
		midMiddle.innerHTML = "#";
		winGame[4] = " ";
		midRight.innerHTML = "#";
		winGame[5] = " ";
		lowLeft.innerHTML = "#";
		winGame[6] = " ";
		lowMiddle.innerHTML = "#";
		winGame[7] = " ";
		lowRight.innerHTML = "#";
		winGame[8] = " ";
	}
	//When X is selected, all # will change to X if clicked.
	buttonX.onclick = function() { 
		//when turn switches seems to be the best time to check for winning.
		//inverted who it checks for winning to prevent issue of a loss for one
		//but they get a win because they already clicked.
		if(countO >= 3) {
			//function to check for win for X
			checkForWinO(winGame[0],winGame[1],winGame[2],winGame[3],winGame[4],winGame[5],winGame[6],winGame[7],winGame[8]);
			if(winTrue === true) {
				winTrackO += 1;
				winStatementO = "O wins = " + winTrackO;
				trackerO.innerHTML = winStatementO;
			}
		}
		/* vestigal piece
		clickedX = true;
		clickedO = false;
		*/
		pid.innerHTML = "<p id='turn'>X's turn</p>";
		upLeft.onclick = function() {
			upLeft.innerHTML = "X";
			winGame[0] = "X";
			countX += 1;
		}
		upMiddle.onclick =  function() {
			upMiddle.innerHTML = "X";
			winGame[1] = "X";
			countX += 1;
		}
		upRight.onclick = function() {
			upRight.innerHTML = "X";
			winGame[2] = "X";
			countX += 1;
		}
		midLeft.onclick = function() {
			midLeft.innerHTML = "X";
			winGame[3] = "X";
			countX += 1;
		}
		midMiddle.onclick =  function() {
			midMiddle.innerHTML = "X";
			winGame[4] = "X";
			countX += 1;
		}
		midRight.onclick = function() {
			midRight.innerHTML = "X";
			winGame[5] = "X";
			countX += 1;
		}
		lowLeft.onclick =  function() {
			lowLeft.innerHTML = "X";
			winGame[6] = "X";
			countX += 1;
		}
		lowMiddle.onclick = function() {
			lowMiddle.innerHTML = "X";
			winGame[7] = "X";
			countX += 1;
		}
		lowRight.onclick =  function() {
			lowRight.innerHTML = "X";
			winGame[8] = "X";
			countX += 1;
		}
	}
	//When O is selected, all # will change to O if clicked.
	buttonO.onclick = function() {
		//when turn switches seems to be the best time to check for winning.
		if(countX >= 3) {
			//function to check for win for X
			checkForWinX(winGame[0],winGame[1],winGame[2],winGame[3],winGame[4],winGame[5],winGame[6],winGame[7],winGame[8]);			
			if(winTrue === true) {
				winTrackX+= 1;
				winStatementX =  "X wins = " + winTrackX;
				trackerX.innerHTML = winStatementX;
			} 
		}
		/* vestigal piece
		clickedO = true;
		clickedX = false;
		*/
		pid.innerHTML = "<p id='turn'>O's turn</p>";
		upLeft.onclick = function() {
			upLeft.innerHTML = "O";
			winGame[0] = "O";
			countO += 1;
		}
		upMiddle.onclick = function() {
			upMiddle.innerHTML = "O";
			winGame[1] = "O";
			countO += 1;
		}
		upRight.onclick = function() {
			upRight.innerHTML = "O";
			winGame[2] = "O";
			countO += 1;
		} 
		midLeft.onclick = function() {
			midLeft.innerHTML = "O";
			winGame[3] = "O";
			countO += 1;
		}
		midMiddle.onclick = function() {
			midMiddle.innerHTML = "O";
			winGame[4] = "O";
			countO += 1;
		}
		midRight.onclick = function() {
			midRight.innerHTML = "O";
			winGame[5] = "O";
			countO += 1;
		}
		lowLeft.onclick = function() {
			lowLeft.innerHTML = "O";
			winGame[6] = "O";
			countO += 1;
		}
		lowMiddle.onclick = function() {
			lowMiddle.innerHTML = "O";
			winGame[7] = "O";
			countO += 1;
		}
		lowRight.onclick = function() {
			lowRight.innerHTML = "O";
			winGame[8] = "O";
			countO += 1;
		}
	}
	//created as there was an issue with checking the winner, and sometimes
	//the winner didn't receive the win. 
	forceCheck.onclick = function() {
		if(countX >= 3) {
			checkForWinX(winGame[0],winGame[1],winGame[2],winGame[3],winGame[4],winGame[5],winGame[6],winGame[7],winGame[8]);			
			if(winTrue === true) {
				winTrackX+= 1;
				winStatementX =  "X wins = " + winTrackX;
				trackerX.innerHTML = winStatementX;
			}
		} else {
			alert("X has not won yet");
		}
		if(countO >= 3) {
			checkForWinO(winGame[0],winGame[1],winGame[2],winGame[3],winGame[4],winGame[5],winGame[6],winGame[7],winGame[8]);
			if(winTrue === true) {
				winTrackO += 1;
				winStatementO = "O wins = " + winTrackO;
				trackerO.innerHTML = winStatementO;
			}
		} else {
			alert("O has not won yet");
		}
	}
}
//Function checks to see if X is the winner. 
//a,b,c,d,e,f,g,h,i = winGame array [0,1,2,3,4,5,6,7,8] 
function checkForWinX(a,b,c,d,e,f,g,h,i){
	//across X win
	if(a === "X" && b === "X" && c ==="X") {
		alert("X Wins!"); //across win top
		winTrue = true;
	} else if (d === "X" && e === "X" && f ==="X") {
		alert("X Wins!"); //across win middle
		winTrue = true;
	} else if(g === "X" && h === "X" && i ==="X") {
		alert("X Wins!"); //across win bottom
		winTrue = true;
	} else if(a === "X" && d === "X" && g ==="X") {
		alert("X Wins!"); //down win left
		winTrue = true;
	} else if(b === "X" && e === "X" && h ==="X") {
		alert("X Wins!"); //down win middle.
		winTrue = true;
	} else if(c === "X" && f === "X" && i ==="X") {
		alert("X Wins!"); //down win right
		winTrue = true;
	} else if(a === "X" && e === "X" && i ==="X") {
		alert("X Wins!"); //diagonal win left > right
		winTrue = true;
	} else if(c === "X" && e === "X" && g ==="X") {
		alert("X Wins!"); //diagonal win right > left
		winTrue = true;
	} else {
		winTrue = false;
	}
}
//Function checks to see if X is the winner. 
//a,b,c,d,e,f,g,h,i = winGame array [0,1,2,3,4,5,6,7,8] 
function checkForWinO(a,b,c,d,e,f,g,h,i) {
	if(a === "O" && b === "O" && c ==="O") {
		alert("O Wins!"); //across win top
		winTrue = true;
	} else if(d === "O" && e === "O" && f ==="O") {
		alert("O Wins!"); //across win middle
		winTrue = true;
	} else if(g === "O" && h === "O" && i ==="O") {
		alert("O Wins!"); //across win bottom
		winTrue = true;
	} else if(a === "O" && d === "O" && g ==="O") {
		alert("O Wins!"); //down win left
		winTrue = true;
	} else if(b === "O" && e === "O" && h ==="O") {
		alert("O Wins!"); //down win middle.
		winTrue = true;
	} else if(c === "O" && f === "O" && i ==="O") {
		alert("O Wins!"); //down win right
		winTrue = true;
	} else if(a === "O" && e === "O" && i ==="O") {
		alert("O Wins!"); //diagonal win left > right
		winTrue = true;
	} else if (c === "O" && e === "O" && g ==="O") {
		alert("O Wins!"); //diagonal win right > left
		winTrue = true;
	} else {
		winTrue = false;
	}
}
//turns on the force check option in the game.
function debug() {
	var debug;
	var turnOnD;
	turnOnD = document.getElementById("debug");
	debug = "<button id='forceCheck'>Check for Win</button>";
	turnOnD.onclick = function() {
		turnOnD.innerHTML = debug;
	}
}
