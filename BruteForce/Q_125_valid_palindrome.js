
/**   
  https://leetcode.com/problems/valid-palindrome/

  Q-125. Valid Palindrome

 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let nonAlphastring = s.replace(/[^0-9a-z]/gi, '')  // remove non alpha char 
    nonAlphastring = nonAlphastring.toLowerCase()      // convert str to lower case

    for (let i = 0; i <= nonAlphastring.length; i++) {
        if (nonAlphastring[i] != nonAlphastring[(nonAlphastring.length - 1) - i]) {
            return false
        }
    }

    return true
};