/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num1 = nums[index];
    const num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), index];
    }
    map.set(num1, index);
  }
};

console.log(`Expected:[0,1] Output:${twoSum([2, 7, 11, 15], 9)}`); // [0,1]
console.log(`Expected:[1,2] Output:${twoSum([3, 2, 4], 6)}`); // [1,2]
console.log(`Expected:[0,1] Output:${twoSum([3, 3], 6)}`); // [0,1]
console.log(`Expected:[0,3] Output:${twoSum([0, 4, 3, 0], 0)}`); // [0,3]
console.log(`Expected:[0,2] Output:${twoSum([-3, 4, 3, 90], 0)}`); // [0,2]
console.log(`Expected:[2,4] Output:${twoSum([-1, -2, -3, -4, -5], -8)}`); // [2,4]
console.log(`Expected:[0,2] Output:${twoSum([3, 2, 3], 6)}`); // [0,2]
console.log(`Expected:[0,1] Output:${twoSum([2, 7, 8, 11, 15], 9)}`); // [0,1]
console.log(`Expected:[0,2] Output:${twoSum([-10, 7, 19, 15], 9)}`); // [0,2]
