let editButton = document.querySelector('.profile__edit-button');
function popupOpen() {
    let popupMod = document.querySelector('.popup');
    popupMod.classList.add('popup_opened');
} 

editButton.addEventListener('click', popupOpen);

let closeButton = document.querySelector('.popup__close-button');

function popupClose() {
    let popupMod = document.querySelector('.popup');
    popupMod.classList.remove('popup_opened');
}

closeButton.addEventListener('click', popupClose);



let popupForm = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function formSubmitHandler(evt) {
    evt.preventDefault();
    let inputName = document.querySelector('.popup__input-name');
    let inputDescription = document.querySelector('.popup__input-description')

    inputName.getAttribute('value');
    inputDescription.getAttribute('value');

    profileName.textContent = inputName.value;
    
    profileDescription.textContent = inputDescription.value;
}

popupForm.addEventListener('submit', formSubmitHandler);

let saveButton = document.querySelector('.popup__button');

saveButton.addEventListener('click', popupClose);





