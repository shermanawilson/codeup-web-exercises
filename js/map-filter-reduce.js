`use strict`

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const languages = users.filter(user => user.languages.length >= 3);
console.log(languages);

const emails = users.map(user => user.email);
console.log(emails);

const totalYears = users.reduce((experience, users) => experience + users.yearsOfExperience, 0)
console.log(totalYears)
console.log(totalYears / users.length);


const longestEmail = users.reduce((currentLongest, user) => {
    if(user.email.length > currentLongest.email.length) {
        return user;
    } else {
        return currentLongest;
    }
}, users[0])
console.log(longestEmail.email);


const nameString = users.reduce((accumulator, user) => {
    if(accumulator === ``) {
        return `Your Instructors Are: ` + user.name
    } else {
        return accumulator + `, ` + user.name;
    }
}, ``)
console.log(nameString + `.`)


// Bonus

// const concatLangs = users.reduce((accumulator, user) => accumulator.concat(user.languages), [])
// console.log(concatLangs)
// // bucket array to put all the values
//
// const uniqueLangs = concatLangs.reduce((accumulator, currentValue) => {
//     if(accumulator.indexOf(currentValue) === -1) {
//         // this is to make sure the accumulator doesn't match the current value
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, [])
// console.log(uniqueLangs)

// A Different way

const concatLang = users.reduce((accumulator, user) => accumulator.concat(user.languages), [])
console.log(concatLang)
// concat will put all languages in a big array

const uniqueLang = concatLang.reduce((accumulator, currentValue) => {
    if(accumulator.includes(currentValue)) {
        return accumulator;
    } else {
        accumulator.push(currentValue)
        return accumulator;
    }
    //
}, [])

console.log(uniqueLang);