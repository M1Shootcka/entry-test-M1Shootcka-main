/**
 * sum - returns sum of two numbers
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number}
 */
export default function sum(a, b) {
  return a + b;
}

//Моє рішення
var sum = getSum(4, 2, 8);
console.log(sum)

//Рішення з Інтернет
function getSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) {
      for (var j = 0; j < arguments[i].length; j++) {
        result += getSum(arguments[i][j]);
      }
    } else if (!isNaN(+arguments[i])) {
      result += +arguments[i];
    } else {
      continue;
    }
  };
  return result;
};
var sum = getSum(4, 2, 8);
console.log(sum)