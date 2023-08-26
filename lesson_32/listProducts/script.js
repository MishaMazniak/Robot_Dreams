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
                <tr ondblclick = "clickDelProduct('${product.id}')" onclick = "correctProduct('${product.id}')">
                    <th scope="row">${product.num}</th>
                    <td>${product.product}</td>
                    <td>${product.howMach}</td>
                    <td>${product.val}</td>
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
    // showProducts();
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
    // showChangeForm.classList.add('d-block');


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
