// Remove Duplicates from Sorted Array

// let nums = [1,1,2]; // Input array

const removeDuplicates = function(nums) {
    let set = new Set(nums)
    let newArr = Array.from(set)
    for (let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i];
    }
    // console.log(newArr)
    return newArr.length;
};

// console.log(removeDuplicates(nums))


// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// const nums2 = [1,2]
const k = 5

const rotate = function(nums, k) {
    let n = nums.splice(nums.length-k)
    for (let i = 0; i < n.length; i++) {
        nums.splice(i, 0, n[i]);
    }
};
// rotate(nums2, k)
// console.log(nums2)


// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
nums = [1,2,1,1]; // Input array
const containsDuplicate = function(nums) {
    return Array.from(new Set(nums)).length !== nums.length
};

// console.log(containsDuplicate(nums))


// Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.
const singleNumber = function(nums) {
    return nums.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
}
// console.log(singleNumber(nums))



// Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

let nums1 = [1,2,2,1]
let nums2 = [2]
const intersect = function(nums1, nums2) {
    return nums1.filter(value => nums2.includes(value))
};

// console.log(intersect(nums1, nums2))

l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
// console.log((Number(l1.reverse().join('') )+ Number(l2.reverse().join(''))).toString().split('').map(item => Number(item)))
const addTwoNumbers = function(l1, l2) {
    return (Number(l1.reverse().join('') )+ Number(l2.reverse().join(''))).toString().split('').map(item => Number(item)).reverse()
};
// console.log(addTwoNumbers(l1, l2))



// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.
digits = [4,3,2,1]
const plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--) {
        digits[i]++;
        // console.log(digits)
        if(digits[i] > 9) {
            digits[i] = 0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}
plusOne(digits)
// console.log((digits))