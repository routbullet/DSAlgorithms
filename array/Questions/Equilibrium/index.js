const equilibrium = (arr, n) => {
  // code here
  // {1, 2, 4, 3 }

  let Lsum = 0,
    Rsum = 0,
    left = 0,
    right = n - 1;

  while (left < n && right < n) {
    if (Lsum === 0 && Rsum === 0) {
      Lsum += arr[left];
      Rsum += arr[right];
    }

    if (Lsum > Rsum) {
      right--;
      Rsum += arr[right];
    }
    if (Lsum < Rsum) {
      left++;
      Lsum += arr[left];
    }

    if (Lsum === Rsum) {
      Lsum = 0;
      Rsum = 0;
      left++;
      right--;
    }

    if (left === right && Lsum === Rsum) {
      return "YES";
    }
    // if (right === left + 1) {
    //   if (Lsum === Rsum) {
    //     return "YES";
    //   }//
    // }
  }
  return "NO";
};

let n = 4,
  arr = [1, 5, 5, 11];

console.log(equilibrium(arr, n));
