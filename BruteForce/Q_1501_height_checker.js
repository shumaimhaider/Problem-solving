/** 
   https://leetcode.com/problems/height-checker/
  Q-1051. Height Checker

 * @param {number[]} heights
 * @return {number}
 */


var heightChecker = function (heights) {
    let expected = []
    let count = 0

    for (let i = 0; i < heights.length; i++) {
        expected.push(heights[i])
    }

    expected.sort((a, b) => a - b)

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != expected[i])
            count++
    }

    return count
};