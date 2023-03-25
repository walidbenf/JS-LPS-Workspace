/**
 * LES BOOUCLES
 */
// -- La boucle FOR
/**
 * La Boucle for
 * 1. On initialise un compteur que l'on stocke dans une variable
 * 2. On défini la condition qui doit être vrai
 * 3. On incrément ou on décrémente
 */
/*for (var i = 1; i <= 10; i++) {
  document.write("Tour de boucle n°" + i + "<br>");
}

/**
 * La boucle while
 * Très utilisée quand on ne connaît pas le nombre de tours de
 * boucles à l'avance
 */
/*var j = 1;

while (j <= 10) {
  document.write("<hr><p>Tour de boucle while n°" + j + "</p>");
  j++;
}
var a = 7;

while (a <= 77) {
  document.write("<hr><p>Tour de boucle while n°" + a + "</p>");
  a++;
}*/
var b = 0;
while (b <= 100) {
  document.write("<hr><p>Tour de boucle while n°" + b + "</p>");
  b += 10;
}
// EXERCICE
// j'ai 1000€ sur mon compte
// chaque mois j'ajoute 50€
// combien de temps me faut-il pour avoir 2000€ sur mon compte ?
var vrai = prompt("Entrer la valeur correcte");
var v = 0;

while (v < 1) {
  if (vrai != "vrai") {
    var vrai = prompt("Entrer la valeur correcte");
  } else {
    alert(vrai);
    v++;
  }

}
