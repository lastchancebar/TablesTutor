// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}













function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    //creates 2 random numbers between 1 and 25;
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);

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
        } else if (operator === "x"){
                return [operand1 * operand2, "multiply"];
            } else if (operator === "-"){
                return [operand1  - operand2, "subtraction"];
        }else {
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}. Aborting!`;
        }
    }
    function displayAdditionQuestion(operand1, operand2) {
        document.getElementById('operand1').textContent = operand1;
        document.getElementById('operand2').textContent = operand2;
        document.getElementById('operator').textContent = "+";
    }