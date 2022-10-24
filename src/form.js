const closeIcon = document.querySelector('.close');
const modale = document.querySelector('#contact_modal');

/**
 * Fermer la modale au clic sur la croix
 */
const closeModale = () => {
    modale.style.display = 'none';
}; 

closeIcon.addEventListener('click', closeModale);

/**
 * Ouvrir la modale au clic sur le bouton contact
 */
//Je sélectionne le dernier enfant de ul, le bouton 'contact' :
const contact = document.querySelector('ul li:nth-child(4)')
console.log(contact);

const openModale = () => {
    modale.style.display = 'block';
};

contact.addEventListener('click', openModale);