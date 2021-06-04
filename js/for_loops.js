// #2

function showMultiplicationTable(number) {
   // var otherNumber = 0;
    for (let otherNumber = 1; otherNumber <= 10; otherNumber++) {
        console.log(number + " x " + otherNumber + " = " + (number * otherNumber));
    }
    //alert(showMultiplicationTable(7));
}
alert(showMultiplicationTable(7));
//console.log(showMultiplicationTable(number));

// #3

    for (let newNum = 0; newNum <= 10; newNum++) {
        let ranNumber = Math.ceil(Math.random() * (200 - 20) + 20);
        if (ranNumber % 2 !== 0) {
            console.log(ranNumber + " is even");
        } else {
            console.log(ranNumber + " is odd");
        }
    }

//alert(number(ranNumber));

// #4

for (let num = 1; num <= 9; num++) {

    var number = "";
    number = num ;
    for (let num1 = 1; num1 < num; num1++) {
        number = number + num.toString();
    }
    console.log(number.toString());
}

// Another way to do number 4

for (var index = 1,number = ""; index < 10; index++) {
    number += "1";
    console.log(index * number)
}
// #5

 for (let index = 100; index >= 5; index = (index - 5)) {
     console.log(index);
 }



