/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

};

var fruits = {
    apple: 2,
    orange: 4,
    banana: 3
};
console.log(_.pick(fruits, ["apple", "orange", "banana"]));
