var nom = "samba";
var mail = "samba@mail.fr";
var nom2 = prompt("Quel est votre nom");
var mail2 = prompt("Quel est votre mail");

if ((nom2 === nom) && (mail2 === mail)) {
  var age2 = prompt("Quel est votre âge");
  var annee2 = prompt("Quel annee");
  if ((age2 > 20) || (annee2 > 2000)) {
    var site = prompt("Vrai ou Faux");
    if (site === "vrai") {
      document.location.href = "https://google.com";
    } else {
      document.location.reload(true);
    }
  }
  else {
    document.location.reload(true);
  }
} else {
  document.location.reload(true);
}
