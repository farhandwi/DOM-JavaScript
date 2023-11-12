const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("biru-muda");
});

const buttonBaru = document.createElement("button");
const teksButton = document.createTextNode("Acak Warna");
buttonBaru.appendChild(teksButton);
buttonBaru.setAttribute("type", "button");
tUbahWarna.after(buttonBaru);

buttonBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 100 + 1);
  const g = Math.round(Math.random() * 100 + 1);
  const b = Math.round(Math.random() * 100 + 1);
  //   document.body.style.backgroundColor = `rgb(${r},${g},${b})`; //menggunakan string literal
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
const outputRGB = document.querySelector(".outputRGB");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  outputRGB.innerHTML = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  outputRGB.innerHTML = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  outputRGB.innerHTML = "rgb(" + r + "," + g + "," + b + ")";
});

/*
document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  //   event.clientX;
  //   event.clientY;

  // ukuran browser
  //   console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
*/
