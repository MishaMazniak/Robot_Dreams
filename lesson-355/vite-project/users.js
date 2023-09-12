// Створити новий проект та використовуючи 
// https://gorest.co.in/ розробити додаток, 
// який буде виводити список користувачів. При переході на користувача - 
// перейти на новий документ, який буде відображати пости вибраного користувача.
const linkUsers = document.querySelector("#users-box");
let dataUser = {
    id: "",
    name: "",
};
function shouUsers() {
    fetch('https://gorest.co.in/public/v2/users')
        .then((rel) => {
            return rel.json();
        })
        .then((users) => {
            users.forEach((user) => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.id = user.id;
                userElement.title = user.name;
                userElement.innerHTML += `
                <a href="post.html" class="user-link">
                    <div class="user-name">
                        <img src="icons/user-icon.png" />
                        <div class="user_data">
                            <span class="span-name" data-id="${user.id}">${user.name}</span>
                            <span class="user-email">${user.email}</span>
                            <span class="user-gender">${user.gender}</span>
                            <span class="user-status">${user.status}</span>
                        </div>
                    </div>
                </a>
                `;
                linkUsers.appendChild(userElement);
            });
        });
}
function idUser(userId, userName) {
    dataUser.id = userId,
        dataUser.name = userName,
        console.log(dataUser);
}
linkUsers.addEventListener('click', (event) => {
    const userLink = event.target.closest('.user');
    if (userLink) idUser(userLink.id, userLink.title);
});
shouUsers();
export default dataUser;