`use strict`

function getUserInfo() {

    return fetch(`https://api.github.com/users/shermanawilson/events/public`,
        {headers: {'Authorization': promisesAccessToken}})
        .then((response) => response.json());

}

getUserInfo()
    .then((userData) => {
        console.log(userData)
        let lastCommit = userData[0].created_at;
        console.log(lastCommit);
    })
    .catch((error) => {
        console.log(`ERROR!`, error);
        return Promise.reject();
    })


// Create Your Own Promise
function wait(number) {

    return new Promise((resolve) => {
        setTimeout(() => {
           resolve('It was successful! Yassss');
        } ,number);
    })
}

wait(4000).then((response) => {
    console.log(response)
})