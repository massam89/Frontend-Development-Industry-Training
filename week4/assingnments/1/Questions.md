## 1. Why is it important to write clean code?
`Writing clean code is important because it allows you to clearly communicate with the next person who works with what you've written. Being able to return to previously written code and understand what it does is key, especially in the software development world`
## 2. What is the difference between good comments and bad comments?
`Comments aren’t to be treated lightly. When commenting on code, the current functionality is explained in terms of variables and results. What comments are NOT made for is:`

- Writing explanatory notes to self (e.g. /* Will finish this later… */).
- Blaming stuff on other people (e.g. /* John coded this. Ask him. */).
- Writing vague statements (e.g. /* This is another math function. */).
- Erasing chunks of code. Sometimes people are not sure of erasing things and it’s not absolutely evil to comment that code instead.
- What’s not right is to just leave it afterwards. It’ll be terribly confusing. If the code will be documented via embedded comments, the team members need to make sure those comments are there for a reason.

`Examples of good comment use are:`

- Authoring specifications (e.g. /* Coded by John, November 13th 2010 */).
- Detailed statements on the functionality of a method or procedure (e.g. /* This function validates the login form with the aid of the e-mail check function */).
- Quick notifications or labels that state where a recent change was made (e.g. /* Added e-mail validation procedure */).`
## 3. What is an array?
`An array is a special variable, which can hold more than one value:`
## 4. What are arrays useful for?
`It is used to store a collection of data, and it is more useful to think of an array as a collection of variables of the same type.`
## 5. How do you access an array element?
we can access element by index number, e.g: const specificElement = myArray[2]
## 6. How do you change an array element?
myArray[2] = 'new Element value'
## 7. What are some useful array properties?
- length
- prototype
## 8. What are some useful array methods?
- some()
- every()
- reduce()
- map()
- flat()
- filter()
- forEach()
- findIndex()
- indexOf()
- splice()
## 9. What are loops useful for?
`Loops are handy, if you want to run the same code over and over again, each time with a different value.`
## 10.What is the break statement?
`force exit from loop`
## 11. What is the continue statement?
`force exit from current iteration, lighter version of break`
## 12.What is the DOM?
`The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree`
## 13.How do you target the nodes you want to work with?
`By select element, with querySelector or getById and etc`
## 14.How do you create an element in the DOM?
`document.createElement('element')`
## 15.How do you add an element to the DOM?
`panentNode.append(child)`
## 16.How do you remove an element from the DOM?
`parentNode.removeChild(child)`
## 17.How can you alter an element in the DOM?
`div.setAttribute or div.getAttribute or div.removeAttribute`
## 18.When adding text to a DOM element, should you use textContent or innerHTML?
`textContent`
## 19.Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
`At the end of body tag`
## 20.How do “events” and “listeners” work?
` by adding listener to an element, `
## 21.What are three ways to use events in your code?
- Inline Event Handlers

<html>
	<head>
		<title>JJ Smith's Bakery</title>
	</head>
	<body>
		<p id="submitted"></p>
		<button onclick="submitForm()">Submit form</button>
	</body>
</html>

- Events with Handler Properties
<button id="button">Submit form</button>
const submitForm = () => {
	const text = document.getElementById("submitted");
	text.textContent = "Form submitted."
}

const button = document.getElementById("button")
button.onclick = submitForm;

const button = document.getElementById("button")
button.onclick = submitForm;
</script>

- Event Listener
const submitForm = () => {
	const text = document.getElementById("submitted");
	text.textContent = "Form submitted."
}

const button = document.getElementById("button")
button.addEventListener("click", submitForm);

## 22.Why are event listeners the preferred way to handle events?
` Because we can add multi event to one element`
## 23.What are the benefits of using named functions in your listeners?
`A named function helps keep your code more DRY (an acronym for Don’t Repeat Yourself). Second, you can remove them later if you want using removeEventListener (). You cannot do this with anonymous functions.`
## 24.How do you attach listeners to groups of nodes?
`use forEach`
## 25.What is the difference between the return values of querySelector and querySelectorAll?
`querySelector return an object but querySelectorAll returns nodeList`
## 26.What does a “nodelist” contain?
`A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes)`
## 27.Explain the difference between “capture” and “bubbling”.
`Event capturing means propagation of event is done from ancestor elements to child element in the DOM while event bubbling means propagation is done from child element to ancestor elements in the DOM`
## 28.What is the difference between objects and arrays?
`Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.`
## 29.How do you access object properties
const obj = {
    firstName: 'masoud',
    lastName: 's'
}

obj.firstName (method 1)
obj['firstName'] (method 2)