// selection sort
// find minimal item, swap with the first item
// O(n*n) - time
const arr = [0,3,2,5,6,7,1,9,4,2,1,2,96,4,1,7,-1,-5,23,6,2,35,6,3,32]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count +=1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log('count: ', count)