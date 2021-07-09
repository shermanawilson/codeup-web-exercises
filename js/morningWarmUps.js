// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(value) {
    if (typeof value !== "string") {
        if (typeof value === "number") {
            return false;
        }
    } else {
        const spaceCount = value.split(" ").length - 1;
        return spaceCount;
    }
}

// TODO: Add validation to function above, if the argument pass is not a string it should return false.

console.log(countSpaces("Hello There Everyone, My Name Is Sherman And I Love To Play Hippo"));
console.log(countSpaces(" "));
console.log(countSpaces("5"));
console.log(countSpaces("Jenny, Where did you go??"));
console.log(countSpaces(54));


// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
function capitalizeAllNames() {
    const arr = ["fulu", "nulu", "hulu"];
    const arrToUp = String.prototype.toUpperCase.apply(arr).split(",");
    return arrToUp;
}

console.log(capitalizeAllNames());
// // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
//
// function capitalizeFirstLetter(value) {
//     const words = value.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     // return value[0].toUpperCase() + value.substring(1);
//         for (const sElement of words.join(" ")) {
//             return console.log(capitalizeFirstLetter(value));
//         };
// }

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}
var newObj = {
    getFullName: function () {
        return personOne.firstName + " " + personOne.lastName;
    }
};
console.log(newObj.getFullName());
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}

var newObj = {
    getNicelyFormattedFullName: function () {
        const person2FN = personTwo.firstName;
        const person2LN = personTwo.lastName;
        if (typeof person2FN !== 'string' || typeof person2LN !== 'string') return ''
        return person2FN.charAt(0).toUpperCase() + person2FN.slice(1) + " " + person2LN.charAt(0).toUpperCase() + person2LN.slice(1);
    }
};
console.log(newObj.getNicelyFormattedFullName());
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
// //  where each object has 2 properties: originalString and countOfLetters
//  objArrayElement = [
//     {
//         originalString: "This is the original string",
//         countOfLetters: "This is where it will count my letters"
//     },
//     {
//         originalString: "This is the second original string",
//         countOfLetters: "This is the second line that'll count letters"
//     },
//     {
//         originalString: "Third ones a charm aye",
//         countOfLetters: "Yes, the third is a charm"
//     }
// ];


function stringArrayToObject(arrayOfStrings) {
    var arrayOfObjects = []

    for (let i = 0; i < arrayOfStrings.length; i++) {
        arrayOfObjects.push({originalString: arrayOfStrings[i], lengthOfOriginalString: arrayOfStrings[i].length});

    }
    return arrayOfObjects;
}

console.log(stringArrayToObject(['hello', 'dave']));

// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
function arrayOfObjectsToStrings(arrayOfObjects) {

    const results = []

    arrayOfObjects.forEach(function (singObject) {

        results.push(singObject.originalString)

    })
    console.log(results);
}
// console.log(arrayOfObjectsToStrings())
// arrayOfObjectsToStrings();
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne, personTwo, personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
function getTallUsers(arrayOfObjects) {
    //filtering results, we start with
    //something to push results to
    var tallUsers = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        // console.log(arrayOfObjects[i]);
        const currentUser = arrayOfObjects[i]
        const currentUsersHeight = currentUser.heightInInches

        // console.log(heightInInches);

        if (currentUsersHeight >= 65) {
            tallUsers.push(currentUser);
        }
    }
    return tallUsers;
}

console.log(getTallUsers(people));