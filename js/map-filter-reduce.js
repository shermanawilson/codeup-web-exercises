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

// let emailSplit = users.email.split(' ');
// const longestEmail = users.reduce((currentLongest, user) => {
//     // return Math.max(...user.split(' ').reduce(users => users.email.length));
//     if(user.email.length > currentLongest.email.length)
// }, users[0]);
// console.log(longestEmail);