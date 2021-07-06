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
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter(value) {
    // const arraay = value;
    // const words = arraay.split(" ");
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // // return value[0].toUpperCase() + value.substring(1);
    //     words.join(" ");
    const finalSentence = value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}
console.log(capitalizeFirstLetter(['hello world my name is shy']));