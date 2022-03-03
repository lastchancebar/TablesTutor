function myfunction()  
 {   
document.write("welcome to Javatpoint");  
 }
 /*function getCert(){
    
    document.write('<h2>Certificate</h2>');
     
     document.write('<h3>you</h3>');
     document.write('<p>has passed the Table Tutor test in</p>');
     document.write( '<p> + tables.</p>');
     document.write('Congratulations!');
    
     document.write('Date');
    
   }*/

   const colors = [ '#ff0000', 'White', '#b35900', '#7627ff', '#ffff00', '#000','#0000ff','#990000','#001a00','#333399'];
   
   function getTable(){
     document.getElementById('playGround').innerHTML='';
     let tableNumber = parseInt(document.getElementById('tableNumber').value);
     applyLogic(tableNumber);
   }
   function applyLogic(tableNumber) { 
     for (let counter= 0; counter<= 10; counter++) {
       let addedValue= tableNumber + counter;
       setTimeout(function() {
         applyPlay(tableNumber + '+' + counter + '=' + addedValue);
       }, 200 * counter);
     }
   }
   function applyPlay(text){
     let type= document.createElement('h2');
     let random = Math.floor((Math.random() * colors.length));
     type.style.color = colors[random];
			type.style.fontSize = '50px';
			type.style.fontWeight = '900';
			type.style.margin = '0px';
			type.style.marginRight = '50px';
			type.style.padding = '0px';
     type.appendChild(document.createTextNode(text));
     document.getElementById('playGround').appendChild(type);

   }
   document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}
   
    document.getElementById("answer-box").addEventListener("keydown", function(event)
{ if (event.key ==="Enter"){
    checkAnswer();
}

})
        runGame("addition");
        
  })
  
/** 
 * The game "loop", called when the script is loaded 
 * and after the user's answer has been processed */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    
    let num1 = parseInt(document.getElementById('tableNumber').value);
    let num2 = Math.floor(Math.random() * 12);

} 

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
}   


/*
* compares the user input to the first element in the calculateCorrectAmswer array  */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right!:D");
        incrementScore();
        move();

    }else{
        alert(`Awww.... you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * *gets the operands-numberes and operator +- etc from th dom and calculates the correct answer
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;
    
    if (operator === "+"){
        return [operand1 + operand2, "addition"];
     
    }else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
   
   
}
/**
 * gets the current score from th dom and increasses it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

var i =0;
function move(){
    if (i==0){ 
        i =1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id= setInterval(frame,10);
        function frame(){
            if (width >= 100){
            clearInterval(id);
            i=0;
        }else{
            width++;
            elem.style.width= width +"%";
        }
        }
    }
}
/**
 * gets the current incorrects from th dom and increasses it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
  
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}





