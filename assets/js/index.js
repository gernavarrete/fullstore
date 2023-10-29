import { RenderData, getApi } from "./renderData.js";
import { renderProductSearch } from "./renderProductSearch.js";
import { renderProducts } from "./renderProducts.js";

let inputSearch = document.getElementById("search_product");

const section = new RenderData("cards_section");

let quantityProduct = 9;

section.fetchData(
  `https://dummyjson.com/products?limit=${quantityProduct}`,
  renderProducts
);

inputSearch.addEventListener("input", function searchProduct(e) {
  e.preventDefault();
  if (!e.target.value) {
    return section.fetchData(
      `https://dummyjson.com/products?limit=${quantityProduct}`,
      renderProducts
    );
  } else {
    section.fetchData(
      "https://dummyjson.com/products?limit=100",
      renderProductSearch,
      e.target.value
    );
  }
});

/* let cartSection = document.getElementById("cart_icon")

cartSection.addEventListener("click", ()=> {
    let section = new RenderData("main")

}) */

//getApi("https://dummyjson.com/products?limit=9", "cards_section");
