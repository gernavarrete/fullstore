export async function getApi(url, containerId) {
  let products = await fetch(url)
    .then((res) => res.json())
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
  console.log(products);

  //document.getElementById(containerId).innerHTML = products
}

export class Products {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  fetchData(url, cb, options = {}) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          console.log(data);
          return;
        }

        let products = cb(data);
        this.#renderContainer(products);
      });
  }
  #renderContainer(data) {
    this.container.innerHTML = data;
  }
}
