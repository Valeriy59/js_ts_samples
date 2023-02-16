// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:
//
// function unique(arr) {
//   /* ваш код */
// }
//
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
//
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
//
// P.P.S. Используйте Set для хранения уникальных значений.

function unique(arr) {
    set = new Set(arr)
    return Array.from(set)
}

// console.log(unique(values))



// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map()
    for (const word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('')
        console.log(map.set(sorted, word))
    }
    return Array.from(map.values())
}

// console.log(aclean(arr))


