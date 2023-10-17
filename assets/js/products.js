async function getApi() {
  let products = await fetch("https://dummyjson.com/products?limit=9")
    .then((res) => res.json())
    .then((data) => data.products);
  console.table(products);
  let productsElements = products.map(
    (product) =>
      `<div class="divCard"><h1>${product.title}</h1>
  <div class="divImages">
  <span class="material-symbols-outlined">
  arrow_back_ios
  </span>
  <img src="${product.images[0]}" alt="${product.title}">
    <span class="material-symbols-outlined">
    arrow_forward_ios
    </span>
  </div>
    <h1>u$s ${product.price}</h1>
    <button>Add Cart</button>
  </div>`
  );
  console.log(productsElements.toString());
  document.getElementById("productSection").innerHTML = productsElements
    .toString()
    .replaceAll(",", "");
}

getApi();
