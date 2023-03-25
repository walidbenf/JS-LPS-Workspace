var myUsers = [{
    name: "Marie",
    birthday: "1988-10-12"
  },
  {
    name: "Laurent",
    birthday: "1975-01-03"
  },
  {
    name: "Rositta",
    birthday: "1961-03-04"
  },
  {
    name: "Philippine",
    birthday: "1969-01-28"
  }
];
/*
function envoi() {
  var userName = prompt("Entrer votre nom d'utilisateur");
  var userBirthday = new Date(prompt("Entrer votre date de naissance YYYY-MM-JJ"));
  myUsers.push({
    name: userName,
    birthday: userBirthday
  });
}*/
/*var html = "";
html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">';
html += '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>';
html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>';
html += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>';
*/


function envoie() {
  var contenu = document.getElementById('example-text-input').value;
  var contenu2 = document.getElementById('example-date-input').value;
if((contenu) && (contenu2)){
  myUsers.push({
    name: contenu,
    birthday: contenu2
  });
}
else{
  alert('le champ est vide');
}
  console.log(myUsers);
}
