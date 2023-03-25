// Pour utiliser un script js dans le body on utilise la balise script.
//On attribue des variables en Javascript grâce à l'attribut var avant le nom de la variable on lui défini une valeur avec un =.
var test = "C'EST MOI !!!";
var space = " ";
var br = "\n";
var filler = "SALUT TOUT L'MONDE !!!";
var test2 = "C'EST ENCORE MOI";
// On récupére un element par son id qu'on lui a attribué plus haut et après l'avoir récupéré on lui en attribue un nouveau.
// On concatène avec un "+"" afin d'assembler les variables entre elles.
document.getElementById("txt").innerText = "SALUT TOUT L'MONDE !!!" + space + test + br + filler + space + test2;
