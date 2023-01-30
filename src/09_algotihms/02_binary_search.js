// binary search
// O(log2n) - faster than linear search
// used only for sorted array
// 1. search central item from array

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0 // count of iteration

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 15))
console.log('count: ', count) // 4 = O(log2n) - max Time