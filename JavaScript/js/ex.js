var nom = "Walid";
var mail = "isior@outlook.fr";
var mdp = "123";
var login = prompt("Entrer votre nom");
if (login === nom) {
  var login2 = prompt("Entrer votre mail");
  if (login2 === mail) {
    var login3 = prompt("Entrer votre mot de passe");
    if (login3 === mdp) {
      alert("Bienvenue" + ' ' + nom);
    } else {
      alert("Fuck toi !");
    }
  } else {
    alert("Fuck toi !");
  }
} else {
   alert("Fuck toi !");
}
