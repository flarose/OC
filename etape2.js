$(function(){
   
// Variables globales

var gagne = true;
var trouve = false;
var i = 0;
var j = 0;
var nbre_tour=0;
let imax = 9;
let jmax = 9; 
var playerX=0;
var playerY=0;
var rep_attaque = "";
var clic = true;

class Arme {
    constructor(nom, degat) {
        this.nom = nom;
        this.degat = degat;
    }
}

//Definition de la classe Joueur
class Joueur {
    constructor(nom, vie, arme) {
        this.nom =nom;
        this.vie =vie;
        this.arme=arme;
        this.i1 =0;
        this.j1 =0;
    }
    
    repereJoueur(n) {
        trouve = false;
        while (trouve === false) {
            for (i = 0; i < table.rows.length; i++) {
                for (j = 0; j < table.rows[i].cells.length; j++) {
                    if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {

                        this.i1 = i;
                        this.j1 = j;
                        trouve = true;
                        console.log("la valeur i de :" + this.i1);

                        console.log("la valeur j de :" + this.j1);

                        }
                }
                }
            }

    }   
    
    decrire() {
        console.log(this.nom + ' a ' + this.vie + ' points de vie, il possede le ' + this.arme.nom);
    }
    

   deplaceJoueur(){
    
    trouve = false;
    clearHighlight();
       
    var j = this.j1; 
    for (i=this.i1-1; i>=this.i1-3;i--) {
            if(trouve === false) {
                if (i<0) {
                    trouve = true;
                    } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                            
                        //Alors mettre en surbrillance
                        console.log("indices en surbrillance i, j : " + i + "," +j);
						table.rows[i].cells[j].style.border = "3px solid black";
                        var divElement = document.createElement("div");
                        divElement.classList.add("highlight");
                        divElement.innerHTML = '<img src="../case1.png">';
                        //console.log(divElement.innerHTML);
                        table.rows[i].cells[j].innerHTML='';
                        table.rows[i].cells[j].appendChild(divElement);
                        
                        //console.log(table.rows[i].cells[j].innerHTML);
                            
                    }
                    else if (table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme1');
                        this.arme.nom = arme1.nom;
                        trouve = true;
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme2');
                        this.arme.nom = arme2.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme3');
                        this.arme.nom = arme3.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme4');
                        this.arme.nom = arme4.nom;
                        trouve = true;   
                        }
						
                    else {
                        trouve = true;
                    }
            }

    }
    
    
    trouve = false; 
    var j = this.j1;
    for (i=this.i1+1; i<=this.i1+3;i++) {
        if(trouve === false) {
            if (i>(imax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                       //Alors mettre en surbrillance
                        console.log("indices en surbrillance i, j : " + i + "," +j);
						table.rows[i].cells[j].style.border = "3px solid black";
                        var divElement = document.createElement("div");
                        divElement.classList.add("highlight");
                        divElement.innerHTML = '<img src="../case1.png">';
                        //console.log(divElement.innerHTML);
                        table.rows[i].cells[j].innerHTML='';
                        table.rows[i].cells[j].appendChild(divElement);
                        
                        //console.log(table.rows[i].cells[j].innerHTML); 
                         
                }
                else if (table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme1');
                        this.arme.nom = arme1.nom;
                        trouve = true;
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme2');
                        this.arme.nom = arme2.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme3');
                        this.arme.nom = arme3.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme4');
                        this.arme.nom = arme4.nom;
                        trouve = true;   
                        }
						
                    else {
                        trouve = true;
                    }
        }
    }
    
        
    
    
    trouve = false;
    var i = this.i1;
    for (j=this.j1-1; j>=this.j1-3;j--) {
       if(trouve === false) {
            if (j<0) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                       //Alors mettre en surbrillance
                        console.log("indices en surbrillance i, j : " + i + "," +j);
						table.rows[i].cells[j].style.border = "3px solid black";
                        var divElement = document.createElement("div");
                        divElement.classList.add("highlight");
                        divElement.innerHTML = '<img src="../case1.png">';
                        //console.log(divElement.innerHTML);
                        table.rows[i].cells[j].innerHTML='';
                        table.rows[i].cells[j].appendChild(divElement);
                        
                        //console.log(table.rows[i].cells[j].innerHTML); 
                        
                        
                }
                else if (table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme1');
                        this.arme.nom = arme1.nom;
                        trouve = true;
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme2');
                        this.arme.nom = arme2.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme3');
                        this.arme.nom = arme3.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme4');
                        this.arme.nom = arme4.nom;
                        trouve = true;   
                        }
						
                    else {
                        trouve = true;
                    }
        }
    }
    
        
    
    
    trouve = false;
    var i = this.i1;
    for (j=this.j1+1; j<=this.j1+3;j++) {
        if(trouve === false) {
            if (j>(jmax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                       //Alors mettre en surbrillance
                        console.log("indices en surbrillance i, j : " + i + "," +j);
						table.rows[i].cells[j].style.border = "3px solid black";
                        var divElement = document.createElement("div");
                        divElement.classList.add("highlight");
                        divElement.innerHTML = '<img src="../case1.png">';
                        //console.log(divElement.innerHTML);
                        table.rows[i].cells[j].innerHTML='';
                        table.rows[i].cells[j].appendChild(divElement);
                        
                        //console.log(table.rows[i].cells[j].innerHTML);
                        
                }
                else if (table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme1');
                        this.arme.nom = arme1.nom; // TODO ne pas changer d'arme ici (on ne fait que mettre en surbrillance)
						// ATTENTION, il faut this.arme = arme1 (objet en entier)
                        trouve = true;
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme2');
                        this.arme.nom = arme2.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme3');
                        this.arme.nom = arme3.nom;
                        trouve = true;  
                        }
                    else if(table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                        console.log("indices en surbrillance i, j : " + i + "," +j);
                        collisionArme(i,j,'arme4');
                        this.arme.nom = arme4.nom;
                        trouve = true;   
                        }
						
                    else {
                        trouve = true;
                    }
        }
    }
       
    
        
    }
    
  
  
} 


    
function highlight(n) {
	
	//TODO changer d'arme dans cette fonction là
	
     clic = false;
     $('.highlight').on('click', function() {
            
        var newX = $(this).closest("tr").index();
        var newY = $(this).closest("td").index();
        

        var elementImage = document.createElement("img");
        elementImage.src = "../case1.png";
        table.rows[playerX].cells[playerY].innerHTML = '';
        table.rows[playerX].cells[playerY].appendChild(elementImage);
        console.log("Ancienne position du Joueur: " + table.rows[playerX].cells[playerY].innerHTML);
         
        playerX = newX;
        playerY = newY;

        var elementImage = document.createElement("img");
        elementImage.src = "../joueur" + n + ".png";
        table.rows[playerX].cells[playerY].innerHTML = '';
        table.rows[playerX].cells[playerY].appendChild(elementImage);
        console.log("Nouvelle position du Joueur: " + table.rows[playerX].cells[playerY].innerHTML);
        clic = true;  
        console.log(clic);
        })
        console.log(clic);
}
 
 //on annule les cases de classe 'hightlight' - appelée en debut de deplaceJoueur()
 function clearHighlight() {
        for (i=0; i <imax; i++) {
            for (j=0; j <jmax; j++) {
               
                   table.rows[i].cells[j].style.border = "";
                   table.rows[i].cells[j].classList.remove("highlight"); 
                   
                
                   
            }
        }
        return true;
        
    }  

function collisionArme(i_Arme,j_Arme,nom_Arme) {
    table.rows[i_Arme].cells[j_Arme].style.border = "3px solid black";
    var divElement = document.createElement("div");
    divElement.classList.add("highlight");
    divElement.innerHTML = '<img src="../' + nom_Arme + '.png">';
    table.rows[i_Arme].cells[j_Arme].innerHTML='';
    table.rows[i_Arme].cells[j_Arme].appendChild(divElement);
}    

function detecteCombat(joueur1, joueur2) { //TODO : ajuster les noms pour attaquant et attaqué
    if(joueur1.i1 === joueur2.i1) {
        if(Math.abs(joueur1.j1-joueur2.j1) === 1) {
           return true;
           }
       
       } else if(joueur1.j1 === joueur2.j1) {
           if(Math.abs(joueur1.i1-joueur2.i1) === 1) {
           return true;
           }
        
    }
    
}
//joueur1 attaque jooueur2
//joueur 1 attaque, joueur 2 défend, peuvent être inversés
function attaqueJoueur(joueur1, joueur2) { //TODO : ajuster les noms pour attaquant et attaqué
	
	//TODO prompt ICI
    
    if(rep_attaque==='A' || rep_attaque==='a') {
        joueur2.vie = joueur2.vie - joueur1.arme.degat;
    } else if((rep_attaque==='D' || rep_attaque==='d')) {
        joueur2.vie = joueur2.vie - (joueur1.arme.degat)/2;
    }
    
              
  if (joueur2.vie <=0) {
      gagne = false;
      console.log(joueur1.nom + " a gagné");
      console.log("il a gagné en : " + nbre_tour + " coups.");
  } 
}

    
// Création du tableau HTML
var table = document.getElementById("tableau");

for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = 0;
    }
}
    
