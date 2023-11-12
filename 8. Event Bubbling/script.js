// Event Handling
// const closer = document.querySelector(".close");
// const card = document.querySelector(".card");

// closer.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
// cara tanpa DOM Traversal
// const closer = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");
// for (let i = 0; i < closer.length; i++) {
//   closer[i].addEventListener("click", function () {
//     card[i].style.display = "none";
//   });
// }

const closer = document.querySelectorAll(".close");

// for (let i = 0; i < closer.length; i++) {
//   closer[i].addEventListener("click", function (e) {
//     // closer[i].parentElement.style.display = "none";

//     // menggunakan e.target
//     e.target.parentElement.style.display = "none";
//   });
// }

// closer.forEach((close) => {
//   close.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// perbedaan antara elemen dan node adalah kalau node mengambil enter pada kode html kalau elemen tidak
// const nama = document.querySelector(".nama");
// console.log(nama.parentNode);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className === "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
