let btnAdd = document.getElementById("btn-add").addEventListener("click", addProducts);
let linkListProd = document.getElementById("list-products");
let products = [];
function showProducts() {
    fetch('https://listprod-fb3ca-default-rtdb.europe-west1.firebasedatabase.app/MyProducts.json')
        .then((rel) => {
            return rel.json();
        })
        .then((data) => {
            products = [];
            for (const key in data) {
                products.push({ ...data[key], id: key });
            }
            return products;
        })
        .then((products) => {
            products.forEach((product) => {
                linkListProd.innerHTML += `
                <tr>
                    <th scope="row">${product.num}</th>
                    <td>${product.product}</td>
                    <td>${product.howMach}</td>
                    <td>${product.val}</td>
                    <td><img onclick = "correctProduct('${product.id}')" src="igm/exchange.png"></td>
                    <td><img class = "img-del"  onclick = "clickDelProduct('${product.id}')" src="igm/del.png"></td>
                </tr>
            `;
            });
        });
}
showProducts();

function addProducts() {
    let prodInput = document.getElementById("product").value;
    let howInput = document.getElementById("how-much").value;
    let valtInput = document.getElementById("val").value;

    if (prodInput !== "" && howInput !== "" && valtInput !== "") {
        fetch('https://listprod-fb3ca-default-rtdb.europe-west1.firebasedatabase.app/MyProducts.json', {
            method: "POST",
            body: JSON.stringify({
                num: products.length + 1,
                product: prodInput,
                howMach: howInput,
                val: valtInput
            })
        });
    }
    document.getElementById("my-form").reset();
    linkListProd.innerHTML = "";
    showProducts();
    // window.location.reload(false);
}
// num: linkListProd.rows.length + 1,
function clickDelProduct(product) {
    console.log(product);
    fetch(`https://listprod-fb3ca-default-rtdb.europe-west1.firebasedatabase.app/MyProducts/${product}.json`, {
        method: "DELETE",
    });
}
function correctProduct(element) {
    let showChangeForm = document.getElementById("correct-form");
    showChangeForm.classList.remove("d-none");

    document.getElementById('btn-change').onclick = function () {
        let changProdInput = document.getElementById("change-product").value;
        let changHowInput = document.getElementById("change-how-much").value;
        let changValtInput = document.getElementById("change-val").value;
        console.log(changProdInput);
        fetch(`https://listprod-fb3ca-default-rtdb.europe-west1.firebasedatabase.app/MyProducts/${element}.json`, {
            method: "PUT",
            body: JSON.stringify({
                num: products.length + 1,
                product: changProdInput,
                howMach: changHowInput,
                val: changValtInput
            })
        });
    };
};
