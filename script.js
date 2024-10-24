const calcButtons = document.querySelectorAll('button')
const screen = document.querySelector('#screen')
let num1 = ""
let num2 = ""
let operatorBeenChosen = 0 
let operators = ['+', '-', '/', '*', '%','AC','=']
let currentOperator


//Event listener that take in getValues as a callback function

    calcButtons.forEach(button => {
        button.addEventListener('click', calculatorLogic)
    })

//getValues is the main function that distinguishes between num1 and num2 


function calculatorLogic() {
    
    getValues(this.value)
    displayValues(this.value)
    operate(num1,num2,this.value)


}


function getValues(buttonPressed) {

    const currentValue = buttonPressed

    if (operators.includes(currentValue) && currentValue!= '=') {
        currentOperator = currentValue
        operatorBeenChosen += 1
        screen.replaceChildren()
        console.log(currentOperator)
    }

    if (operators.includes(currentValue) == false) {
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

function operate(num1, num2, buttonPressed) {
    if (buttonPressed == '=') {
        screen.replaceChildren()

        let result;
        switch (currentOperator) {
        case '+':
        result = Number(num1) + Number(num2);
        break;
        case '-':
        result = Number(num1) - Number(num2);
        break;
        case '*':
        result = Number(num1) * Number(num2);
        break;
        case '/':
        result = Math.round((Number(num1) / Number(num2)) * 10000000) / 100000000
                
        break;
}

        displayValues(result)

    }
    
}
