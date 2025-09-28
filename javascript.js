function daftar() {
    var nama;
    nama=prompt('masukkan nama anda :')
    alert (nama + " anda sudah terdaftar");
    console.log ("anda sudah terdaftar");
    alert ('Terima kasih sudah mendaftar ' +nama )
}
function ToggleInfo() {
  const info = document.getElementById("moreInfo");
  if ( info.style.display === "none") {
    info.style.display = "block";
  }
  else {
    info.style.display = "none";
  }
}