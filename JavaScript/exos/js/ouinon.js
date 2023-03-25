var nb = "";
while (nb !== "oui" || nb !== "non") {
  var nb = prompt("Entrer une réponse");
  if (nb === "oui" || nb === "non") {
    break;
  }
}
document.write("Vous avez perdu");
