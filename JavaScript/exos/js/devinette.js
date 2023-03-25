console.log("Bienvenue");
var rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);
for (i = 0; i <= 6; i++) {
  var prom = Number(prompt("Entrer un nombre"));
  if (rand == prom) {
    alert("Le jeux est fini");
    break;
  }
}
