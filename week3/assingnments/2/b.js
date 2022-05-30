//b. Write a JavaScript program to find the area of a triangle where lengths of the three of it sides are 5, 6 and 7.

const sideA = 5;
const sideB = 6;
const sideC = 7;

const S = (sideA + sideB + sideC) / 2  //Semi Perimeter

const A = Math.sqrt(S * (S - sideA) * (S - sideB) * (S - sideC)) //Area

console.log(A)