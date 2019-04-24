// execute un appel ajax get
//prend en parametres l'url cible et la fonction callback - en cas de succés -
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
            } else {
                 console.error(req.status + " " + req.statusText + " " + url);
                }
    });
    req.addEventListener("error", function() {
        console.error("erreur reseau avec l'url: " + url);
    })
}


req.send(null);