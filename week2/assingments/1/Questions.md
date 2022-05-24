## 1. What are the main differences between external, internal, and inline CSS?
`Inline CSS allows you to add styles to specific HTML elements. The internal CSS stylesheet allows you to include CSS code in <head> section of a markup document. External stylesheet works by linking a . css file, containing all the CSS rules, to an HTML document.`

## 2. What is the syntax for class and ID selectors?
`.class  #id`

## 3. How would you apply a single rule to two different selectors?
` p , div {}`

## 4. Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
 `#title.primary {}`

## 5. What does the descendant combinator do?
` Descendant combinators are represented by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc.)`

## 6. Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?
`The rule that uses one class selctor`

## 7. From inside to outside, what is the order of box-model properties?
`content-padding-border-margin`

## 8. What does the box-sizing CSS property do?
`The CSS box-sizing property allows us to include the padding and border in an element's total width and height.* { box-sizing: border-box;}`

## 9. What is the difference between the standard and alternative box model?
   ` If you are using the standard box model, the size of the border is added to the width and height of the box. If you are using the alternative box model then the size of the border makes the content box smaller as it takes up some of that available width and height .`

## 10. Would you use margin or padding to create more space between 2 elements?
  `  margin`

## 11. Would you use margin or padding to create more space between the contents of an element and its border?
   ` padding`

## 12. Would you use margin or padding if you wanted two elements to overlap each other?
`margin`

## 13. What is the difference between a block element and an inline element?
   ` Block elements are a kind of blocks where there are many elements in a line itself. While inline elements take up the space of an entire line and there will be only one line within the space width. Inline elements do not respect the top and bottom margins but only the left and right and also consider the padding`

## 14. What is the difference between an inline element and an inline-block element?
  `  Compared to display: inline , the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline , top and bottom margins & paddings are not respected, and with display: inline-block they are.`

## 15. Is an h1 block or inline?
  `  block`

## 16. Is button block or inline?
  `  inline-block`

## 17. Is div block or inline?
 `   block`

## 18. Is span block or inline?
  `  inline`

## 19. What’s the difference between a flex container and a flex item?
   ` Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the others are meant to be set on the children (said “flex items”)`

## 20. How do you create a flex item?
   ` Add display:flex to container`

## 21. What are the 3 values defined in the shorthand flex property?
`flex-grow, flex-shrink, flex-basis`

## 22. How do you make flex items arrange themselves vertically instead of horizontally?
   ` flex-direction: column`

## 23. What is the difference between justify-content and align-items?
`justify-content => horizontally or main axis
align-items => vertically or cross axis`

## 24. How do you use flexbox to completely center a div inside a flex container?
` justify-contetn: center;
align-items: center;`

## 25. What’s the difference between justify-content: space-between and justify-content: space-around?
   ` space-between : items are evenly distributed in the line; first item is on the start line, last item on the end line. space-around : items are evenly distributed in the line with equal space around them.`