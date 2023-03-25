var note =Number(prompt("Entrer votre moyenne"));
if(note<10){
  document.write("Vous êtes recalé");
}
else if(note<12){
  document.write("Vous êtes reçu");
}
else if(note>=12){
  document.write("Vous êtes reçu avec mention");
}
