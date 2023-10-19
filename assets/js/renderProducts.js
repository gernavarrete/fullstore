export function renderProducts(data) {
  let products = "";
  if (!data) {
    console.log("Data Not Found");
    return null;
  }
  let dataProducts = data.products;
  products = dataProducts
    .map(
      (product) => `<div class="divCard">
            <div class="divImages">
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
            <img src="${product.images[0]}" alt="${product.title}">
              <span class="material-symbols-outlined">
              arrow_forward_ios
              </span>
              </div>
              <h1>${product.title}</h1>
              <h1>u$s ${product.price}</h1>
              <button>Add Cart</button>
            </div>`
    )
    .toString()
    .replaceAll(",", "");

  return products;
}
