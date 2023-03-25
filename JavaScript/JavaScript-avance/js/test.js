/*var tabPrenoms= ['Rositta', 'Bob', 'Gaston', 'Roberto'];
for(var i=0;i<tabPrenoms.lenght;i++) {
  alert(tabPrenoms[i])
}*/
var a, key, s = '';
       // Initialiser l'objet.
       a = {'a' : 'Athènes', 'b' : 'Belgrade', 'c' : 'Casablanca'}
       // Parcourir les propriétés.
       for (key in a)
       {
          s += 'clé => ' + key + ' valeur => ' + a[key] + '\n';
       }
       alert(s);
