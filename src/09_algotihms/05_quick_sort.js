// quick sort
// compare items, if next item > item swap each other
// O(log2n*n) - time
const arr = [0,3,2,5,6,7,1,9,4,2,1,2,96,4,1,7,-1,-5,23,6,2,35,6,3,32]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
}

console.log(quickSort(arr))
console.log('count: ', count)