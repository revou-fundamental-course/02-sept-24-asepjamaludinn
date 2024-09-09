// Toggle

const navbarnav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// click anyway
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// luas segitiga
const hitungLuasButton = document.getElementById("hitung-luas");

hitungLuasButton.addEventListener("click", (e) => {
  e.preventDefault();
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const luas = (1 / 2) * (alas * tinggi);
  document.getElementById("result-luas").innerHTML = `
  Hasil Perhitungan: <br>
  Luas = 1/2 × a × t <br>
  Luas = 1/2 x ${alas} × ${tinggi} <br>
  Luas = ${luas}
`;
});

// keliling segitiga
const hitungKelilingButton = document.getElementById("hitung-keliling");

hitungKelilingButton.addEventListener("click", (e) => {
  e.preventDefault();
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);
  const keliling = a + b + c;
  document.getElementById("result-keliling").innerHTML = `
  Hasil Perhitungan: <br>
  Keliling =  S1 + S2 + a <br>
  Keliling = ${a} +  ${b} + ${c} <br>
  Keliling = ${keliling}
  `;
});
