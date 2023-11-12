// const judul = document.getElementById("judul");

// judul.style.color = "lightBlue";
// judul.style.backgroundColor = "salmon";

const judul = document.getElementsByTagName("h1")[0];
const a = document.querySelector("section#a a");

judul.innerHTML = "<em>Farhan Dwi Septian</em>";
judul.setAttribute("name", "farhan");
a.setAttribute("name", "farhan");
a.removeAttribute("href");

const p2 = document.querySelector(".p2");

// memnipulasi class yang sudah ada

p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label"); // menambahkan class jika belum ada, kalau sudah maka dihapus classnya
// document.body.classList.toggle("biru-muda");
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");
p2.classList.item(2);
p2.classList.contains("dua"); //mengecek apakah ada kelas bernama dua atau tidak
p2.classList.replace("dua", "empat");

// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan p baru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("section#b ul li:nth-child(2)");

ul.insertBefore(liBaru, li2); // memiliki 2 parameter yang pertama adalah node baru dan yang kedua akan disimpan di sebelum node apa

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
