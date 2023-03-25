var d = new Date();
var message = "Bienvenue ! ";
var userName = prompt("Quel est votre prénom ?");
var userBirthday = prompt("Quand êtes vous né ? ( ATTENTION Format AAAA-MM-JJ )");
var userBirthdayDate = new Date(userBirthday);
var myUsers = [
  {name:"Marie",birthday:"1988-10-12"},
  {name:"Laurent",birthday:"1975-01-03"},
  {name:"Rositta",birthday:"1961-03-04"},
  {name:"Philippine",birthday:"1969-01-28"}
];
myUsers.push({name:userName,birthday:userBirthday});
var userAge = d.getYear() - userBirthdayDate.getYear();
message += "Nous sommes le ";
message = message + d.toLocaleDateString() + ". Vous êtes né le " + userBirthdayDate.toLocaleDateString();
message += ". Vous avez " + userAge + "ans.";
if (d.getMonth() == 0) {
  message += " Bonne année";
  // alert("Bonne année !")
}
if (d.getMonth() == userBirthdayDate.getMonth() && d.getDate() == userBirthdayDate.getDate()){
  message += " Bon anniversaire " + userName;
}
document.getElementById('aff_date').innerText = message;
// alert(myUsers[0].name);
var message2 = "C'est l'anniversaire de : ";
for (i=0; i<myUsers.length; i++){
if (d.getMonth() == new Date(myUsers[i].birthday).getMonth() && d.getDate() == new Date(myUsers[i].birthday).getDate()) {
  age = d.getYear() - new Date(myUsers[i].birthday).getYear();
  message2 += myUsers[i].name + ", âge : " + age +"<br>";
  }
};
document.getElementById('liste_users').innerHTML = message2;
