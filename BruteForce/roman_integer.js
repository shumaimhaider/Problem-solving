/*
Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3. */

var romanToInt = function(s) {
    let total=0
    const legend = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
      }; 
        for(var i = 0; i < s.length; i++){
            if(legend[s[i]] < legend[s[i+1]]){
                 total += legend[s[i+1]] - legend[s[i]]
                 i++
            }else{
                 total+=legend[s[i]]
            }
        }
        return total
    };