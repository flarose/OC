// Variables globales
var grille = new Array();
var attaque = true;
var gagne = true;



// création du tableau à 2D initialisé avec des zéros
/*for (var i=0; i<9; i++) {
    grille[i] = new Array();
}

for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
        grille[i][j] = 0;
        
            
    }
    
}*/

var table = document.getElementById("tableau");

for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = 0;
    }
}

function placeMur(i, j){
    
        table.rows[i].cells[j].innerHTML = 1;
        
}

// CODE A MODIFIER ICI
for (i =0; i<12; i++) {
    var indiceLigne= Math.floor(Math.random()*10);
    var indiceColonne= Math.floor(Math.random()*10);
    if (table.rows[indiceLigne].cells[indiceColonne].textContent === 0) {
        placeMur(indiceLigne, indiceColonne);
    } else {
        i--;
    }
    
}





//classe Joueur (définition)
class Joueur {
    init(nom, vie, arme) {
        this.nom = nom;
        this.vie = vie;
        this.arme= arme;
    }
    
    //description du joeur
    
    decrire() {
        return'${this.nom} a ${this.vie} points de vie, il possede le ${this.arme}';
    }
    Joue(adversaire) {
       switch(attaque) {
           case "true" :
               if (gagne = false) {
                   this.vie = this.vie - ((adversaire.arme).degat);
                   
               }
           case "false" :
               if (gagne = false) {
                  this.vie = this.vie - ((adversaire.arme).degat)/2;
                   
               }
       }
       
   }
}


class Arme {
    init(nom) {
        this.nom = nom;
        this.degat = 10;
    }
    decrire() {
        return "je m'appelle ${this.nom}et je t'enlèves ${this.degat} de points de vie ";
    }
    
}