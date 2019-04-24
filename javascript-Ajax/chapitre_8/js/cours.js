// Création d'une requête HTTP
var req = new XMLHttpRequest();
// la requête est asynchrone lorsque la 3e parametre vaut true ou est absent
req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt");
// gestion de l'evenement indiquant la fin de la requete
req.addEventListener("load", function() {
    //affiche la reponse reçue pour la requete
    console.log(req.responseText);
});


req.send(null);
