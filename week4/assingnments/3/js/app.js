// operate between two numbers, with four function, add, subtract, multiply and divide
const operate = (operator, num1, num2) => {
    // Define function for each operator for two input numbers
    function add(num1, num2) {
        return num1 + num2;
    }
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    switch(operator){
        case 'add':
            return add(num1, num2)
        case 'subtract':
            return subtract(num1, num2)
        case 'multiply':
            return multiply(num1, num2)
        case 'divide':
            return divide(num1, num2)
        default:
            break
    }
}

// Check the input is Integer or not
const isInt = (n) => Number(n) === n && n % 1 === 0

// Format number with specific decimal point
const format = (num, decimals) => num.toLocaleString('en-US', {minimumFractionDigits: decimals,maximumFractionDigits: decimals});

// Count the number of character in a specific string
const getFrequency = (string) => {
    let freq = {};
    for (let i=0 ; i<string.length ; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

const onDisplay = (string) => {
    const display = document.querySelector('#display')
    display.textContent = string
}

const calculate = (num1, num2, operator) => {
    let result = operate(operator, +num1, +num2)

    if (result === Infinity || result === -Infinity){
        alert('You can not divid number and zero')
        return {num1:'', num2:'', operator:''}
    }

    if(result || result == 0){
        if(isInt(result)){
            onDisplay(result)
            num1 = result; num2 = ''; operator = ''
        } else {
            onDisplay(format(result, 2))
            num1 = result; num2 = ''; operator = ''
        }
    } else {
        onDisplay(result)
    }

    return {num1, num2, operator}
}

const backSpace = (num1, num2, operator) => {
    if(!operator) {
        num1 = num1.slice(0, -1)
        onDisplay(num1)
    } else {
        num2 = num2.slice(0, -1)
        onDisplay(num2)
    }
    
    return {num1, num2, operator}   
}

const manuplateEvents = (num1, num2, operator, eventValue) => {
    if(+eventValue || eventValue == 0 || eventValue == '.') {
        if(!operator){
            num1 += eventValue
            if(getFrequency(num1)['.'] > 1) { num1 = num1.slice(0, -1) }
            onDisplay(num1)
        } else {
            num2 += eventValue
            if(getFrequency(num2)['.'] > 1) { num2 = num2.slice(0, -1) }
            onDisplay(num2)
        }     
    } else {
        switch(eventValue) {
            case 'clear':
                num1 = ''; num2 = ''; operator = ''
                onDisplay(0)
                break         
            case 'divide':
            case 'multiply':
            case 'add':
            case 'subtract':
                if(num1 && num2 && operator){
                    ({num1, num2, operator} = calculate(num1, num2, operator))
                    operator = eventValue
                } else {
                    operator = eventValue
                }
                break
            case 'equal':
                ({num1, num2, operator} = calculate(num1, num2, operator))                                   
                break
            case 'back':
                ({num1, num2, operator} = backSpace(num1, num2, operator))        
            default:
                break
        }
    }
    return {num1, num2, operator}
}

// Main function, execute at first
const main = (() => {
    const btns = document.querySelectorAll('button')

    let num1 = '';
    let num2 = '';
    let operator = '';
    
    // Click support
    btns.forEach( btn => {
        btn.addEventListener('click', (e) => {
           ({num1, num2, operator} = manuplateEvents(num1, num2, operator, e.target.value))
        })
    })
  
    // Keyboard support
    document.addEventListener('keydown', (e) => {

        let eventValue;
        switch(e.key) {
            case 'Escape':
                eventValue = 'clear'
                break         
            case '/':
                eventValue = 'divide'
                break
            case '*':
                eventValue = 'multiply'
                break
            case '+':
                eventValue = 'add'
                break
            case '-':
                eventValue = 'subtract'   
                break
            case 'Enter':
                eventValue = 'equal'                                               
                break
            case 'Backspace':
                eventValue = 'back'
            default:
                eventValue = e.key
        }
        
        ({num1, num2, operator} = manuplateEvents(num1, num2, operator, eventValue))
    })
})();