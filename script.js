//fonction compteur pour afficher tous les nombres qui en précède un
function compteur() {
    //Variable avec le nombre 
    let number = 5;

    //boucle
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}


//appel de la fonction au clic sur le bouton avec l'id 'valide'
document.getElementById('valide').addEventListener('click', compteur);

