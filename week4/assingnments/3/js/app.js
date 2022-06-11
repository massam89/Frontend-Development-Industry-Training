// Define function for each operator for two input numbers
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// operate between two numbers, with four function, add, subtract, multiply and divide
const operate = (operator, num1, num2) => {
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
const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

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

// Main function, execute at first
const main = (() => {
    const btns = document.querySelectorAll('button')
    const display = document.querySelector('#display')

    let num1 = '';
    let num2 = '';
    let operator = '';
    
    btns.forEach( btn => {
        btn.addEventListener('click', (e) => {

            if(+e.target.value || e.target.value == 0 || e.target.value == '.') {
                if(!operator){
                    num1 += e.target.value
                    if(getFrequency(num1)['.'] > 1) { num1 = num1.slice(0, -1) }
                    display.innerHTML = num1
                } else {
                    num2 += e.target.value
                    if(getFrequency(num2)['.'] > 1) { num2 = num2.slice(0, -1) }
                    display.innerHTML = num2
                }     
            } else {
                switch(e.target.value) {
                    case 'clear':
                        num1 = ''; num2 = ''; operator = ''
                        display.innerText = 0
                        break         
                    case 'divide':
                    case 'multiply':
                    case 'add':
                    case 'subtract':
                        operator = e.target.value
                        break
                    case 'equal':
                        let result = operate(operator, +num1, +num2)

                        if (result === Infinity || result === -Infinity){
                            alert('You can not divid number and zero')
                        }

                        if(result || result == 0){
                            if(isInt(result)){
                                display.innerText = result
                                num1 = result; num2 = ''; operator = ''
                            } else {
                                display.innerText = format(result, 2)
                                num1 = result; num2 = ''; operator = ''
                            }
                        } else {
                            result = ''
                        }                                                 
                        break
                    case 'back':

                        if(!operator) {
                            num1 = num1.slice(0, -1)
                            display.innerHTML = num1
                        } else {
                            num2 = num2.slice(0, -1)
                            display.innerHTML = num2
                            } 
                        
                    default:
                        break
                }
            }
        })
    })
  
    document.addEventListener('keydown', (e) => {
        
        if(+e.key || e.key == 0 || e.key == '.') {
            if(!operator){
                num1 += e.key
                if(getFrequency(num1)['.'] > 1) { num1 = num1.slice(0, -1) }
                display.innerHTML = num1
            } else {
                num2 += e.key
                if(getFrequency(num2)['.'] > 1) { num2 = num2.slice(0, -1) }
                display.innerHTML = num2
            }     
        } else {
            switch(e.key) {
                case 'Escape':
                    num1 = ''; num2 = ''; operator = ''
                    display.innerText = 0
                    break         
                case '/':
                    operator = 'divide'
                    break
                case '*':
                    operator = 'multiply'
                    break
                case '+':
                    operator = 'add'
                    break
                case '-':
                    operator = 'subtract'       
                    break
                case 'Enter':
                    let result = operate(operator, +num1, +num2)

                    if (result === Infinity){
                        alert('You can not divid number and zero')
                    }

                    if(result || result == 0){
                        if(isInt(result)){
                            display.innerText = result
                            num1 = result; num2 = ''; operator = ''
                        } else {
                            display.innerText = format(result, 2)
                            num1 = result; num2 = ''; operator = ''
                        }
                    } else {
                        result = ''
                    }                                                 
                    break
                case 'Backspace':
                    if(!operator) {
                        num1 = num1.slice(0, -1)
                        display.innerHTML = num1
                    } else {
                        num2 = num2.slice(0, -1)
                        display.innerHTML = num2
                    } 
                default:
                    break
            }
        }
    })
})();