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
          










function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    //creates 2 random numbers between 0 and 9;
    let num1 = Math.floor(Math.random() * 10) + 1; 
    

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);

}

    
     gets the operands-numberes and operator +- etc from the dom and calculates the correct answer
     
    
    function calculateCorrectAnswer() {
        let operand1 = parseInt(document.getElementById('operand1').innerText);
        let tableOperand = parseInt(document.getElementById('tableOperand').innerText);
        let operator = document.getElementById("operator").innerText;
        
        if (operator === "+"){
            return [tableOperand + operand1, "addition"];
        /*} else if (operator === "x"){
                return [operand1 * operand2, "multiply"];
            } else if (operator === "-"){
                return [operand1  - operand2, "subtraction"];*/
        }else {
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}. Aborting!`;
        }
    }
    function displayAdditionQuestion(operand1, tableOperand) {
        document.getElementById('operand1').textContent = operand1;
        document.getElementById('tableOperand').textContent = operand2;
        document.getElementById('operator').textContent = "+";
    }