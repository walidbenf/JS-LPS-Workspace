/*var j0 = prompt("Entrer un jour de la semaine");
var j1 = "Lundi";
var j2 = "Mardi";
var j3 = "Mercredi";
var j4 = "Jeudi";
var j5 = "Vendredi";
var j6 = "Samedi";
var j7 = "Dimanche";

if (j0 === j1) {
  document.write(j2);
} else if (j0 === j2) {
  document.write(j3);
} else if (j0 === j3) {
  document.write(j4);
} else if (j0 === j4) {
  document.write(j5);
} else if (j0 === j5) {
  document.write(j6);
} else if (j0 === j6) {
  document.write(j7);
} else if (j0 === j7) {
  document.write(j1);
}
*/
var j0 = prompt("Entrer un jour de la semaine");
switch (j0) {
  case "Lundi":
    document.write("Mardi");
    break;
  case "Mardi":
    document.write("Mercredi");
    break;
  case "Mercredi":
    document.write("Jeudi");
    break;
  case "Jeudi":
    document.write("Vendredi");
    break;
  case "Vendredi":
    document.write("Samedi");
    break;
  case "Samedi":
    document.write("Dimanche");
    break;
  case "Dimanche":
    document.write("Lundi");
    break;


}
