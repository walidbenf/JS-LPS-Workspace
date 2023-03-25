var a = Number(prompt("Entrer un premier nombre"));
var b = Number(prompt("Entrer un deuxième nombre"));
if (a > b) {
  document.write(a + " est plus grand que " + b);
} else if (b > a) {
  document.write(a + " est plus petit que " +  b);
} else if (a = b) {
  document.write(a + " est égal à " + b);
}
