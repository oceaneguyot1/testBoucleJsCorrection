//fonction compteur pour afficher tous les nombres qui en précède un
function compteur() {
    //Variable avec le nombre récupéré de l'input type number
    let number = document.getElementById('number').value;

    //boucle
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}


//appel de la fonction au clic sur le bouton avec l'id 'valide'
document.getElementById('valide').addEventListener('click', compteur);

