var textarea = document.getElementById('tweetContent'),
  compteur = document.querySelector('#counterBlock');

function compteurString() {
  var compte = 140 - textarea.value.length;
  compteur.innerHTML = compte;
  if (compte <= 0) {
    compteur.classList.add("red");
  } else {
    compteur.classList.remove('red');
  }
}
textarea.addEventListener('keyup', compteurString);
compteurString();
