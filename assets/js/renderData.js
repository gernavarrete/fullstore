export async function getApi(url, containerId) {
  let products = await axios
    .get(url)
    .then((res) => res.data)
    .then((data) =>
      data.products
        .map(
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
        )
        .toString()
        .replaceAll(",", "")
    );
  //console.log(products);

  //document.getElementById(containerId).innerHTML = products;
}

export class RenderData {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  fetchData(url, cb, product, options = {}) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          console.log(data);
          return;
        }

        let products = cb(data, product);

        this.#renderContainer(products);
        this.#productListener();
      });
  }
  #renderContainer(data) {
    this.container.innerHTML = data;
  }

  #productListener() {
    let productsCreate = document.querySelectorAll(".div_card");
    productsCreate.forEach((product) => {
      product.addEventListener("click", async function (event) {
        event.preventDefault();
        let id = product.getAttribute("id");
        let dataProduct = await axios
          .get(`https://dummyjson.com/products/${id}`)
          .then((res) => res.data)
          .then((data) => {
            return `<div class="div_product">
            <div class="div_images_product">
            <span class="material-symbols-outlined span_back_image">
            arrow_back_ios
            </span>
            <img src="${data.images}" alt="${data.title}">
            <span class="material-symbols-outlined span_froward_image">
            arrow_forward_ios
            </span>
            </div>
            <div class="div_info">
              <h1>${data.title}</h1>
              <hr>
              <br>
              <p>${data.description}</p>
              <h2>u$s ${data.price}</h2>
              <br>
              <div>
              <button class="product_btn">Add Cart</button>
              </div>
              <br>
              </div>
              </div>
              <button class="product_btn"><a href="./index.html"> Back </a></button>
        
        `;
          });
        main.innerHTML = dataProduct;
        /* let spanImageBack = document.querySelectorAll(".span_back_image");

        spanImageBack.forEach((span) =>
          span.addEventListener("click", function () {
            handlerImage(-1);
          })
        );

        let spanImageForward = document.querySelectorAll(".span_forward_image");

        spanImageForward.forEach((span) =>
          span.addEventListener("click", function () {
            handlerImage(+1);
          })
        );

        handlerImage = (num) => {}; */
      });
    });
  }
}
