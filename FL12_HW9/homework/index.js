const actors = [
	{ name: 'tommy', age: 36 },
	{ name: 'lee', age: 28 }
];

function convert(...args) {
	let arr = [];

	for (let i = 0; i < args.length; i++) {
		if (typeof args[i] === typeof 0) {
			arr.push(String(args[i]));
		} else {
				arr.push(Number(args[i]));
		}
	}
	return arr;
}
//convert('1', 2, 3, '4') // [1, '2', '3', 4]

function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i])
	}
}
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6

function mapArray(arr, func) {
	let newArray = []

	executeforEach(arr, function(el) {
		newArray.push(func(parseInt(el)))
	})
	return newArray;
}
//mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

function filterArray(arr, func) {
	let filteredArr = []

	executeforEach(arr, function(el) {
		if(func(el)) {
			filteredArr.push(el)
		}
	})
	return filteredArr;
}
//filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) // returns [2, 8]

function flipOver(string) {
	let reversed = ''

	for (let i = string.length - 1; i >= 0; i--) {
		reversed += string[i]
	}
	return reversed;
}
//flipOver('hey world') // 'dlrow yeh'

function makeListFromRange(range) {
	let newArr = [];

	for (let i = range[0]; i <= range[1]; i++) {
		newArr.push(i);
	}
	return newArr;
}
//makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]

function getArrayOfKeys(data, key) {
	let val = []

	executeforEach(data, function(el) {
		val.push(el[key])
	});
	return val;
}
//getArrayOfKeys(actors, 'name')); // [‘tommy’, ‘lee’]

function substitute(nums) {
	let filtered = []
	let thirty = 30;

	mapArray(nums, function(el) {
		if(el < thirty) {
			el = '*';
			filtered.push(el)
		} else {
			filtered.push(el)
		}
	})
	return filtered;
}
//substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

function getPastDay(date, days) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDay() - days - 1).getDate()
}
//const date = new Date(2019, 0, 2);
//getPastDay(date, 1); // 1, (1 Jan 2019)
//getPastDay(date, 2); // 31, (31 Dec 2018)
//getPastDay(date, 365); // 2, (2 Jan 2018)

function formatDate(date) {
	const ten = 10;
	const fullYear = date.getFullYear();
	const getMonth = date.getMonth() + 1;
	const getDate = date.getDate();
	const getHours = date.getHours() < ten ? `0${date.getHours()}` : date.getHours();
	const getMinutes = date.getMinutes() < ten ? `0${date.getMinutes()}` : date.getMinutes()

	return `${fullYear}/${getMonth}/${getDate} ${getHours}:${getMinutes}`;
}
//formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
//formatDate(new Date()))
