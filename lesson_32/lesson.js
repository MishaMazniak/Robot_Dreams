// _______C_R_U_D________

// get (show) data from database ____ GET _____
fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets.json')
    .then((data) => {
        return data.json();
    })
    .then((myText) => {
        myObj = JSON.parse(myText);
        return console.log(myObj);
    });

// let aaa = [];
// fetch('https://dummyjson.com/products')
// .then((res) => {
//     return res.json();
// })
//     .then((data) => {
//         console.log(data);
//         aaa = data.products; //products - key object
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// setTimeout(() => {
//     console.log(aaa);
// }, 1000);

// // push data to database _____ POST ______

function post() {
    fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets.json', {
        method: "POST",
        body: JSON.stringify({
            title: "my tweet 5",
            name: "Roman"
        })
    });
}
// post();

// correcr tweet in database _____ PATCH ______
function patch() {
    fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NbtVbdo2cNELQjHxUn2.json', {
        method: "PATCH",
        body: JSON.stringify({
            title: "my tweet 3",
            name: "Misha",
        })
    });
};
// patch();

// change tweet in database _____ PUT ______
function put() {
    fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NbtV192uLDEbnB228mT.json', {
        method: "PUT",
        body: JSON.stringify({
            age: 33,
            height: 184
        })
    });
};
// put();

// delete tweet from database _____ DELETE ______
function del() {
    fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets/-NbtjpUOvlqE8NArRb2W.json', {
        method: "DELETE",
    });
};
// del();


// ______________________________________________________________________


// get(show) data from database ____ GET + correct array + send in HTML _____;

let linkOnHtmlTweet = document.getElementById("tweets");

fetch('https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets.json')
    .then((data) => {
        return data.json();
    })
    .then((myText) => {
        let tweets = [];
        for (const key in myText) {
            tweets.push({ ...myText[key], id: key });
        }
        return tweets;
    })
    .then((tweets) => {
        tweets.forEach((tweet) => {
            linkOnHtmlTweet.innerHTML += `
            <div class="tweet" data-id="${tweet.id}">
            <p>${tweet.title}</p>
            <span>${tweet.name}</span>
            </div>
            `;
        });
    });

// correct tweet in database _____ PATCH  +  link ${tweet.id} on id element  ______
function patch(tweet) {
    fetch(`https://rd-api-b64b5-default-rtdb.europe-west1.firebasedatabase.app/tweets/${tweet.id}.json`, {
        method: "PATCH",
        body: JSON.stringify({
            title: "my tweet 3",
            name: "Misha",
        })
    });
};


