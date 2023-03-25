var nb1 = Number(prompt("Entrer un premier nombre"));
var nb2 = Number(prompt("Entrer un deuxième nombre"));
var resultat=nb1*nb2;
if ((typeof nb1 == 'number') && (typeof nb2 == 'number')) {

alert("" + nb1 + " multiplié par " + nb2 + " vaut " + resultat);
}
