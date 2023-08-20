console.log("Lesson 32");

// Створити сторінку з відображенням фільмів/блог постів/юзерів/продуктів і тд:
// - Додати в скрипт подію на завантаження документу.
//      В функції-обробнику події зробити запит на один зі списків API зі сайту
//      https://dummyapi.online/docs
// - З відповіді використовувати отримані поля.
// - Вивести отримані дані на сторінку. Оформити виведений список за допомогою css

let linkMovies = document.getElementById("my-movie");
let linkTweets = document.getElementById("tweets");
let linkHeaderTable = document.getElementById("header-tab-users");
let linkOnUsers = document.getElementById("users");
let linProducts = document.getElementById("products");

let linkSelectTems = document.querySelectorAll('.but-select button');
linkSelectTems.forEach(myFunction);

function myFunction(item) {
    item.addEventListener('click', (el) => {
        let elEvent = el.target.innerText;
        if (elEvent === "Movies") myListMovies();
        if (elEvent === "Tweets") myListTweets();
        if (elEvent === "Users") myListUsers();
        if (elEvent === "Products") myListProducts();
    });
}


function myListMovies() {
    fetch('https://dummyapi.online/api/movies')  //movies
        .then((res) => {
            return res.json();
        })
        .then((myMovies) => {
            myMovies.forEach((key) => {
                if (key.id === 1) {
                    linkMovies.innerHTML += `
                    <div class = "carousel-item active">
                    <a href ="${key.imdb_url}">
                    <img src="${key.image}" class="d-block w-100 img-movie" alt="...">
                    </a>
                    </div>
                    `;
                } else {
                    linkMovies.innerHTML += `
                    <div class = "carousel-item">
                    <a href ="${key.imdb_url}">
                    <img src="${key.image}" class="d-block w-100 img-movie" alt="...">
                    </a>
                    </div>
                    `;
                }
            });
        });
}
// myListMovies();

function myListTweets() {
    fetch('https://dummyapi.online/api/blogposts') // blogposts
        .then((res) => {
            return res.json();
        })
        .then((myTweets) => {
            myTweets.forEach((key) => {
                linkTweets.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${key.title}
                        <img class="img-tweet" src="images/tweet.jpeg">
                    </h5>
                    <p class="card-text">${key.content}</p>         
                    <span class="text-uppercase">${key.author}</span>
                    <span class="float-end">${key.date_published}</span>
                </div>
            </div>
            `;
            });
        });
}
// myListTweets();

function myListUsers() {
    linkHeaderTable.classList.remove("d-none");
    fetch('https://dummyapi.online/api/users') // Users
        .then((res) => {
            return res.json();
        })
        .then((myUsers) => {
            myUsers.forEach((key) => {
                linkOnUsers.innerHTML += `
                <tr>
                    <th scope="row">${key.id}</th>
                    <td>${key.name}</td>
                    <td>${key.username}</td>
                    <td>${key.email}</td>
                    <td>${key.address.city}
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                info
                            </button>
                            <ul class="dropdown-menu">
                                <li>${key.address.street}</li>
                                <li>${key.address.zipcode}${key.address.state}</li>
                            </ul>
                        </div>
                    </td>
                </tr>
            `;
            });
        });
}
// myListUsers();

function myListProducts() {
    fetch('https://dummyapi.online/api/products') // Products
        .then((res) => {
            return res.json();
        })
        .then((myProducts) => {
            console.log(myProducts);
            myProducts.forEach((key) => {
                linProducts.innerHTML += `
                <div class="card col-9 offset-2 col-sm-3 offset-md-0 my-3">
                    <img src="${key.image}" class="card-img-top" alt="img product">
                    <div class="card-body">
                        <h5 class="card-title">${key.name}</h5>    
                        <span class="text-uppercase">${key.price} $</span>
                        <p>${key.description}</p>
                    </div>
                </div>
            `;
            });
        });
}
// myListProducts();
