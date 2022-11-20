let playOnce = true;

/**
 * Faire apparaitre la popup au scroll vertical
*/
const scrollPopUp = () => {
//pour avoir la taille de la hauteur du body
//console.log(document.body.offsetHeight);

//comme la taille du body s'allonge en rétrécissant l'écan, il faut cette formule :
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if(scrollValue > 0.85 && playOnce){
        popup.style.opacity = 1;
        popup.style.transform = 'none';
        playOnce = false;
    }
}
window.addEventListener('scroll', scrollPopUp);

/**
 * Fermer la pop up
 */
const closePopUp = () =>{
    popup.style.opacity = 0;
    popup.style.transform = 'translateX(500px)';
}

closeBtn.addEventListener('click', closePopUp);