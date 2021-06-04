//alert("Hello");

 var addNumber;
 // while (true) {
 //     addNumber = parseInt("Enter a number between 1 and 50");
 //     if (addNumber % 2 != 0) {
 //         break;
 //     }
 // }
//var indexFinder = Math.ceil(Math.random() * (50 - 1) + 1);

//addNumber = prompt("What number do you have?");

addNumber = prompt("What is your number?");
for (var index = 0; index < 50; index++) {

    //if(index == index % 2 == 0) {
    if(index === Number(addNumber)) {
        //prompt("What is your number: " + addNumber)
        console.log("Yikes! Skipping number: " + index);
        continue;
    }
    if(index %2 != 0) {
        console.log("Here is an odd number: " + index);
        //console.log("Here is an odd number: " + index);

    }
    // else
    // console.log("Here is an odd number: " + index);
}
