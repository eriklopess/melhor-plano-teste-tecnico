/*
Have the function FindIntersection(strArr) read the array of strings
stored in strArr which will contain 2 elements: the first element will represent
a list of comma-separated numbers sorted in ascending order, the second element
will represent a second list of comma-separated numbers (also sorted). Your goal is
to return a comma-separated string containing the numbers that occur in elements of strArr
in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr) { 

    const arr1 = strArr[0].split(',');
    const arr2 = strArr[1].split(',');
    const fullArr = [];
    const result = [];
  
    for(let i = 0; i < arr1.length; i++) {
      arr1[i] = Number(arr1[i])
    }
  
    for(let i = 0; i < arr2.length; i++) {
      arr2[i] = Number(arr2[i])
    }
  
    for(let i = 0; i < arr1.length; i++) {
        for(let i2 = 0; i2 < arr2.length; i2++) {
          if(arr1[i] === arr2[i2]) {
            fullArr.push(arr1[i]);
          }
    }
    }
    for(let i = 0; i < fullArr.length; i++) {
      result.push(fullArr[i], ',')
    }
    result.pop();
    return result.join('')
  
  }