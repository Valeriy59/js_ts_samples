// Инопланетный коммуникатор
// Вам пришлось столкнуться с коммуникатором, в котором находится зашифрованная инструкция. Система показывает, что коммуникатор обрабатывает сообщения перед отправкой и добавляет дополнительную разметку от себя. Любое значение в исходных данных может оказаться обёрнутым в специальный объект вида { _COMMUNICATOR_CONTROL_: { ... } } (считаем, что имени поля _COMMUNICATOR_CONTROL_ в наших отправляемых данных не бывает).
//
// Вот какие варианты возможны:
//
// { _COMMUNICATOR_CONTROL_: { validated: true, content: ... } }
//
// Похоже на какую-то дополнительную проверку, а в поле content может находиться оригинальное входное значение или значение с дополнительными объектами _COMMUNICATOR_CONTROL_.
//
// { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'some-string', content: ... } }
//
// Видимо коммуникатор считает важным промаркировать эквивалентные фрагменты дерева.
//
// { _COMMUNICATOR_CONTROL_: { censorship: true } }
//
// А это уже плохо... некоторые фрагменты могут быть подвержены какой-то цензуре и полностью удалены (заменены на такую заглушку).
//
// А ещё, оказалось, что из-за каких-то сбоев значения за пределами объектов _COMMUNICATOR_CONTROL_ могут быть искажены случайным образом (удалены, добавлены, изменены).
//
// Прийдётся проверять, что отправленное значение по содержанию эквивалентно исходному. Благо после отправки есть доступ к модифицированному сообщению.
//
// Необходимо написать функцию, которая примет на вход два значения и вернёт true, если они эквивалентны (с учётом возможных добавок _COMMUNICATOR_CONTROL_), в противном случае вернёт false.
//
// Шаблон решения:
//
// function check(origin, sent) {
//   return origin === sended // нужна более сложная проверка
// }
//
// module.exports = check
// Примеры
// // 1.
// check(1, 1) // true
//
// // 2.
// check(1, { _COMMUNICATOR_CONTROL_: { censorship: true } }) // false
//
// // 3.
// check([1, 2], [1, 2]) // true
//
// // 4.
// check({ a: 1, b: [1] }, { a: 1, b: [2] }) // false
//
// // 5.
// check(
//   [1, 2],
//   [1, { _COMMUNICATOR_CONTROL_: { validated: true, content: 2 } }])
//     // true
//
// // 6.
// check(
//   [1, 2],
//   [1, { _COMMUNICATOR_CONTROL_: { censorship: true } }])
//     // false
//
// // 7.
// check(
//   {
//     a: [1, 2, 3],
//     b: [1, 2, 3],
//     c: [1, 2, 3]
//   },
//   {
//     a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
//     b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
//     c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } }
//   })
//     // true
//
// // 8.
// check(
//   {
//     a: [1, 2, 3],
//     b: [1, 2, 3],
//     c: [1, 2, 3],
//     d: [4, 5, 6]
//   },
//   {
//     a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
//     b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
//     c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
//     d: [1, 2, 3]
//   })
//     // false
//
// // 9.
// check(
//   {
//     a: { x: '.', y: '!', z: '?' },
//     b: { x: '.', y: '!', z: '?' },
//     c: { x: '.', y: '!', z: '?' }
//   },
//   {
//     a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
//       x: '.',
//       y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
//       z: '?'
//     } } },
//     b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
//       x: '.',
//       y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
//       z: '?'
//     } } },
//     c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'xyz', content: {
//       x: '.',
//       y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
//       z: '?'
//     } } }
//   })
//     // false
//
// // 10.
// check(
//   {
//     a: { x: '.', y: '!', z: '?' }
//   },
//   {
//     a: { _COMMUNICATOR_CONTROL_: { validated: true, content: {
//       x: '.',
//       y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
//       z: '?'
//     } } }
//   })
//     // true
//
// // 11.
// check(
//   {
//     a: { x: '.', y: '!', z: '?' },
//     b: true
//   },
//   {
//     a: { _COMMUNICATOR_CONTROL_: { validated: true, content: {
//       x: '.',
//       y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
//       z: '?'
//     } } }
//   })
//     // false

function check(origin, sent) {
    if (sent._COMMUNICATOR_CONTROL_.censorship === true) {
        return false
    } else {
        return origin === sent
    }
}

function getTreeValues(tree) {
    let values = [ tree.content ]
    if (Array.isArray(tree._COMMUNICATOR_CONTROL_)) {
        tree._COMMUNICATOR_CONTROL_.forEach(el => values = values.concat(getTreeValues(el)))
    }
    return values
}

console.log(getTreeValues([1, { _COMMUNICATOR_CONTROL_: { censorship: true } }]))