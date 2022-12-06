const products = [
  { name: "Rice", price: " Price: 5$", quantity: "Quantity: 5", image: "Images/rice.jpeg" },
  { name: "Potato", price: "Price: 5$", quantity: "Quantity: 5", image: "Images/potato.jpeg" },
  { name: "Meat", price: "Price: 5$", quantity: "Quantity: 5", image: "Images/Meat.jpeg" },
  { name: "Milk", price: "Price: 5$", quantity: "Quantity: 5", image: "Images/milk.jpeg" },
];

const mainContent = document.getElementById("main-container");

const createCards = (products) => {
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h2");
  const priceProduct = document.createElement("p");
  const quantityProduct = document.createElement("p");
  const imageProduct = document.createElement("img");
  const btnAddToCard = document.createElement("button");

  nameProduct.textContent = products.name;
  priceProduct.textContent = products.price;
  quantityProduct.textContent = products.quantity;
  imageProduct.setAttribute("src", products.image);
  imageProduct.setAttribute("alt", products.name);

  btnAddToCard.textContent = "Add to Cart";

  cardProduct.classList.add("card");
  imageProduct.classList.add("img");
  nameProduct.classList.add("name");

  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(imageProduct);
  cardProduct.appendChild(priceProduct);
  cardProduct.appendChild(quantityProduct);
  cardProduct.appendChild(btnAddToCard);

  mainContent.appendChild(cardProduct);

}

function renderCards() {
  products.map((element) => { return createCards(element) })
  createCards(productS);
}

window.addEventListener("DOMContentLoaded", renderCards)