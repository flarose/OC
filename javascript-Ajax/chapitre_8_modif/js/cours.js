function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", afficher);