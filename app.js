const form = document.querySelector("form");
const cards = document.querySelector(".cards");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = document.querySelector("#name");
  const productPrice = document.querySelector("#price");
  const productImage = document.querySelector("#image");

  const cardItem = document.createElement("div");
  cardItem.classList.add("card");

  const name = document.createElement("p");
  name.textContent = `Product Name: ${productName.value}`;

  const price = document.createElement("p");
  price.textContent = `Product Price: ${productPrice.value}`;

  const image = document.createElement("img");
  image.setAttribute("src", productImage.value);
  image.style.width = "30%";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.addEventListener("click", () => {
    cards.removeChild(cardItem);
  });

  cardItem.append(name, price, image, deleteButton);
  cards.append(cardItem);
});
