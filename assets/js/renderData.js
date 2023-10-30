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
          .then((res) => res.data);
        let imagesProduct = dataProduct.images;

        let dataHTML = function (data) {
          return `<div class="div_product">
          <div class="div_images_product">
          <span class="material-symbols-outlined" id="span_back_image" >
          arrow_back_ios
          </span>
          <div class="div_img_product" id="img_product">
          <img src="${data.images[0]}" alt="${data.title}" loading="lazy" >
          </div>
          <span class="material-symbols-outlined" id="span_forward_image">
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
        };

        main.innerHTML = dataHTML(dataProduct);

        let spanImageBack = document.getElementById("span_back_image");
        let spanImageForward = document.getElementById("span_forward_image");
        let imgCurrent = document.getElementById("img_product");
        let current = 0;
        spanImageBack.addEventListener("click", function () {
          current -= 1;

          if (current === -1) {
            current = imagesProduct.length - 1;
          }

          imgCurrent.innerHTML = `<img src="${imagesProduct[current]}" alt="${dataProduct.title}" loading="lazy" id="img_product">`;
        });

        spanImageForward.addEventListener("click", function () {
          current += 1;

          if (current === imagesProduct.length) {
            current = 0;
          }

          imgCurrent.innerHTML = `<img src="${imagesProduct[current]}" alt="${dataProduct.title}" loading="lazy" id="img_product">`;
        });
      });
    });
  }
}
