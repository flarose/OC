/* ancien code
var identite = new FormData();

identite.append("login", "Bob");
identite.append("password", "azerty");

var req = new XMLHttpRequest();

req.open("POST", "http://localhost:8888/javascript-web-srv/post_form.php");

req.send(identite);
Fin ancien code*/

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande,
    function (reponse) {
        // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");
    }
);