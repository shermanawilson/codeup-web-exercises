// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(value) {
    const spaceCount = value.split(" ").length - 1;
    return spaceCount;
}
// TODO: Add validation to function above, if the argument pass is not a string it should return false.

console.log(countSpaces("Hello There Everyone, My Name Is Sherma'n And I Love To Play Hippo"));
console.log(countSpaces(" "));
console.log(countSpaces("5"));
console.log(countSpaces("Jenny, Where did you go??"));
