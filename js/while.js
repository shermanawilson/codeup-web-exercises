'use strict';

// While Loops

for (let index = 1; index <= 65536; index = (index * 2)) {

   // if(index = index * 2) {
        console.log(index);
}


// Do While Loop #1

var totalCanSell = Math.floor(Math.random() * 50) + 50;
console.log("The total number of cones I can sell is: " + totalCanSell);

let totalSold = 0;
do {
        var conesBought = Math.floor(Math.random() * 5) + 1;
        var notEnough = (totalCanSell - totalSold);
        if((totalSold + conesBought) > totalCanSell) {
                console.log("I'm sorry, I can't sell you " + conesBought + " cones, I only have " + notEnough + " cones left");
                continue;
        }
        console.log("My customer bought " + conesBought + " cones!")
        totalSold = totalSold + conesBought;

        console.log("Ive sold " + totalSold + " cones!");
} while(totalSold < totalCanSell);
console.log("Yay! I've sold them all!");



// console.log(conesSold + " cones sold...");
// console.log("Cannot sell you " +  + " I only have " + + "...");
// console.log("Yay! I sold them all!");