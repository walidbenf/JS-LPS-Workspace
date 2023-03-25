document.write(12);
document.write("phrase");
var varia = "a";
document.write(varia);

var temp = 12;
if (temp <= 12) {
  alert("il fait trop froid");
} else if (temp => 20) {
  alert("Il fait trop chaud");
} else {
  alert("Il fait tiède");
}

var j = 0;
while (j <= 100) {
  document.write("<hr><p>Tour de boucle while n°" + j + "</p>");
  j++;
}

for (var i = 1; i <= 100; i++) {
  document.write("Tour de boucle n°" + i + "<br>");
}
document.write("<table>");
for (let i = 0; i <= 10; i++) {
  document.write("<tr>");
  for (j = 0; j <= array.lenght; j++) {
    document.write("<td>");
    document.write(i * j);
    document.write("</td>");
  }
  document.write("</tr>");
}
