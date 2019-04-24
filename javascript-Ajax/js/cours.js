var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent); 
    if(compteur>1) {
    compteurElt.textContent = compteur - 1;
    } 
    else {
        //Annule l'execution répétée
        clearInterval(intervalId);
        //Modifie le titre de la Page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        //Modifie le titre au bout de 2 secondes
        setTimeout(function() {
            titre.textContent = "quand mon petit coeur fait BOUM."
        }, 2000);
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);