export function renderProducts(data) {
  let products = "";
  if (!data) {
    console.log("Data Not Found");
    return null;
  }
  let dataProducts = data.products;
  products = dataProducts
    .map(
      (product) => `<div class="div_card" id="${product.id}">
            <div class="div_images">
            <img src="${product.images[0]}" alt="${product.title}">
              </div>
              <h1>${product.title}</h1>
              <h3>u$s ${product.price}</h3>
              <button class="product_btn">Add Cart</button>
            </div>`
    )
    .toString()
    .replaceAll(",", "");

  return products;
}
