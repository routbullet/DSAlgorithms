/*

    Leetcode 387. First Unique Character in a String

    Given a string s, find the first non-repeating character in it and return its index. 
    If it does not exist, return -1.

*/




var firstUniqChar = function(s) {
    let dict = {}
    for(let val of s){
        if(dict[val]){
            dict[val] = dict[val] + 1
        }
        else{
            dict[val] = 1
        }
    }
    let character = ''
    for(let objVal in dict){
        if(dict[objVal] === 1){
            character += objVal
            break
        }
    }
    
    for(let i = 0; i< s.length; i++){
        if(character === s.charAt(i)){
            return i
        }
    }
    
    return -1
};

let str = "loveleetcode"  // 2
console.log(firstUniqChar(str))