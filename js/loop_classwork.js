//alert("Hey, Girl");

var message = "";

var howmany = prompt("How many?")

// (initialization, condition that allows it to run, increment)
// always 3 parts

for (let index = 0; index < 10; index++) {
    // (for (let index = 10; index > 0; index = index - 2) {
    message = message + "index is: " + index + "\n";
   // break; //stops this completely
}
// alert runs the for loop
alert(message);

alert(index);
//alert(index) will not show up because message is global (var) and index is local (let)