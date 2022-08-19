// Reverse the number


const reverse = (num) =>{

    let rev = 0
    while(num !== 0){
        console.log("initial num =>", num)
        let lastDigit = num % 10
        console.log("lastdigit =>",lastDigit)
        rev = rev * 10 + lastDigit
        console.log("rev =>",rev)
        num = Math.floor(num/10);
        console.log("end num =>", num)
    }

    return rev;
}


let num = 12345

console.log(reverse(num));