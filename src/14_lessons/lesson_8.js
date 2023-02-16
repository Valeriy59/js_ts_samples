// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
const str = 'fgfggg'
// console.log(str[0])



// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
Number.prototype.plus = function (num) {
	return this + num
}
Number.prototype.minus = function (num) {
	return this - num
}
// console.log((2).plus(3).minus(1))



// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function foo (m, s1, s2, s3) {
	return(s1+m+s2+m+s3)
}

// console.log(foo('*', '1', 'b', '1c'))


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
		{
			valueNode: 3,
			next: null
		},
		{
			valueNode: 2,
			next: null
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null
				},
				{
					valueNode: 5,
					next: null
				}
			]
		}]
};

function sum (node) {
	if (Number.isInteger(node)) {
		return node
	} else {
		let res = 0

	}
}

// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

function Foo(Book, name ='Учебник javascript', author = 'Петр Сергеев') {
	return this.Book = Book (name, author)
}

let book = new Foo(Book, 'js', 'petr');
// console.log(book.name);
// console.log(book.author);



// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function curr(f) {
	return function(a) {
		return function(b) {
			return f(a, b)
		}
	}
}
function f(a, b) {
	return a + b
}
let currF = curr(f)
// console.log(currF(2,3))
// console.log(currF(2)(3))


// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
function fn(arg) {
	let value = arg;

	return function (arg) {
		if (arg !== undefined) {
			return fn(value + arg);
		} else {
			return value;
		}
	}
}

// console.log(fn(1)(2)(3)())


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function one(arg) {
	return 1 + (arg || 0);
}

function two(arg) {
	return 2 + (arg || 0);
}

function five(arg) {
	return 5 + (arg || 0);
}

function seven(arg) {
	return 7 + (arg || 0);
}

function plus(arg) {
	return arg;
}

function minus(arg) {
	return -arg;
}

console.log(seven(plus(one())))


// Task 10
// Реализовать функцию сортировки массива пузырьком
const numbers = [12, 34, 23, 67, 55, 99, 78]
function bubbleSort(arr) {
	for (let j = 0; j < arr.length - 1; j++) {
		let isSorted = true
		for (let i = 0; i < arr.length - 1 - j; i++) {
			if (arr[i] > arr[i + 1]) {
				isSorted = false;
				// let temp = arr[i]
				// arr[i] = arr[i + 1]
				// arr[i + 1] = temp

				// либо так:
				[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
			}
		}
		if (isSorted) break
	}

	return arr
}

console.log(bubbleSort(numbers))

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
function validBraces(str) {
	let openBracesArr = []
	let count
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
			openBracesArr.push(str[i])
		} else {
			count = openBracesArr.length
			if ((str[i] === ')' && openBracesArr[count-1] === '(') ||
				(str[i] === '}' && openBracesArr[count-1] === '{') ||
				(str[i] === ']' && openBracesArr[count-1] === '[')) {
				openBracesArr.pop()
			}
		}
	}
	return openBracesArr.length === 0
}

// console.log(validBraces("())({}}{()][]["))
// console.log(validBraces("(){}[]((({{{}}})))[]"))


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function uniq(arr) {
	return Array.from(new Set(arr))
}

// console.log(uniq([1, 1, 2, 2, 4, 2, 3, 7, 3]))



// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
function double(arr) {
	return arr.filter(el => el!==null).map(el => el*2)
}

// console.log(double([1, 2, null, 7, 8, null, 3]))


// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};
function getTreeValues(tree) {
	let values = [ tree.value ]
	if (Array.isArray(tree.children)) {
		tree.children.forEach(el => values = values.concat(getTreeValues(el)))
	}
	return values
}

// console.log(getTreeValues(tree2))


// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14
function sumTreeValues(tree) {
	let sum = tree.value
	if (Array.isArray(tree.children)) {
		tree.children.forEach(el => sum += sumTreeValues(el))
	}
	return sum
}

console.log(sumTreeValues(tree2))

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function bomb (time) {
	setTimeout(() => {
		console.log('BABAH')}, time)
}
// bomb(3000)


// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
function rle(str) {
	function ifOne (x) {
		return (x === 1) ? '' : x
	}
	let last = str[0]
	let lastIndex = 0
	let res = []
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== last) {
			res.push(last + ifOne(i - lastIndex))
			lastIndex = i
			last = str[i]
		}
	}
	res.push(last + ifOne(str.length - lastIndex))
return res.join('')
}


// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

let arr = [8,3,4,5,6]
function isSorted(arr) {

	return
}

// console.log(isSorted(arr))


// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// console.log(missing([]))                         // undefined
// console.log(missing([1, 4, 3]))                  // 2
// console.log(missing([2, 3, 4]))                  // 1
// console.log(missing([5, 1, 4, 2]))               // 3
// console.log(missing([1, 2, 3, 4]))               // undefined

function missing(arr) {
	if (arr.length === 0) {
		return undefined
	}
	let max = Math.max.apply(null, arr)
	let sum = (1 + max) / 2 * max
	let res = sum - arr.reduce((acc,el) => acc + el)
	return res === 0 ? undefined : res
}



// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

class ListNode {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}
class LinkedList {
	constructor(...args) {
		this.head = null
		this.tail = null
		if (args) {
			for (let i = 0; i < args.length; i++ ) {
				this.add(args[i])
			}
		}
	}
	add(data) {
		const node = new ListNode(data, null)
		if (this.tail) {
			this.tail.next = node
		}
		if (!this.head) {
			this.head = node
		}
		this.tail = node
	}
	has(data) {
		if (!this.head) {
			return
		}
		let current = this.head
		while (current) {
			if (current.data === data) {
				return true
			}
			current = current.next
		}
		return false
	}
}

let list = new LinkedList()
// console.log(list)
// list.add(4)                           // undefined
// list.add(5)
// console.log(list.has(5))



// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));
// micro: 1, 4, 2, 5, 3, 6