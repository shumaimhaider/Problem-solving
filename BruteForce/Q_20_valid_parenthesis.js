/** Q-20. Valid Parentheses

 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {   // push in stack when opening bracket
            stack.push(s[i])
        } else if (stack.pop() != map[s[i]]) {           // compare the poped value with closing bracket map value if not matches  return false
            return false
        }

    }

    return stack.length == 0

}

