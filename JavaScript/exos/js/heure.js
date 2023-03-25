var heure = Number(prompt("Quel heure est-il"));
var minute = Number(prompt("Quel minute est-il"));
var seconde = Number(prompt("Quel seconde est-il"));

if (seconde) {
  if ((seconde === 59) && (minute === 59) && (heure < 23)) {
    heure++;
    minute = 0;
    seconde = 0;
  } else if ((seconde === 59) && (minute < 59)) {
    minute++;
    seconde = 0;
  } else if (seconde < 59) {
    seconde++;
  } else if ((seconde === 59) && (minute === 59) && (heure === 23)) {
    seconde = 0;
    minute = 0;
    heure = 0;
  }
  document.write(heure + "h" + minute + "m" + seconde + "s");
}
