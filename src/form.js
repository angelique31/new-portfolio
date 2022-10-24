const closeIcon = document.querySelector('.close');
const modale = document.querySelector('#contact_modal');

/**
 * Fermer la modale au clic sur la croix
 */
const closeModale = () => {
    modale.style.display = 'none';
}; 

closeIcon.addEventListener('click', closeModale);


//Je sélectionne le dernier enfant de ul, le bouton 'contact' :
const contact = document.querySelector('ul li:nth-child(4)')
console.log(contact);

/**
 * Ouvrir la modale au clic sur le bouton contact
 */
const openModale = () => {
    modale.style.display = 'block';
};

contact.addEventListener('click', openModale);

/******************Pointer le formulaire**********/
const form = document.querySelector('form');
const submitInput = document.querySelector('.contact_button_form');
const inputs = document.querySelectorAll(
    '#first, #email, #message'
);


/**
 * 
 * @param {*} e - object event
 * @param {*} e.target.value - value input
 */
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch (e.target.id) {
        case 'first':
            firstChecker(e.target.value);
            break;
        case 'email':
            emailChecker(e.target.value);
            break;
        case 'message':
            messageChecker(e.target.value);
            break;
        default:
            null;
        }
    });
});


/**
 * function firstname (first)
 * @param {*} value
 * @returns - true for the submit form
 */
const firstChecker = (value) => {
    const firstContainer = document.querySelector('.first-container');
    const errorDisplay = document.querySelector('.first-container > span');
    let isValid = false;
  
    if (value.length < 2) {
        firstContainer.classList.add('error');
        errorDisplay.textContent =
        'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

  
/**
   * function email
   * @param {*} value
   * @returns - true for the submit form
   */
const emailChecker = (value) => {
    const emailContainer = document.querySelector('.email-container');
    const errorDisplay = document.querySelector('.email-container > span');
    let isValid = false;
  
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        emailContainer.classList.add('error');
        errorDisplay.textContent = 'Veuillez entrer une adresse mail valide.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

/**
 * function message 
 * @param {*} value
 * @returns - true for the submit form
 */
const messageChecker = (value) => {
    const firstContainer = document.querySelector('.message-container');
    const errorDisplay = document.querySelector('.message-container > span');
    let isValid = false;
  
    if (value.length < 10) {
        firstContainer.classList.add('error');
        errorDisplay.textContent =
        'Veuillez entrer un message avec un minimum de 10 caractères.';
    } else {
        errorDisplay.textContent = '';
        isValid = true;
    }
    return isValid;
};

/**
 * Verify form inputs before submission
 * @param {*} e - object event
 */
const onSubmit = (e) => {
    e.preventDefault();
  
    /**
     * Retrieve form input values
     * @param {*} inputs - array: tags from query selector
     * @returns - array: les data from query selector
     */
    const formValues = (inputs) => {
        let data = [];
    
        for (let i = 0; i < inputs.length; i++) {
            if (
                inputs[i].type === 'text' ||
                inputs[i].type === 'email' ||
                inputs[i].type === 'textarea'
            ) {
                data.push(inputs[i].value);
                
            }
        }
        return data;
    };
  
    /**
     * Retrieve form input values
     * @param {*} values - array: data from query selector
     * @returns - boolean: true if valid
     */
    const formIsValid = (values) => {
        /**
       * Tests the validity of each input
       * @type boolean
       */
        let validInputs = [];
       
        validInputs.push(firstChecker(values[0]));
        validInputs.push(emailChecker(values[1]));
        validInputs.push(messageChecker(values[2]));
        
        let isValid = true;
  
        for (let i = 0; i < validInputs.length; i++) {
            if (validInputs[i] === false) {
                isValid = false;
                break;
            }
        }
        return isValid;
    };
    
    /**
    * If valid
    */
    if (formIsValid(formValues(inputs))) {
        closeModale();
        console.table (formValues(inputs));
        form.querySelectorAll('.text-control').forEach(input => input.value = '');
        
    } else {
        openModale();
    }
};

submitInput.addEventListener('click', (e) => onSubmit(e));
  

/**
 * Close modale form with Escape
 */
window.addEventListener('keyup', (e) => {
    closeModalKey(e);
});
  
function closeModalKey(e) {
    if ((modalbg.style.display = 'block' && e.key === 'Escape')) {
        closeModale();
    }
}

