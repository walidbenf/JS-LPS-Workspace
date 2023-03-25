var test = prompt("Merci d'insérer l'url d'une image");

if(test){
  document.getElementById('img').src = test;
}
else{
  location.reload();
}