//////////////////////////////////////////////
//Definition des fonctions pour creer la carte
function placeMur(i, j){
    
        table.rows[i].cells[j].innerHTML = 1;
        
}

function placeJoueur(joueur){
    trouve=false;
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = joueur;
            trouve = true;
            } 
           
        }   
   
        
        
}

function placeArme(arme){
    trouve = false;
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = arme;
            trouve = true;
            } 
           
        }
       
   
        
        
}
//////////////////////////////////////////////////
//Fin Definition des fonctions pour creer la carte
 
    
    
    
////////////////////////////////////////////////////////////////////////////  
// Creation de la carte
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
        elementTable = table.rows[i].cells[j].innerHTML;
        //alert(elementTable);
        switch (elementTable) {
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
 ////////////////////////////////////////////////////////////////////////////   
// Fin Creation de la carte
arme1 = new Arme('Arme1', 10);
arme2 = new Arme('Arme2', 5);
arme3 = new Arme('Arme3', 15);
arme4 = new Arme('Arme4', 20);

joueur1 = new Joueur('Joueur1', 100,arme1);
joueur2 = new Joueur('Joueur2', 100,arme1);


joueur1.repereJoueur(1);
joueur2.repereJoueur(2);
/* 
programme principal
*/
//rep_attaque = prompt(joueur2.nom + " souhaitez-vous attaquer(A) ou défenfre(D) ? :");
    
while(gagne === true && clic === true) {
      clic = false;
      joueur1.deplaceJoueur();
      highlight(1);
	  //ICI, la boucle ne s'arrête jamais n'attend pas le clic. Au clic, on relance la boucle de jeu. Voir le pattern observateur.
      if(clic === true) {
          clic = false;
          joueur2.deplaceJoueur();
          highlight(2);
          gagne = false;
      }
      
      /*if(nbre_tour % 2 === 0) {
          // simulation : le joueur 1 attaque
		  deplaceJoueur(); inclu clearHighlight()
		  highlight(); TODO : CLIC À GÉRER
		  detecteCombat(); TODO : PROMPT À GÉRER
			=> IF TRUE attaqueJoueur(joueur1, joueur2); inclu la défense
      }else {
          // simulation : le joueur 2 attaque
		  deplaceJoueur(); inclu clearHighlight()
		  highlight(); TODO : CLIC À GÉRER
		  detecteCombat(); TODO : PROMPT À GÉRER
			=> IF TRUE attaqueJoueur(joueur2, joueur1); inclu la défense
      }
      nbre_tour++;*/
      }

 
/* 
Fin programme principal
*/
    
    
})