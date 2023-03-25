var obligatoire = Number(prompt("entrer un nombre"));
var nb = 0;
while (isNaN(obligatoire)) {
  nb = Number(prompt("Entrer un nombre"));
  break;
}
document.write("Fin");
