/**
 * https://leetcode.com/problems/decode-the-message/
 * 
 *Q-2325 You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.

 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function(key, message) {
    let result =''
    
    /* creates a set removes duplicates from key */
    key = Array.from(new Set(key.split(' ').join('')))
    const alphabets= 'abcdefghijklmnopqrstuvwxyz'
    
    const hash= new Map()
    
    /* creating the map */
    for(let i = 0; i < alphabets.length; i++){
        hash.set(key[i], alphabets[i])
    }

    /*iterate over the message and get the corropspoing value in hash map */    
    for (let chr of message){
        result += hash.get(chr) || ' '
    }
    
     return result
    };
    