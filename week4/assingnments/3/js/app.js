const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

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

const isInt = (n) => Number(n) === n && n % 1 === 0

const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

const main = (() => {
    const btns = document.querySelectorAll('button')
    const display = document.querySelector('#display')

    let num1 = '';
    let num2 = '';
    let operator = '';
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {

            if(+e.target.value || e.target.value == 0 || e.target.value == '.') {
                if(!operator){
                    num1 += e.target.value
                    display.innerHTML = num1
                } else {
                    num2 += e.target.value
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

                        if (result === Infinity){
                            alert('You can not divid number and zero')
                        }

                        if(result){
                            if(isInt(result)){
                                display.innerText = result
                                num1 = result; num2 = ''; operator = ''
                            } else {
                                display.innerText = format(result, 5)
                                num1 = result; num2 = ''; operator = ''
                            }
                        } else {
                            result = ''
                        }                                                 
                        break
                    default:
                        break
                }
            }
        })
    })
})();