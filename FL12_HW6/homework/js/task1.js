let a = prompt('Provide a side')
let b = prompt('Provide b side')
let c = prompt('Provide c side')

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log('Invalid input data')
} else {
	let deskrimіnant = b * b - 4 * a * c;
	console.log(deskrimіnant)

	if (deskrimіnant > 0) {
	let x1 = (-b + Math.sqrt(deskrimіnant)) / (2 * a)
	let x2 = (-b - Math.sqrt(deskrimіnant)) / (2 * a)
	console.log('x1 = ' + x1)
	console.log('x2 = ' + x2)
	} else if (deskrimіnant < 0) {
		console.log('no solution')
	} else {
		let x = (-b) / (2 * a)	
		console.log('x = ' + x)
	}
}