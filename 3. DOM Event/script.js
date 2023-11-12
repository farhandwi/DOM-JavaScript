// menggunakan method event handler
const p3 = document.querySelector(".p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// menggunakan Method addEventListener

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item Baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// perbedaannya adalah ketika kita memberikan lebih dari satu perubahan pada sebuah event, jika menggunakan event handler perubahannya ada di timpa dengan fungsi baru dan jika menggunakan event listener perubahannya akan ditambahkan

// p3.onclick = function () {
//   p3.style.backgroundColor = "lightgreen";
// };

// p3.onclick = function () {
//   p3.style.color = "green";
// };

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("click", function () {
  p3.style.color = "red";
});

p3.addEventListener("dblclick", function () {
  p3.style.fontSize = "50px";
});

p3.addEventListener("mouseenter", function () {
  p3.style.border = "2px solid black";
});

p3.addEventListener("mouseleave", function () {
  p3.style.border = "2px solid #dedede";
});
