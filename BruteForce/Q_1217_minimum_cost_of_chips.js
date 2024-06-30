/**
 * Q-1217. Minimum Cost to Move Chips to The Same Position
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odd = 0;
    let even = 0;
    for (let chip of position) {
        chip % 2 == 0 ? even++ : odd++
    }
    return Math.min(odd, even);
};

