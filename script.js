function calcul() {
  var a = document.getElementById("numelemeu").value;
  var b = document.getElementById("numelelui").value;
  var c = Math.floor((Math.random() * 100 ) + 1);
  var d = a + " si " + b + " voi va iubiti " + c + "%";
  alert(d);
}
