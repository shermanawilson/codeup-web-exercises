`use strict`


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //my arraw of numbers

// Filter


const filteredNumbers = numbers.filter(function (singleNumber) {
    //single number represents each number, looking of true or false. will take number and will add it
    // filter returns an array
    if (singleNumber % 3) { // (singleNumber > 5) returns numbers that are greater than 5 / divisible by 3  etc.
        return true // if number is true, it will add to the filteredNumbers
    } else {
        return false
    }

})

console.log(filteredNumbers);

const users = [
    {name: "Bethany", job: "Intern"},
    {name: "Tim", job: "Intern"},
    {name: "Sally", job: "Manager"},
    {name: "Ben", job: "Worker Bee"},
    {name: "Jason", job: "CEO"}

]

const higherManagementUsers = users.filter(function (user) {
    if (user.job === "CEO") {
        return true
    } else {
        return false
    }
})
const interns = users.filter(function (user) {
    return user.job === `Intern`

})

const workers = users.filter(user => user.job === `Worker Bee`) //single line, no return

console.log(`Here are all the interns`, interns);
console.log(`Here are all the higherManagementUsers`, higherManagementUsers);
console.log(`Here are all the interns`, workers);


const numberDouble = numbers.map(function (number) {

    return number * 2 // every number in this array, multiply by 2

});

const workerDetails = [
    {name: "Bethany", job: "workers", pay: 12},
    {name: "Tim", job: "workers", pay: 34},
    {name: "Sally", job: "workers", pay: 17},
    {name: "Ben", job: "workers", pay: 7.23},
    {name: "Jason", job: "workers", pay: 78}

]

const updatedWorkerDetails = workerDetails.map(function (worker) {
    // let detailsCopy = worker
    // detailsCopy.pay *= 1.05
    return worker.pay * 1.05
})

console.log("Old Details", workerDetails)
console.log("Updated Details", updatedWorkerDetails)



console.log(numbers.map(num => ({bob: num / 2})));  // map will go through everything in each array and return modified version in new array


let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
    console.log(total)
}

const sum = numbers.reduce((currentTotal, currentNumber) => {
    return currentTotal + currentNumber;
}, 0);


const randomNumbers = [55,73,29,87]; // can take in large array and can refine it to one value
const largestNumber = randomNumbers.reduce(function (currentHighestNumber, number) {
    if (number > currentHighestNumber) {
        return number
    } else {
        return currentHighestNumber
    }
}, 0)
console.log(`Largest Number Reduce`,largestNumber)


console.log("Reduce", sum);