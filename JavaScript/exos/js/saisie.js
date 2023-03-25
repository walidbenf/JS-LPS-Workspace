/*var nb = Number(prompt("Entrer un nombre"));

while (nb) {

  if (nb >= 50 && nb <= 100) {
    alert("Bien joué");
    break;
  } else {
    var nb = Number(prompt("Entrer un nombre"));
  }
}
*/
var nb=0;
while(nb<=50 || nb> 100){
  nb=Number(prompt("Entrer un nombre"));
}
document.write("bien joué");
