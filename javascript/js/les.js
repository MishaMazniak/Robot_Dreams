console.log("_______ les-27 _________");

let tweets = [
    {
        id: "id_tweet",
        autor: "Jon",
        title: "text 1",
        myImg: true,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
    {
        id: "id_tweet2",
        autor: "Bob",
        title: "text 2",
        myImg: false,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
    {
        id: "id_tweet3",
        autor: "Bil",
        title: "text 3",
        myImg: false,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
    {
        id: "id_tweet4",
        autor: "Alan",
        title: "text 4",
        myImg: true,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
    {
        id: "id_tweet5",
        autor: "Stiw",
        title: "text 5",
        myImg: true,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
    {
        id: "id_tweet6",
        autor: "Olaf",
        title: "text 6",
        myImg: true,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident non autem quis voluptate culpa atque omnis voluptas dolore velit reprehenderit fugiat, nihil illo a. Harum, repellendus officia maxime dolorem nostrum et impedit!"
    },
];

let myTweets = document.getElementById('my_test_div');

tweets.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add('tweet');
    div.classList.add("tweet_${el.id}");
    // div.style.color = "red";

    div.innerHTML = `
    <h2>
    ${el.autor}
    ${el.myImg ? "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq20vV8lNZ-19vgbOgiFU_Ooh9z-QnBx2_8V8Jhx0&s" : ""}
    </h2>
    <h4>${el.title}</h4>
    <p>${el.text}</p>
    `;

    myTweets.append(div);
});


let tweerHTMLList = document.querySelectorAll('.tweet');
console.log(tweerHTMLList[3].clientWidth);