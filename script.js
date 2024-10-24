
const calcButtons = document.querySelectorAll('button')
const screen = document.querySelector('#screen')

let clickCount = 0 
let operators = ['+', '-', '/', '*', '%']
let num1 = ""
let num2 = ""
let operator




/*
calcButtons.forEach(button => {
    button.addEventListener('click', function () {
            if (clickCount < 10) {
            let newValue = document.createElement('div')
            newValue.style.fontSize = '60px'
            newValue.style.fontFamily = 'monospace'
            newValue.innerText = this.value
            screen.append(newValue)
            clickCount++
                console.log(clickCount)
                
            
        }
    })

})

*/


calcButtons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.value

        if (operators.includes(value)) {
            operator = value
            clickCount += 1
            //console.log(`after operator is pressed cc = ${clickCount}`)
            screen.replaceChildren()        

        }
    
        else if (clickCount == 0) {
            num1 += value
            console.log(`current value= ${value}`)
            console.log(`before operator is pressed cc = ${clickCount}`)
            console.log(`first num = ${num1}`)
            let newValue = document.createElement('div')
            newValue.style.fontSize = '60px'
            newValue.style.fontFamily = 'monospace'
            newValue.innerText = this.value
            screen.append(newValue)

        } 
        else if (clickCount == 1) {
            num2 += value
            console.log(`first num = ${num1}`)
            console.log(`second num = ${num2}`)
            console.log(`after operator is pressed cc = ${clickCount}`)
            let newValue = document.createElement('div')
            newValue.style.fontSize = '60px'
            newValue.style.fontFamily = 'monospace'
            newValue.innerText = this.value
            screen.append(newValue)
        
        }
        
    })
})



