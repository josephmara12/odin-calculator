const calcButtons = document.querySelectorAll('button')
const screen = document.querySelector('#screen')
let num1 = ""
let num2 = ""
let operatorBeenChosen = 0 
let operators = ['+', '-', '/', '*', '%', 'AC', '=']
let currentOperator
let calculationDone = false;
let result;
let newResult;
let calcRound = 0




//Event listener that take in getValues as a callback function

    calcButtons.forEach(button => {
        button.addEventListener('click', calculatorLogic)
    })

//getValues is the main function that distinguishes between num1 and num2 

function calculatorLogic() {

    if (calculationDone && !operators.includes(this.value)) {
        screen.replaceChildren(); 
        calculationDone = false; 
    }
    getValues(this.value)
    displayValues(this.value)
    operate(this.value)
    clearValues(this.value)
}

function getValues(buttonPressed) {

    const currentValue = buttonPressed

        if (operators.includes(currentValue) && currentValue != '=') {
            currentOperator = currentValue
            operatorBeenChosen = 1
            //screen.replaceChildren()
            
        }

    if (operators.includes(currentValue) == false) {
        screen.replaceChildren()
        if (operatorBeenChosen == 0) {
                num1 += currentValue
                console.log(`num1 is now ${num1}`)

            }

            else if (operatorBeenChosen == 1) {
                num2 += currentValue
                console.log(`num2 is now ${num2}`)
            
        }
        }

}

function displayValues(values) {
    if (operators.includes(values) == false) {
        let newValue = document.createElement('div')
        newValue.innerText = values
        newValue.style.fontSize = '60px'
        newValue.style.fontFamily = 'monospace'
        screen.append(newValue)
    }
}

function operate(buttonPressed) {
    if (buttonPressed == '=') {

        console.log(calcRound);
        screen.replaceChildren()
        
        switch (currentOperator) {
        case '+':
                if (calcRound == 0) {
                    result = Number(num1) + Number(num2);
                    console.log(` this is first result ${result}`);
                } else if (calcRound == 1) {
                    result = result + Number(num2)
                    console.log(` this is newresult ${result}`);

                }
                
        break;
        case '-':
                if (calcRound == 0) {
                    result = Number(num1) - Number(num2);
                    console.log(` this is first result ${result}`);
                } else if (calcRound == 1) {
                    result = result - Number(num2)
                    console.log(` this is newresult ${result}`);

                }
            
        break;
        case '*':
                if (calcRound == 0) {
                    result = Number(num1) * Number(num2);
                    console.log(` this is first result ${result}`);
                } else if (calcRound == 1) {
                    result = result * Number(num2)
                    console.log(` this is newresult ${result}`);

                }
        break;
        case '/':
                
                if (calcRound == 0) {
                    result = Math.round((Number(num1) / Number(num2)) * 10000000) / 100000000
                    console.log(` this is first result ${result}`);
                } else if (calcRound == 1) {
                    result = result / Number(num2)
                    console.log(` this is newresult ${result}`);

                }
        break;
        }

        displayValues(result)
        num1 = ""
        num2 = ""
        operatorBeenChosen = 0
        calculationDone = true;
    }

    }

function clearValues(clearButton) {
    if (clearButton == 'AC') {
        num1 = ""
        num2 = ""
        result =
        operatorBeenChosen = 0
        screen.replaceChildren()
        calcRound = 0
        
    }
}

