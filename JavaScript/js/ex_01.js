var couleur = prompt("Entrez une couleur?");
if (couleur == 'noir') {
  document.body.style.backgroundColor = "#000";
  location.reload();
} else if (couleur == 'bleu') {
  document.body.style.backgroundColor = "blue";
  location.reload();
} else if (couleur == 'rouge') {
  document.body.style.backgroundColor = "red";
  location.reload();
} else if (couleur == 'vert') {
  document.body.style.backgroundColor = "green";
  location.reload();
} else {
  alert("Couleur non défini !");
  location.reload();
}
