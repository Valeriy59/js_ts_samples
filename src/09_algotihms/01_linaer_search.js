// linear search
 const array = [1,4,5,8,5,1,2,7,5,2,11]

// go through the array and compare array[i] with searching item.
// return index of searched item

let count = 0 // count of iteration
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count +=1
        if (array[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 11)) // 10
console.log('count: ', count) // 11 = O(n) - time