import { Products, getApi } from "./products.js";
import { renderProducts } from "./renderProducts.js";

const section = new Products("productSection");

section.fetchData("https://dummyjson.com/products?limit=9", renderProducts);

getApi("https://dummyjson.com/products?limit=9", "productSection");
