/*
First Repeated Word in the array.

Input : "Ravi had been saying that he had been there"
Output : had

Input : "Ravi had been saying that"
Output : No Repetition

Input : "he had had he"
Output : he

*/

const RepeatedWord = (s) => {
  let convertArray = s.split(" ");
  let arr = [];
  for (let i = 0; i < convertArray.length; i++) {
    for (let j = i + 1; j < convertArray.length; j++) {
      if (convertArray[i] === convertArray[j]) {
        arr.push(convertArray[i]);
      }
    }
  }

  return arr.length > 0 ? arr[0] : "No Repetition";
};

let s = "had had he";
console.log(RepeatedWord(s));
