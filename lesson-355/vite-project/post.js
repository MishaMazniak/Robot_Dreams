import dataUser from './users';
console.log(dataUser);

let linkUserPost = document.querySelector("#post-box");
let userName;

fetch('https://gorest.co.in/public/v2/posts')
    .then((rel) => {
        return rel.json();
    })
    .then((posts) => {
        let myId;
        posts.forEach((post) => {
            if (post.id === dataUser.id) myId = post;
        });
        return myId;
    })
    .then((post) => {
        if (post) {
            userName = post.user_id;
            linkUserPost.innerHTML += `
                <div class="post-user-name">${post.user_id}</div>
                    <div class="post-conteiner">
                        <h2>My post</h2>
                        <h4>Title:</h4>
                        <p class="post-title">${post.title}</p>
                        <h4>Body:</h4>
                        <p class="post-text">${post.body}</p>
                    </div>
                `;
        } else {
            linkUserPost.innerHTML += `
                <div class="post-user-name">${userName}</div>
                <div class="post-conteiner">
                    <h2>My post</h2>
                    <h4>Not any posts</h4> 
                </div>
                `;
        }
    });
