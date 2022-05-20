/*
Have the function MathChallenge(num) read the num parameter being passed which will be a combination of 1
or more single digits, and determine if it's possible to separate the digits with either a plus or minus
sign to get the final expression to equal zero. For example: if num is 35132 then it's possible to separate
the digits the following way, 3 - 5 + 1 + 3 - 2, and this expression equals zero. Your program should return 
a string of the signs you used, so for this example your program should return -++-. If it's not possible to get
the digit expression to equal zero, return the string not possible. If there are multiple ways to get the final
expression to equal zero, choose the one that contains more minus characters. For example: if num is 26712 your
program should return -+-- and not +-+-.
*/

function MathChallenge(num) {
  let string1 = num
    .toString()
    .split("")
    .map((int) => parseInt(int));

  if (string1.length < 2) {
    return "not possible";
  }

  return func1(a.slice(1), a[0]);
}

function func1(arr, sum) {
  if (arr.length == 1) {
    if (sum + arr[0] === 0) {
      return "+";
    } else if (sum - arr[0] === 0) {
      return "-";
    } else {
      return "not possible";
    }
  }

  const string2 = func1(arr.slice(1), sum - arr[0]);

  if (string2 != "not possible") {
    return "-" + string2;
  }

  let string1 = func1(arr.slice(1), sum + arr[0]);

  if (string1 != "not possible") {
    return "+" + string1;
  }

  return "not possible";
}
