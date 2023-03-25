// var d = new Date();
// var message = "Bienvenue ! ";
// // var userName = prompt("Quel est votre prénom ?");
// // var userBirthday = prompt("Quand êtes vous né ? ( ATTENTION Format AAAA-MM-JJ )");
// var userBirthdayDate = new Date(userBirthday);
// var myUsers = [
//   {name:"Marie",birthday:"1988-10-12"},
//   {name:"Laurent",birthday:"1975-01-03"},
//   {name:"Rositta",birthday:"1961-03-04"},
//   {name:"Philippine",birthday:"1969-01-28"}
// ];
// myUsers.push({name:userName,birthday:userBirthday});
// var userAge = d.getYear() - userBirthdayDate.getYear();
// message += "Nous sommes le ";
// message = message + d.toLocaleDateString() + ". Vous êtes né le " + userBirthdayDate.toLocaleDateString();
// message += ". Vous avez " + userAge + "ans.";
// if (d.getMonth() == 0) {
//   message += " Bonne année";
//   // alert("Bonne année !")
// }
// if (d.getMonth() == userBirthdayDate.getMonth() && d.getDate() == userBirthdayDate.getDate()){
//   message += " Bon anniversaire " + userName;
// }
// document.getElementById('aff_date').innerText = message;
// // alert(myUsers[0].name);
// var message2 = "C'est l'anniversaire de : ";
// for (i=0; i<myUsers.length; i++){
// if (d.getMonth() == new Date(myUsers[i].birthday).getMonth() && d.getDate() == new Date(myUsers[i].birthday).getDate()) {
//   age = d.getYear() - new Date(myUsers[i].birthday).getYear();
//   message2 += myUsers[i].name + ", âge : " + age +"<br>";
//   }
// };
// document.getElementById('liste_users').innerHTML = message2;


var myUsers = [
    // Objets du tableau(key, value)
    {
        img: "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg", name: "Marie",
        birthday: "1988-10-12"
    },
    {
        img: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "Laurent",
        birthday: "1975-01-03"
    },
    {
        img: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg",
        name: "Rositta",
        birthday: "1961-03-04"
    },
    {
        img: "https://theadsgroup.com/content/uploads/2012/12/unicorn-wallpaper.jpg",
        name: "Philippine",
        birthday: "1969-01-28"
    }
];



// function envoi() {
//     // Stock les valeurs des champs dans les variables.
//     var contenu = document.getElementById('prenom').value;
//     var date = document.getElementById('date').value;
//
//
//     // Vérifier que les champs sont remplis.
//     if (contenu.length <= 1 && date===RegExp) {
//
//         // Ajoute l'élément dans le tableau en dernière position.
//         myUsers.push({ name: contenu, birthday: date });
//
//         console.log(myUsers);
//
//         // Appel de la fonction
//         afficherUtilisateurs();
//     }
//     else { alert("Votre formulaire est mal rempli !!!!") }
// }





function envoi() {
    // Vérifier que les champs sont remplis.
    // Vérifier que les champs ont le bon format ( utilisation de regexp )
    // var regDateFr = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // pas format date fr une fois enregistré
    var regDateISO = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var isRegDateISO = regDateISO.test(document.getElementById('date').value); // boolean
    // alert(isRegDateFr);

    if (document.getElementById('prenom').value &&
        isRegDateISO) {

        // Stock les valeurs des champs dans les variables.
        var contenu = document.getElementById('prenom').value;
        var date = document.getElementById('date').value;
        var image = document.getElementById('image').value;

        // Ajoute l'élément dans le tableau en dernière position.
        myUsers.push({ img: image, name: contenu, birthday: date });

        console.log(myUsers);

        // Appel de la fonction
        afficherUtilisateurs();
    }
    else { alert("Votre formulaire est mal rempli !!!!") }
}

function afficherUtilisateurs() {

    var listUsers = '<div class="row">';
    var defaultImage = "https://demo.phpgang.com/crop-images/demo_files/pool.jpg";
    for (i = 0; i < myUsers.length; i++) {
        // listUsers += '<div class= "col-md-3 mx-auto" style="width: 200px;">' + myUsers[i].name + '<br>' + myUsers[i].birthday + '</div>';

        listUsers += '<div class="card mt-2 ml-2" style="width: 16rem;">';
        listUsers += '<img src= "' + (myUsers[i].img || defaultImage) + '" class="card-img-top" height="200" alt="...">';
        listUsers += '<div class="card-body">';
        listUsers += '<h5 class="card-title">' + myUsers[i].name + '</h5>';
        listUsers += '<p class="card-text">' + myUsers[i].birthday + '</p>';
        listUsers += '<a href="#" class="btn btn-primary">Go somewhere</a>';
        listUsers += '</div>';
        listUsers += '</div>';

    }
    listUsers += "</div>";
    document.getElementById('list_users').innerHTML = listUsers;
}

afficherUtilisateurs(); // activé la touche entrer du clavier

// activé la touche entrer du clavier
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        // afficherUtilisateurs();
        event.preventDefault(); //évite d'envoyer le fomulaire non indiqué.
        envoi();
    }
});
