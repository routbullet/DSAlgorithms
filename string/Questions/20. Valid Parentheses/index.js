// 20. Valid Parentheses

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