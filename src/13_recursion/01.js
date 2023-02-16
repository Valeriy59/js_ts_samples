let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}
// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}

// console.log((sumSalaries(company))) // 6700


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Вычислить сумму чисел до данного
// С использованием цикла.
function sumToFor(n) {
    let res = 0
    for (let i = 0; i <= n ; i++) {
        res += i
    }
    return res
}

console.log(sumToFor(100))

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumToRe(n) {
    let res = 0
    if (n <= 1) {
        res = n
    } else {
        res = n + sumToRe(n - 1)
    }
    return res
}
console.log(sumToRe(100))

// С использованием формулы арифметической прогрессии.
function sumToMath(n) {
    let res = (1 + n) / 2 * n
    return res
}
console.log(sumToMath(100))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Вычислить факториал
function factorial(n) {
    let res = 0
    if (n <= 0) {
        res = 1
    } else {
        res = n * factorial(n-1)
    }
    return res
}

console.log(factorial(5))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Числа Фибоначчи
function fib(n) {
    let res = 0
    if (n <= 1) {
        res = n
    } else {
        res = fib(n - 1) + fib(n-2)
    }
    return res
}

console.log(fib(8))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list.value)
    if (list.next) {
        printList(list.next)
    }
}

console.log(printList(list))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Вывод односвязного списка в обратном порядке

function printListRev(list) {

    if (list.next) {
        printListRev(list.next)
    }
    console.log(list.value)
}

console.log(printListRev(list))