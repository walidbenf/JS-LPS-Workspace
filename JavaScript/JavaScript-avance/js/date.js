//var anniv = ['Laurent', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
var anniv = [{
    name: 'Laurent',
    birthday: '2019-01-26'
  },
  {
    name: 'Laura',
    birthday: '2019-01-29'
  }, {
    name: 'Laure',
    birthday: '2019-01-12'
  }, {
    name: 'Laurence',
    birthday: '2019-01-26'
  }
];
var nom = prompt('Entrer un nom');
var nomb = new Date(prompt('Entrer une date en format YYYY-MM-DD'));
var time = nomb.getTime();
console.log(anniv);
var nouv = anniv.push({
  name: nom,
  birthday: nomb
});
var m2 = nomb.getMonth();
var nomb = nomb.toString();
var d = new Date();
var l = d.setHours(1, 0, 0, 0);
//var y = d.getFullYear();
//var m = d.getMonth();
//var j = d.getUTCDate();
var h = d.getUTCHours();
var d = d.toString();
var cont = document.getElementById('contenu');
var keys = anniv.keys();
var s='';
if (m2 == 0) {
  alert('Bonne année');
}
if (d == nomb) {
  alert('Bonne anniversaire' + ' ' + nom);
} else if (nomb == 'Invalid Date') {
  alert('Date Invalide');
}


for (name in anniv) {
  s += name;
  /*switch (name) {
    case 'Laurent':
      alert('bonjour');
      break;
    case 'Laura':
      alert('bonsoir');
      break;
    case 'Laure':
      alert('bonsoir');
      break;
    case 'Laurence':
      alert('bonsoir');
      break;
      default:alert('test');
  }*/
  }
}
alert(s);

/*if ((h >= 20) && (h <= 7)) {
  cont.style.background = "url(C:/xampp/htdocs/FormationPierrefitte/Javascript/Javascript-avance/img/nuit.jpg)";
} else {
  cont.style.background = "url(C:/xampp/htdocs/FormationPierrefitte/Javascript/Javascript-avance/img/jour.jpg)";
}
*/
