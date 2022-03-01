function myfunction()  
 {   
document.write("welcome to Javatpoint");  
 }
 function getCert(){
            
    document.write('<h2>Certificate</h2>');
     
     document.write('<h3>certName.innerHTML</h3>');
     document.write('<p>has passed the Table Tutor test in</p>');
     document.write( '<p> + [tableoperand] tables.</p>');
     document.write('Congratulations!');
   }

   const colors = [ '#ff0000', 'White', '#ff007f', '#7627ff', '#ffff00', '#000'];
   
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
   document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener('click', function () {
                if (this.getAttribute("data-type") === "submit") {
                    checkAnswer();
                } else {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
                }
            
            })
            
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

    
    let num1 = tableNumber;
    let num2 = Math.floor(Math.random() * 10);

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
}else{
  alert(`Unknown game type:${gameType}`);
throw`Unknown game type:${gameType}. Aborting!`;/* does this need to be in?*/
}
}
function checkAnswer(){
  let userAnswer= parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer= calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect){
    
  }
}