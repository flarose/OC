$(function(){
	
	//Positionnement initial
	var playerX = 0;
	var playerY = 0;

	//Création du tableau vierge
	var table = document.getElementById("tableau");

	for (i = 0; i < table.rows.length; i++) {
		for (j = 0; j < table.rows[i].cells.length; j++) {
			
			var elementImage = document.createElement("img");
			elementImage.src = "../case1.png";
			table.rows[i].cells[j].innerHTML = '';
			table.rows[i].cells[j].appendChild(elementImage);
			
		}
	}
	
	//Disposer jusqu'à 6 murs à des positions aléatoires (positions uniques non gérées)
	function entierAleatoire(min, max)
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	for (i = 0; i < 6; i++) {
		
		var x = entierAleatoire(1,8); //Car le joueur est en 0
		var y = entierAleatoire(1,8); //Car le joueur est en 0
		
		var elementImage = document.createElement("img");
			elementImage.src = "../case3.png";
			table.rows[x].cells[y].innerHTML = '';
			table.rows[x].cells[y].appendChild(elementImage);
		
	}
	
	//Positionner le joueur
	var elementImage = document.createElement("img");
	elementImage.src = "../joueur1.png";
	table.rows[playerX].cells[playerY].innerHTML = '';
	table.rows[playerX].cells[playerY].appendChild(elementImage);
	
	highlight(playerX, playerY);

	
	//Mettre en surbrillance les cases accessibles pour le déplacement du joueur
	function highlight(x, y) {
		
		clearHighlights();
		
		var blocked = 'false';
	
		//Pour un maximum de 3 cases (vers le haut)
		for (i=x-1; i>=x-3;i--) {
				
			if (blocked === 'false') {
				
				//Si on sort du terrain de jeu
				if (i<0) {
					blocked = 'true';
				} 
				
				//S'il s'agit bien d'une case vide, et non d'un mur
				else if (table.rows[i].cells[y].innerHTML === '<img src="../case1.png">') {
					
						//Alors mettre en surbrillance
						table.rows[i].cells[y].style.border = "3px solid black";
					
						table.rows[i].cells[y].classList.add("highlight");
	
				}
				//Si on croise un mur, on arrête le traitement dans cette direction				
				else {
					blocked = 'true';
				}
            
             }

        }
		
		blocked = 'false';
		
		//Pour un maximum de 3 cases (vers le bas)
		for (i=x+1; i<=x+3;i++) {
				
			if (blocked === 'false') {
				
				//Si on sort du terrain de jeu
				if (i>8) {
					blocked = 'true';
				} 
				
				//S'il s'agit bien d'une case vide, et non d'un mur
				else if (table.rows[i].cells[y].innerHTML === '<img src="../case1.png">') {
					
						//Alors mettre en surbrillance
						table.rows[i].cells[y].style.border = "3px solid black";
					
						table.rows[i].cells[y].classList.add("highlight");
	
				}
				//Si on croise un mur, on arrête le traitement dans cette direction				
				else {
					blocked = 'true';
				}
            
             }

        }
		
		blocked = 'false';
		
		//Pour un maximum de 3 cases (vers la gauche)
		for (i=y-1; i>=y-3;i--) {
				
			if (blocked === 'false') {
				
				//Si on sort du terrain de jeu
				if (i<0) {
					blocked = 'true';
				} 
				
				//S'il s'agit bien d'une case vide, et non d'un mur
				else if (table.rows[x].cells[i].innerHTML === '<img src="../case1.png">') {
					
						//Alors mettre en surbrillance
						table.rows[x].cells[i].style.border = "3px solid black";
					
						table.rows[x].cells[i].classList.add("highlight");
	
				}
				//Si on croise un mur, on arrête le traitement dans cette direction				
				else {
					blocked = 'true';
				}
            
             }

        }
		
		blocked = 'false';
		
		//Pour un maximum de 3 cases (vers la droite)
		for (i=y+1; i<=y+3; i++) {
				
			if (blocked === 'false') {
				
				//Si on sort du terrain de jeu
				if (i>8) {
					blocked = 'true';
				} 
				
				//S'il s'agit bien d'une case vide, et non d'un mur
				else if (table.rows[x].cells[i].innerHTML === '<img src="../case1.png">') {
					
						//Alors mettre en surbrillance
						table.rows[x].cells[i].style.border = "3px solid black";
					
						table.rows[x].cells[i].classList.add("highlight");

	
				}
				//Si on croise un mur, on arrête le traitement dans cette direction				
				else {
					blocked = 'true';
				}
            
             }

        }
		
	}
	
	//Retire la surbrillance sur les cases concernées
	function clearHighlights() {

		for (i = 0; i < table.rows.length; i++) {
			
			for (j = 0; j < table.rows[i].cells.length; j++) {
			
				table.rows[i].cells[j].style = "";
				table.rows[i].cells[j].classList.remove("highlight");
			
			}
			
		}
		
	}
	
	//Détecter le clic sur une case et y positionner un joueur
	$('td').click(function(){		//TODO : APPLY FOR HIGHLIGHTED CELLS ONLY
		
		var newX = $(this).closest("tr").index();
		var newY = $(this).closest("td").index();
				
		var elementImage = document.createElement("img");
		elementImage.src = "../case1.png";
		table.rows[playerX].cells[playerY].innerHTML = '';
		table.rows[playerX].cells[playerY].appendChild(elementImage);
		
		playerX = newX;
		playerY = newY;
		
		var elementImage = document.createElement("img");
		elementImage.src = "../joueur1.png";
		table.rows[playerX].cells[playerY].innerHTML = '';
		table.rows[playerX].cells[playerY].appendChild(elementImage);
		
		highlight(playerX, playerY);
		
	})

})
