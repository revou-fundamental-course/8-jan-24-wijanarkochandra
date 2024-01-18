function hitung() {
  // Ambil nilai sisi dari input
  var sisi = document.getElementById("sisi").value;

  // Ubah nilai dari input menjadi angka
  sisi = parseFloat(sisi);

  // Hitung luas dan keliling
  var luas = sisi * sisi;
  var keliling = 4 * sisi;

  // Tampilkan hasil di dalam elemen dengan id "hasil"
  document.getElementById("hasil").innerHTML = "Luas: " + luas + "<br>Keliling: " + keliling;
}

