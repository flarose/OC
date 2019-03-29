/* Petit javascript permettant un retour en haut de page animé */

$(function() {
    $('a[href=#menu]').click(function(){   /* On spécifie une cible ici : l'id #menu */
    $('html,body').animate({scrollTop:0},'slow');
    return false;
    });
    });