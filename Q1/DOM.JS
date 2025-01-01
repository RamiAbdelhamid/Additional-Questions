let fruitarray = ["Apple", "Banana", "Kiwi", "Orange", "Mango"];

let imgarray = [
  "/Q1/20Ounce_NYAS-Apples2.png",
  "/Q1/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973.avif",
  "/Q1/Kiwi-fruits-582a07b.jpg",
  "/Q1/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
  "/Q1/Mango.jpg",
];

let ulimg = document.createElement("ul");
document.body.appendChild(ulimg);

// Create a new element

for (i = 0; i < fruitarray.length; i++) {
  const list = document.createElement("li");
  const image = document.createElement("img");
  ulimg.appendChild(list);
  ulimg.appendChild(image);
  list.textContent = fruitarray[i];

  image.setAttribute("src", imgarray[i]);
  (image.style.width = "200px"), (height = "200px");
}
