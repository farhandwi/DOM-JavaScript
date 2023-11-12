// DOM SELECTION
// document.getElementById() -> mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.innerHTML = "Merubah Judul";

// document.getElementsByTagName() -> mengembalikan HTMLCollections (array)
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightBlue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> mengembalikan HTML collection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari javascript";

// document.querySelector() -> mengembalikan element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const pQuery = document.querySelector("p");
pQuery.innerHTML = "ini diubah melalui javascript query";

// document.querySelectorAll() -> mengembalikan node list
const pAll = document.querySelectorAll("p");
pAll.forEach((p) => {
  p.style.backgroundColor = "violet";
});

// Mengubah node root
const sectionB = document.querySelector("section#b");
const p4Node = sectionB.getElementsByTagName("p")[0];
p4Node.style.backgroundColor = "lightGreen";

// Performa yang paling baik adalah getElementById dan getElementByTagName
