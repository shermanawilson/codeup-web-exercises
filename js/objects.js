(function() {
    "use strict";

    /**
     *
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {};

    person = {
        firstName: "Shy",
        lastName: "Hall"
    }
    console.log(person);
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }
    console.log(person.sayHello());
    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];


    shoppers.forEach(function(shopper) {
        let amount_before_discount = shopper.amount;
        let discount = 0.12;
        let amount_saved = (amount_before_discount * discount);
        let amount_after_discount = (amount_before_discount - amount_saved);

        if (amount_before_discount <= 200) {
            console.log("Sorry, " + shopper.name + ". No discount for you! Your total before your discount was: $" + amount_before_discount + " Your total after discount is: $" + amount_before_discount);
        }
        if (amount_before_discount >= 200) {
            console.log("Great news " + shopper.name + "! You qualify for a 12% discount! Your total before your discount was: $" + amount_before_discount + ". Your total after discount is: $" + amount_after_discount);
        }
    });
    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [{
        title: "An Unapologetic Cookbook",
        author: {
            firstName: "Joshua",
            lastName: "Weissman"
        }
    },
        {
        title: "Oh, the Places You'll Go!",
        author: {
            firstName: "Dr.",
            lastName: "Seuss"
        }
        },
        {
            title: "The Last Thing He Told Me: A Novel",
            author: {
                firstName: "Laura",
                lastName: "Dave"
            }
        },
        {
            title: "The President's Daughter: A Thriller",
            author: {
                firstName: "James",
                lastName: "Patterson"
            }
        },
        {
            title: "American Marxism",
            author: {
                firstName: "Mark",
                lastName: "Levin"
            }
        }
    ];
    console.log(books[0].title);
    console.log(books[2].author.firstName);
    console.log(books[4].author.lastName);
    /**
     *
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

for (let index = 0; index < books.length; index++) {
    console.log("Book # " + index);
    console.log("Title: " + books[index].title);
    console.log("Author: " + books[index].author.firstName + " " + books[index].author.lastName);
}
console.log();
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        var name = author.split(" ");
        console.log(name[0]);
        console.log(name[1]);
        let firstName = name[0];
        let lastName = name[1];
        return {
            title : title,
            author : {
                firstName: firstName,
                lastName: lastName
            }
        }
    }
 console.log(createBook("Oh, the Places You'll Go!", "Dr. Seuss"));

    function showBookInfo(books, index) {
        console.log("Book # " + index);
        console.log("Title: " + books[index].title);
        console.log("Author: " + books[index].author.firstName + " " + books[index].author.lastName)
    }
    console.log(showBookInfo(books[0]));
})();
