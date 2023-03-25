var joueur = prompt("Pierre,Feuille,Ciseaux");

ordi = Math.floor(Math.random() * 3);

if (joueur == "Pierre") {
  if (ordi <= 1) {
    alert("Egalité");
  } else if (ordi == 2) {
    alert("Perdu la pierre se fait battre par la feuille");
  } else if (ordi == 3) {
    alert("Gagné la pierre bat le ciseaux");
  }
} else if (joueur == "Feuille") {
  if (ordi == 2) {
    alert("Egalité");
  } else if (ordi == 1) {
    alert("Gagné la pierre se fait battre par la feuille");
  } else if (ordi == 3) {
    alert("Perdu la feuille perd contre le ciseaux");
  }
} else if (joueur == "Ciseaux") {
  if (ordi == 3) {
    alert("Egalité");
  } else if (ordi == 2) {
    alert("Gagné le ciseaux bat la feuille");
  } else if (ordi == 1) {
    alert("Perdu le ciseaux perd contre la pierre");
  }
}
document.write(ordi);
//var ordi = Math.floor(Math.random() * 3);
/*var joueur = prompt("Pierre,Feuille,Ciseaux");

if (ordi == "Pierre") {
  switch (joueur) {
    case "Pierre":
      alert("Egalité");
      break;
    case "Feuille":
      alert("Gagné la feuille bat la pierre");
      break;
    case "Ciseaux":
      alert("Perdu la pierre bat le ciseaux");
      break;
  }
}
elseif(ordi == "Feuille") {
    switch (joueur) {
      case "Pierre":
        alert("Perdu la feuille bat la pierre");
        break;
      case "Feuille":
        alert("Egalité");
        break;
      case "Ciseaux":
        alert("Gagné le ciseaux bat la feuille ");
        break;
    }
    elseif(ordi == "Ciseaux") {
      switch (joueur) {
        case "Pierre":
          alert("Gagné la pierre bat le ciseaux");
          break;
        case "Feuille":
          alert("Perdu le ciseaux bat la feuille");
          break;
        case "Ciseaux":
          alert("Egalité");
          break;
      }
    }
    */
