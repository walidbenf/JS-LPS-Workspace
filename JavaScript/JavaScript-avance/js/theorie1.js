// declaration avec affectation
var i = 0; //number
// ou
var i = "0"; //string
var done = false; //boolean
// affectation à une variable déj) utilisé
i = []; //array
i = {}; // object

//Les tableaux
var tabPrenoms = ["rosita", "bob", "gaston"]; // tableaux
var tabNoms = []; // tableaux
///!\ Le 1er élément est dans la case 0, le dernier dans la case :nb de cases-1

tabNoms.push("Roberto"); // ajout fin
tabNoms[tabNoms.lenght] = "Roberto";
// idem
tabNoms.pop(); //suppression
dernier declarationdelete tabNoms[1]; // suppression
elt - > 1 undefined

//Simple quote ou double quote
var prenom = "Bob";
var nom = 'Gaston';

//Concaténation
var nomComplet = prenom + " " + nom;
var i = 3;
nomComplet = prenom + i;

//Opérateurs
// +,-,*/,%(modulo)

//exemple
i = i + 1;
i = i * 2;
i++;
i = 2 + 10 * 4;
i = (2 + 10) * 4;
i += 4;
i *= 3;

// Comparaison
if (a == b)
  if (a === b) // totale égalité
    if (a >= b) // Si a quest plus grand ou égal à b
      if (a != b) // n'est pas égal en valeur
        if (a !== b) // n'est pas égal en valeur et en types
          //Condtions
          if () {
            //1 seul cas
          }
if () {
  // 2 cas possibles
} else {

}
if () {
  //3 cas possibles
}
elseif() {

}
else {

}

//Récuperer la date

var d = new Date();
var y = d.getFullYear();
var m = d.getMonth();
var dStr = d.toLocalTimeString();


// les boucles for/while/do {

for() {
  for(var i=0,i<3; i++) {
    window.alert("i="1)
  }
}
