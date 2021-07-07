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
getFullName : function() {
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
    getNicelyFormattedFullName : function() {

            if (typeof personTwo.firstName !== 'string' || typeof personTwo.lastName !== 'string' ) return ''
            return personTwo.firstName.charAt(0).toUpperCase() + personTwo.firstName.slice(1) + " " + personTwo.lastName.charAt(0).toUpperCase() + personTwo.lastName.slice(1);

        // return personTwo.firstName + " " + personTwo.lastName;
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