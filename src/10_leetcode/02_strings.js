// Write a function that reverses a string. The input string is given as an array of characters s.
//
// You must do this by modifying the input array in-place with O(1) extra memory.
s = ["h","e","l","l","o"]
const reverseString = function(s) {
    return s.reverse()
};
// console.log(reverseString(s))

//Given a signed 32-bit integer x, return x with its digits reversed. I
// f reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
x = 1534236469
function reverse(x) {
    let y = 0
    let k = 1
    if(x < 0) {
        x = -1 * x
        k = -1
    }
    const xStr = x.toString()
    for (let i = 0; i < xStr.length; i++) {
        y = y+xStr[i]*(10**i)

    }
    if (y > ((2**31) - 1) || y < (-2)**31) {
        y = 0
    }
    return y*k
}
// console.log(reverse(x))
// console.log(2**31 - 1)



// First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index.
// If it does not exist, return -1.
s = "loveleetcode"
const firstUniqChar = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if(map.has(x[i])){
            map.set(x[i],map.get(x[i])+1);
        }
        else{
            map.set(x[i],0);
        }
    }
};


// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

s = "anagram"
t = "nagaram"
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const sletters = {}
    for (let letter of s) {
        if (sletters[letter]) {
            sletters[letter]++
        } else {
            sletters[letter] = 1
        }
    }
    console.log(sletters)
    for (let letter of t) {
        if (!sletters[letter]) {
            return false
        }
        if (sletters[letter]) {
            sletters[letter]--
        }
        if (sletters[letter] === 0) {
            delete sletters[letter]
        }
    }
    return Object.keys(sletters).length === 0
}

// console.log(isAnagram(s, t))



//  Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
s = "A man, a plan, a canal: Panama"
const isPalindrome = function(s) {
    s = s.toString().toLowerCase().replace(/[^A-Za-z0-9]/g,'')
    return s === s.split('').reverse().join('')
}
// console.log(isPalindrome(s))

s = "   -42scvbz"
const myAtoi = (s) => {
    let trimmed = s.trim()
    let parsed = parseInt(trimmed, 10)

    if (isNaN(parsed)) {
        return 0
    } else if (parsed >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    } else if (parsed <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return parsed
    }
}
myAtoi(s)


// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
const strs = ["flower","flow","flight"]
const longestCommonPrefix = function(strs) {
    return strs.reduce((acc, el) => {
        console.log(el)
        while (el.indexOf(acc) !==0) {
            console.log(acc.substring(0, acc.length - 1))
            acc = acc.substring(0, acc.length - 1)
        }

        return acc
    })
};

console.log(longestCommonPrefix(strs))