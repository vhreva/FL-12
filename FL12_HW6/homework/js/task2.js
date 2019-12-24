let a = parseFloat(prompt("Please provide length of 'A' side"));
let b = parseFloat(prompt("Please provide length of 'B' side"));
let c = parseFloat(prompt("Please provide lenght of 'C' side"));


if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('input values should be ONLY numbers ')
} else if (a === 0 || b === 0 || c === 0 ) {
	console.log('A triangle must have 3 sides with a positive definite length')
} else if (a === b && b === c && c === a) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles triangle')
} else {
  console.log('Scalene  triangle')
}
