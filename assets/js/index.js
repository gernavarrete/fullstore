import { RenderData, getApi } from "./renderData.js";
import { renderProductSearch } from "./renderProductSearch.js";
import { renderProducts } from "./renderProducts.js";

let inputSearch = document.getElementById("search_product");

const section = new RenderData("cards_section");

section.fetchData("https://dummyjson.com/products?limit=9", renderProducts);

inputSearch.addEventListener("input", function searchProduct(e) {
  e.preventDefault();
  console.log(e);
  if (!e.target.value)
    return section.fetchData(
      "https://dummyjson.com/products?limit=9",
      renderProducts
    );
  section.fetchData(
    "https://dummyjson.com/products?limit=100",
    renderProductSearch,
    e.target.value
  );
});

getApi("https://dummyjson.com/products?limit=9", "cards_section");
