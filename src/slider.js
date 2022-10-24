
const hamburgerToggler = document.querySelector('.hamburger');
// console.log(hamburgerToggler);
const navLinksContainer = document.querySelector('.navlinks-container')
// console.log(navLinksContainer)

const toggleNav = () => {
    hamburgerToggler.classList.toggle('open');

    navLinksContainer.classList.toggle('open');
    
};
hamburgerToggler.addEventListener('click', toggleNav);

/*******************Slider*******************/

/**
 * Je pointe toutes les images et obtiens un HTML collection
 */
let imageSlider = document.getElementsByClassName('image-slider')
console.log(imageSlider);


// let imageSlider = document.querySelectorAll('.image-slider')
// console.log(imageSlider);
 let etape = 0; // c'est la 1ere image

 /**
  * On a besoin du nombre d'images
  */
 nombreImages = imageSlider.length;
 /**
  * On parcourt le tableau imageSlider, et on enlève toutes les classes 'actives' sur toutes les images
  */
 function removeActiveImage () {
    for (let i = 0; i < nombreImages; i++) {
        imageSlider[i]. classList.remove('active')
    }
 }

 setInterval(function() {
    etape++;
    if(etape >= nombreImages) {
        etape = 0;
    }
    removeActiveImage();
    imageSlider[etape].classList.add('active')
 }, 5000);


