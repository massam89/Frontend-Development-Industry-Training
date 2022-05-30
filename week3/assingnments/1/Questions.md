## 1. Name the three ways to declare a variable?
`let const var`
## 2. Which of the three variable declarations should you avoid and why?
`var => Because now there is a better way of declaring variables and even constants… With block scope! You don’t need to think twice when declaring variables inside blocks. It is easier to work with block scope than with function scope. The var usage has been being discouraged.`
## 3. What rules should you follow when naming variables?
- Spaces are not allowed in variable names.
- Only letters, digits, underscores, and dollar signs are permitted in variable names.
- Case matters when it comes to variable names.
- A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
- certain terms such as reserved words in javascript shouldn’t be used to name variables.
## 4. What should you look out for when using the + operator with numbers and strings?
`They must be the same type`
## 5. How does the % operator work?
`Remainder operator:  It gets us the remainder of the number when we divide the left operand by the right operand. `
## 6. Explain the difference between == and ===.
-  == -> compare the value of the variables
-  === -> compare the both value and type of the variables
## 7. When would you receive a NaN result?
`NaN = Not a Number => The special value NaN shows up in JavaScript when Math functions fail (Math.sqrt (-37)) or when a function trying to parse a number fails or NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation`
## 8. How do you increment and decrement a number?
`with ++ and --`
## 9. Explain the difference between prefixing and post-fixing increment/decrement operators.
`There is a big difference between postfix and prefix versions of ++.
In the prefix version (i.e., ++i), the value of i is incremented, and the value of the expression is the new value of i.
In the postfix version (i.e., i++), the value of i is incremented, but the value of the expression is the original value of i.`
## 10. What is operator precedence and how is it handled in JS?
`In every language, evaluation of an expression is done based on a predefined order of precedence which helps the language engine to determine which part of the expression will be evaluated first, which will second and so on.`

![operator precedence](./img/precedence.jpg)
## 11. How do you log information to the console?
`Type in js file => console.log('My data');`
## 12. What does unary plus operator do to string representations of integers?
- +a // Converts to number
- -a // Converts to number and negates
- ++a // Adds 1 to a and returns new a
- a++ // Adds 1 to a and returns original a
- --a // Subtracts 1 from a and returns new a
- a-- // Subtracts 1 from a and returns original a
## 13. What are the eight data types in JavaScript?
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt
- Object
## 14. Which data type is NOT primitive?
`Object is called non-primitive data types in Javascript. This data type is not predefined in Javascript. It is created by programmers.`
## 15. What is the relationship between null and undefined?
`null is an object but undefined is a type- null is an assigned value. It means nothing. undefined means a variable has been declared but not defined yet`
## 16. What is the difference between single, double, and backtick quotes for strings?
`As you may have understood now, there is no real difference between using single quotes, double quotes, or backticks. You can choose one or multiple styles based on your preference. However, It is always good to stick to a single format throughout the project to keep it neat and consistent`
## 17. What is the term for embedding variables/expressions in a string?
`One special feature of the template literal feature is the ability to include expressions and variables within a string. Instead of having to use concatenation, we can use the ${} syntax to insert a variable`
## 18. Which type of quote lets you embed variables/expressions in a string?
`backtick`
## 19. How do you embed variables/expressions in a string?
- for instance: let myVariable = `this is ${anotherVar}`
## 20. How do you escape characters in a string?
` use \`
## 21. What is the difference between the slice/substring/substr string methods?
`slice() extracts parts of a string and returns the extracted parts in a new string. substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters. substring() extracts parts of a string and returns the extracted parts in a new string.`
## 22. What are the three logical operators and what do they stand for?
- AND &&
- OR ||
- Not !
## 23. What are the comparison operators?
- === and ==
- != and !==
- <=>
## 24. What are truthy and falsy values?
`Truthy values In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.`
## 25. What are the falsy values in JavaScript?
![trusy and falsy](./img/truthy_and_falsy.jpg)
## 26. What are conditionals?
`Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.`
## 27. What is the syntax for an if/else conditional?
`if (condition) {
// what to do if condition is met
} else {
// what to do if condition is not met
}`
## 28. What is the syntax for a switch statement?
`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`
## 29. What is the syntax for a ternary operator?
`condition ? doThisIfTrue : doThisIfFalse`
## 30. What is nesting?
`A function in another function`
## 31. What are functions useful for?
- Code reusability
- Less coding
## 32. How do you invoke a function?
`call the function and invoke the function are the same but it is common to use call the function. e.g. myFunction(a, b)`
## 33. What are anonymous functions?
`Anonymous Function is a function that does not have any name associated with it.`
## 34. What is function scope?
`JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var , let and const are quite similar when declared inside a function. They all have Function Scope`
## 35. What are return values?
`The value to be returned is specified in the return. That value can be a constant value, a variable, or a calculation where the result of the calculation is returned.`
## 36. What are arrow functions?
`Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions`