// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt(3, 200)); //rando
console.log(getRandomInt(1, 52)); //cards
console.log(getRandomInt(1, 2)); //coin
console.log(getRandomInt(1, 6)); //dice

console.log(Math.round(23.5743543)); // rounding, rounds up if .5+

console.log(Math.floor(23.52745435)); // integer smaller than the argument
console.log(Math.floor(23)); //returns the largest integer less than or equal to a number

console.log(Math.ceil(23.545583)); // integer larger than the argument
console.log(Math.ceil(23)); //returns the smallest integer greater than or equal to a number

console.log(Math.pow(2, 16)); //returns the base to the exponent power, that is, base^exponent

console.log(Math.sqrt(25)); // square root

console.log(Math.E); // base of natural logarithms (2.7182818)

console.log(Math.PI); // pi = 3.14
