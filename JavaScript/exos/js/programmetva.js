var tva = Number(prompt("Entrer votre prix hors taxe"));

if (tva) {
  tva2 = tva / 100 * 20;
  tva= tva2 + tva;
  alert(tva);
}
// console.log =afficher dans la console
// document.write= afficher dans la page web
