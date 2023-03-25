valeur = Number(prompt("Entrer un nombre"));
str = "";
str2 = "";
str3 = "";
for (var j = 0; j < valeur; j++) {
  for (var i = 0; i < 4; i++) {
    str += "•••";
    document.write(str + "<br>");
  }
  for (var d = 0; d < 4; d++) {
    str3 += "•••";
    document.write(str3 + "<br>");
  }
}

for (var n = 0; n < 3; n++) {
  str2 += "||";
  document.write(str2 + "<br>");
}
// chaque "niveau" du sapin
/*var str = Number(prompt("Entrer un chiffre"))
for (actniv = 0; actniv < str; actniv++) {
  for (ligne = 1; ligne <= 3 + actniv; ligne++) {
    for (i = 1; i <= iterations; i++) {
          color = color.toString(16);
            for (z = 6; color.length < 6; z--) {
              color = '0' + color;
            }
          }
          document.getElementById("sapin").innerHTML = contenu;
          document.getElementById("sapin").style.width = (iterations * 7) + 'px';
        }

        sapin();
        document.getElementById('loop').onclick();
*/
