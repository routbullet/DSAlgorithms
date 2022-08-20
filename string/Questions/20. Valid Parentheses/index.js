// 20. Valid Parentheses
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

const isValidParentheses = (strParam) => {
    let stack = [];
    
    for (let i = 0 ; i < strParam.length ; i++) {
        let character = strParam.charAt(i);
        switch(character) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (character !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;

}

let strParam = "{}"  //true

strParam = "(){}{}(" //false

strParam = "(){}{}" //true

console.log(isValidParentheses(strParam))