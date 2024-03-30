const boxpertanyaan = document.getElementById("boxpertanyaan")
const kalimatpertanyaan = document.getElementById("kalimatpertanyaan");
const pertanyaan = document.getElementById("pertanyaan");
const luaran = document.getElementById("luaran")
const gambardetektif = document.getElementById("gambardetektif");
const buttonpertanyaan = document.getElementById("buttonpertanyaan");
const benar = document.getElementById("benar");
const salah = document.getElementById("salah");

benar.addEventListener('click', ()=> {
  kalimatpertanyaan.innerHTML = "Anda Berbohong!";
  pertanyaan.innerHTML = "Anda adalah seorang Teknisi";
  luaran.style.backgroundColor = "#E12E2E";
  gambardetektif.src = "Assets/Teknisi.png";
  buttonpertanyaan.style.display = 'none';
  boxpertanyaan.classList.add("animasigetar");
});

salah.addEventListener('click', ()=> {
  kalimatpertanyaan.innerHTML = "Anda Benar!";
  pertanyaan.innerHTML = "Anda adalah seorang Mahasiswa";
  luaran.style.backgroundColor = "#6FD240"
  gambardetektif.src = "Assets/Mahasiswa.png";
  buttonpertanyaan.style.display = 'none';
  boxpertanyaan.classList.add("animasijj");
});