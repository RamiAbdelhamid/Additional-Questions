array = [10, 20, 30, 40, 50];
num = 40;

for (let i = 0; i < array.length; i++) {
  if (array[i] == num) {
    index = i;
    break;
  } else {
    index = -1;
  }
}

const arrContanier = document.getElementsByClassName("arrContanier")[0];
const result = document.createElement("p");
result.textContent = index;

arrContanier.appendChild(result);

