var A = true, B = false;
var prenom = "Samba",
monAge = 999,
prenomLogin = prompt("Quel est votre prenom ?");

if (prenomLogin === prenom)
{
  var age = Number(prompt("Quel est votre âge ?"));

  if (age === monAge)
  {
    alert("Bienvenue M. " + prenomLogin);
  }
  else
  {
    alert("Âge invalide !!");
  }
}
else
{
  alert("Prénom invalide");
}
/**
 * L'opérateur logique AND(ET): &&
 * Vérifie si 2 conditions ou plus sont vrai ou fausse
 */
if ( (prenomLogin === prenom) && (age === monAge) ) {
  alert("Bienvenue M. " + prenomLogin);
} else {
  alert("Prénom ou âge invalide");
}

if ((A) && (B)) {}
// => si A est FAUX et B est VRAI => Retourne FAUX
// => si A est VRAI et B est FAUX => Retourne FAUX
// => si A est FAUX et B est FAUX => Retourne FAUX
// => si A est VRAI et B est VRAI => Retourne VRAI

/**
 * L'opérateur logique OR(OU): ||
 */
if ((A) || (B)) {}
// => si A est FAUX ou B est FAUX => Retourne FAUX
// => si A est FAUX ou B est VRAI => Retourne VRAI
// => si A est VRAI ou B est FAUX => Retourne VRAI
// => si A est VRAI ou B est VRAI => Retourne VRAI

/**
 * L'opérateur logique NOT(NON): !
 * Cette opérateur rend vrai ce qui est faux et inversement
 */
var user = true;
if(!user){
  // Code si l'utilisateur n'est pas loggé
}
// Ce qui revient à écrire:
if (user == false){}

if(user){}
if(user == true){}
