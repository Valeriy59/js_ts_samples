function createCounter () {
    let count = 1
    return () => count++

}

const counter1 = createCounter()
const counter2 = createCounter()

// console.log('counter1: ', counter1()) // 1
// console.log('counter1: ', counter1()) // 2
// console.log('counter1: ', counter1()) // 3
//
// console.log('counter2: ', counter2()) // 1
// console.log('counter2: ', counter2()) // 2
// console.log('counter2: ', counter2()) // 3



//===================================//
// console.log(1)
//
// setTimeout(() => console.log(2))
//
// new Promise((resolve) => {
//     console.log(3)
//     resolve()
// })
//     .then(() => console.log(4))
//     .then(() => console.log(5))
//     .catch(() => console.log(6))
//
// queueMicrotask(() => console.log(7))
//
// console.log(8)

// 1 3 8 4 7 5 2



// Создать функцию, которая принимает массив билетов, вывести массив в хронологическом порядке
const cities = [
    {from: 'St.Petersburg', to: 'Minsk'},
    {from: 'Kiev', to: 'Novosibirsk'},
    {from: 'Perm', to: 'Moscow'},
    {from: 'Minsk', to: 'Kiev'},
    {from: 'Moscow', to: 'St.Petersburg'}
]

function sortCities(cities) {
    const map = new Map
    // const map = cities.reduce((acc, {from, to}) => ({[from]: to}), {})
    map.set('from', cities.map(el => el.from))
    map.set('to', cities.map(el => el.to))
    console.log(map)
    // const start = map.get('to').find(el => !el.includes(map.get('from')))
    // console.log(start)
    const to = cities.map(el => el.to)
    const start1 = cities.find(el => !to.includes(el.from))
    return cities
}
sortCities(cities)

const findTravelPath = (data) => {
const list = []
const initialPoint = data.find((el) => !data.map(e => e.to).includes(el.from))
list.push(initialPoint)
for (let i = 0; i < data.length - 1; i += 1) {
    const lastEl = list[list.length - 1]
    const next = data.find((el) => el.from === lastEl.to)
    list.push(next)
}
return list
}