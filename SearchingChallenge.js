/*
Have the function MultipleBrackets(str) 
take the str parameter being passed and return 1 #ofBrackets if the brackets 
are correctly matched and each one is accounted for. Otherwise return 0. 
For example: if str is "(hello [world])(!)", then the output should be 1 3 because
all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" 
the the output should be 0 because the brackets do not correctly match up. 
Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
*/

function MultipleBrackets(str) {
  let sL = 0;
  let sR = 0;
  let cL = 0;
  let cR = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      cL++;
    }
    if (str[i] === ")") {
      cR++;
    }
    if (str[i] === "[") {
      sL++;
    }
    if (str[i] === "]") {
      sR++;
    }
  }
  if (cL === 0 && cR === 0 && sL === 0 && sR === 0) {
    return 1;
  } else if (cL === cR && sL === sR) {
    return 1 + " " + (cL + sL);
  } else {
    return 0;
  }
  }