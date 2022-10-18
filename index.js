const hamburgerToggler = document.querySelector('.hamburger');
console.log(hamburgerToggler);
const navLinksContainer = document.querySelector('.navlinks-container')
console.log(navLinksContainer)

const toggleNav = () => {
    hamburgerToggler.classList.toggle('open');

    navLinksContainer.classList.toggle('open');
    
};
hamburgerToggler.addEventListener('click', toggleNav);