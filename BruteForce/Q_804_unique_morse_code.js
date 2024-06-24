/** 
 *  https://leetcode.com/problems/unique-morse-code-words/
 *Q-804 International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.


Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".


 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let transformations = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const hash = new Map()

    /* creating map for  transformations */
    for (let i = 0; i < alphabets.length; i++) {
        hash.set(alphabets[i], transformations[i])
    }

    let result = new Set()
    /* Applying loop on words and than getting character of word to get the value from map */
    for (let word of words) {
        let morseCode = ''
        for (let chr of word) {
            morseCode += hash.get(chr)
        }
        result.add(morseCode)
    }

    return result.size
};