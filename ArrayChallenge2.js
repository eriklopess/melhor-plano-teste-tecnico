/*
Have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that 
appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5]
should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
*/

function SimpleMode(arr) {
    let high = 1;
    let mF = -1;
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
  
      for (let i2 = 0; i2 < arr.length; i2++) {
        if (arr[i] == arr[i2]) {
          count++;
        }
      }
  
      if (count > high) {
        high = count;
        mF = arr[i];
      }
    }
  
    return mF;
  }