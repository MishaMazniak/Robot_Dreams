let linkUserPost = document.querySelector("#post-box");
let dataUser = JSON.parse(localStorage.getItem('dataUser'));
fetch('https://gorest.co.in/public/v2/posts')
    .then((rel) => {
        return rel.json();
    })
    .then((posts) => {
        let userWithPosts = [];
        posts.forEach((post) => {
            if (post.user_id === +dataUser.id) userWithPosts.push(post);
        });
        return userWithPosts;
    })
    .then((posts) => {
        if (posts.length > 0) {
            linkUserPost.innerHTML += `
                <div class="post-user-name">${dataUser.name}</div>
                    <div class="post-conteiner">
                        <h2>My posts</h2>
                </div>
                `;
            posts.forEach((post) => {
                linkUserPost.innerHTML += `
                        <p class="post-title">${post.title}</p>
                        <p class="post-text">${post.body}</p>
                `;
            });
        } else {
            linkUserPost.innerHTML += `
                <div class="post-user-name">${dataUser.name}</div>
                <div class="post-conteiner">
                    <h2>My posts</h2>
                    <h4>Not any posts</h4> 
                </div>
                `;
        }
    });