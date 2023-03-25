var taille = Number(prompt("Choisir le nombre d'étages du sapin" ));

for (var etage = 1; etage <= taille; etage++) {
  for (var i = 0; i < etage + 3; i++) {
    for (nb_etoile = 1; nb_etoile <= ((etage + i) * 2) - 1; nb_etoile++) {
      document.getElementById('sapin').innerHTML += '*';
    }
    document.getElementById('sapin').innerHTML += '<br>';
  }
}
for (var pied = 1; pied <= taille; pied++) {
  document.getElementById('sapin').innerHTML += '|||';
  document.getElementById('sapin').innerHTML += '<br>';
}
