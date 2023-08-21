console.log("Lesson 32");

// Створити сторінку з відображенням фільмів/блог постів/юзерів/продуктів і тд:
// - Додати в скрипт подію на завантаження документу.
//      В функції-обробнику події зробити запит на один зі списків API зі сайту
//      https://dummyapi.online/docs
// - З відповіді використовувати отримані поля.
// - Вивести отримані дані на сторінку. Оформити виведений список за допомогою css

let linkShowMovies = document.getElementById("my-movies");
let linkShowTweets = document.getElementById("my-tweets");
let linkShowOnUsers = document.getElementById("my-users");
let linkShowProducts = document.getElementById("my-products");

let linkMovies = document.getElementById("movie");
let linkTweets = document.getElementById("tweets");
let linkHeaderTable = document.getElementById("header-tab-users");
let linkOnUsers = document.getElementById("users");
let linkProducts = document.getElementById("products");

let linkSelectTems = document.querySelectorAll('.but-select button');
linkSelectTems.forEach(myFunction);

function myFunction(item) {
    item.addEventListener('click', (el) => {
        linkShowMovies.classList.add("d-none");
        linkShowTweets.classList.add("d-none");
        linkShowOnUsers.classList.add("d-none");
        linkShowProducts.classList.add("d-none");
        let elEvent = el.target.title;
        if (elEvent === "Movies") {
            linkShowMovies.classList.remove("d-none");
            myListMovies();
        }
        if (elEvent === "Tweets") {
            linkShowTweets.classList.remove("d-none");
            myListTweets();
        }
        if (elEvent === "Users") {
            linkShowOnUsers.classList.remove("d-none");
            myListUsers();
        }
        if (elEvent === "Products") {
            linkShowProducts.classList.remove("d-none");
            myListProducts();
        }
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
                    <div class = "carousel-item active position-relative">
                    <h2 class = "text-center">${key.movie}</h2>
                    <span>Rating - ${key.rating}
                        <img src="images/rating-icon.png" class="img-tweet">
                    </span>
                    <img src="${key.image}" class="d-block w-100 img-movie" alt="...">
                    <a href ="${key.imdb_url}"><img src="images/play-icons.png" class="position-absolute top-50 start-50 translate-middle img-play" alt="..."></a>
                    </div>
                    `;
                } else {
                    linkMovies.innerHTML += `
                    <div class = "carousel-item">
                    <h2  class = "text-center">${key.movie}</h2>
                    <span>Rating - ${key.rating}
                        <img src="images/rating-icon.png" class="img-tweet">
                    </span>
                    <img src="${key.image}" class="d-block w-100 img-movie" alt="...">
                    <a href ="${key.imdb_url}"><img src="images/play-icons.png" class="position-absolute top-50 start-50 translate-middle img-play" alt="..."></a>
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
                    </h5>
                    <p class="card-text">${key.content}</p> 
                    <a href ="#" class="text-decoration-none">        
                        <span class="text-uppercase ">${key.author}
                            <img class="img-tweet" src="images/twitter-icon.png">
                        </span>
                    </a>    
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
            myProducts.forEach((key) => {
                linkProducts.innerHTML += `
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
