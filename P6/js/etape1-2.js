$(function(){
    

    
// Variables globales
var attaque = true;
var gagne = true;
var trouve = false;
var i = 0;
var partie = "en cours";
var joueur = "Joueur1";

// Création du tableau HTML
var table = document.getElementById("tableau");

for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = 0;
    }
}


function placeMur(i, j){
    
        table.rows[i].cells[j].innerHTML = 1;
        
}

function placeJoueur(joueur){
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = joueur;
            trouve = true;
            } 
           
        }
    trouve = false;   
   
        
        
}

function placeArme(arme){
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = arme;
            trouve = true;
            } 
           
        }
    trouve = false;   
   
        
        
}


// initialisation de la carte 
for (i =0; i<12; i++) {
    var indiceLigne= Math.floor(Math.random()*9);
    var indiceColonne= Math.floor(Math.random()*9);
    if (table.rows[indiceLigne].cells[indiceColonne].textContent === '0') {
        placeMur(indiceLigne, indiceColonne);
    } else {
        i--;
    }
    
}

//On place les joueurs et les armes sur la carte
// Appel à la fonction placeJoueur() ici "2" = joueur 1
placeJoueur(2);
    
placeJoueur(3);
placeArme(4);
placeArme(5);
placeArme(6);
placeArme(7);


//Parcours de la carte, on remplace les chiffres par les images correspondantes
for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        var elementImage = document.createElement("img");
        tdElement = table.rows[i].cells[j].innerHTML;
        //alert(tdElement);
        switch (tdElement) {
            case "0" :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "1" :
                elementImage.src = "../case3.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "2" :
                elementImage.src = "../joueur1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "3" :
                elementImage.src = "../joueur2.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "4" :
                elementImage.src = "../arme1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "5" :
                elementImage.src = "../arme2.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "6" :
                elementImage.src = "../arme3.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "7" :
                elementImage.src = "../arme4.png";
                 table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            
            default :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                
                
                }
        
    }
}

// test code
function deplaceJoueur1() {
    var trouve = 'false';
    var i1 = 0;
    var j1 = 0;
    var imax = 9;
    var jmax = 9;
    
    while (trouve='false') {
        for (i = 0; i < table.rows.length; i++) {
            for (j = 0; j < table.rows[i].cells.length; j++) {
                if (table.rows[i].cells[j].innerHTML === '<img src="../joueur1.png">') {
                    // on repère les indices i,j et la valeurs des 3 cases autour de J1
                    i1 = i;
                    j1 = j;
                    //on sort de la boucle une fois la position du joueur1 a été déterminée 
                    trouve = 'true';
                    console.log("la valeur i1 :" + i1);
                    
                    console.log("la valeur j1 :" + j1);

                    }
            }
        }
    }
   
    trouve = 'false';
    //Pour (i de i1-1 -> i1-3) faire ()
    while(trouve = 'false') {
        var j = j1;
        for (i=i1-1; i>=i1-3;i--) {
            if (i<0) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        // TODO: mettre en surbrillance la cellule
                        //table.rows[i].cells[j].css('border', '3');
                        console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                        } else {
                            trouve = 'true';
                        }

        }
    }
    
    trouve = 'false';
    //Pour (i de i1+1 -> i1+3) faire()
    while(trouve = 'false') {
        var j = j1;
        for (i=i1+1; i<=i1+3;i++) {
            if (i>(imax-1)) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        // TODO: mettre en surbrillance la cellule
                        //table.rows[i].cells[j].css('border', '3');
                        console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                        } else {
                            trouve = 'true';
                        }

        }
          
    }

    trouve = 'false';
    //Pour (j de j1-1 -> j1-3) faire()
    while(trouve = 'false') {
        var i =i1;
        for (j=j1-1; j>=j1-3;j--) {
            if (j<0) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        // TODO: mettre en surbrillance la cellule
                        //table.rows[i].cells[j].css('border', '3');
                        console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                        } else {
                            trouve = 'true';
                        }

        }
    }

    trouve = 'false';
    //Pour (j de j1+1 ->j1+3) faire()
    while(trouve = 'false') {
        var i =i1;
        for (j=j1+1; j<=j1+3;j++) {
            if (j>(jmax-1)) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        // TODO: mettre en surbrillance la cellule
                        //table.rows[i].cells[j].css('border', '3');
                        console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                        } else {
                            trouve = 'true';
                        }

        }
    }

         
                
                
                
               
}   


         
/*
var tablePosJoueur1 = [
        table[i1-3][j1-3].innerHTML, table[i1-3][j1-2].innerHTML, table[i1-3][j1-1].innerHTML, table[i1-3][j1].innerHTML, table[i1-3][j1+1].innerHTML, table[i1-3][j1+2].innerHTML, table[i1-3][j1+3].innerHTML,
        table[i1-2][j1-3], table[i1-2][j1-2], table[i1-2][j1-1], table[i1-2][j1], table[i1-2][j1+1], table[i1-2][j1+2], table[i1-2][j1+3],
        table[i1-1][j1-3], table[i1-1][j1-2], table[i1-1][j1-1], table[i1-1][j1], table[i1-1][j1+1], table[i1-1][j1+2], table[i1-1][j1+3],
        table[i1][j1-3], table[i1][j1-2], table[i1][j1-1], table[i1][j1], table[i1][j1+1], table[i1][j1+2], table[i1][j1+3],
        table[i1+1][j1-3], table[i1+1][j1-2], table[i1+1][j1-1], table[i1+1][j1], table[i1+1][j1+1], table[i1+1][j1+2], table[i1+1][j1+3],
        table[i1+2][j1-3], table[i1+2][j1-2], table[i1+2][j1-1], table[i1+2][j1], table[i1+2][j1+1], table[i1+2][j1+2], table[i1+2][j1+3],
        table[i1+3][j1-3], table[i1+3][j1-2], table[i1+3][j1-1], table[i1+3][j1], table[i1+3][j1+1], table[i1+3][j1+2], table[i1+3][j1+3]
       ];
*/

//fin de test code














//classe Joueur (définition)
/*class Joueur {
    init(nom, vie, arme) {
        this.nom = nom;
        this.vie = vie;
        this.arme= arme;
    }
    
    //description du joueur
    
    decrire() {
        return'${this.nom} a ${this.vie} points de vie, il possede le ${this.arme}';
    }
    joue(adversaire) {
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
}*/


/*class Arme {
    init(nom) {
        this.nom = nom;
        this.degat = 10;
    }
    decrire() {
        return "je m'appelle ${this.nom}et je t'enlèves ${this.degat} de points de vie ";
    }
    
}*/


//début programme principal

/*while (partie !== "fini") {
    i++;
   
    if (i % 2 === 0) {
        //document.getElementById("tourRole").innerHTML = "joueur1";
        console.log("joueur1");
        
    } else {
        //document.getElementById("tourRole").innerHTML = "joueur2";
        console.log("joueur2");
        
        
    }
       
       }*/
document.querySelector("span").textContent += ' ' + joueur;    
//document.getElementById("tourRole").innerHTML = joueur;

deplaceJoueur1();    

})