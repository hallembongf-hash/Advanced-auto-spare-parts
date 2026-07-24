let products = JSON.parse(localStorage.getItem("products")) || [];


function addProduct(){

let name = document.getElementById("name").value;

let category = document.getElementById("category").value;

let price = document.getElementById("price").value;


let product = {

name:name,

category:category,

price:price

};


products.push(product);


localStorage.setItem(
"products",
JSON.stringify(products)
);


displayProducts();

}



function displayProducts(){

let list = document.getElementById("productList");


list.innerHTML="";


products.forEach(function(product){

list.innerHTML += `

<div class="card">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p>${product.price}</p>

</div>

`;

});


}


displayProducts();