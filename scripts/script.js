let editButton = document.querySelector('.profile__edit-button');
let popupMod = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_place_name');
let inputDescription = document.querySelector('.popup__input_place_description');
let saveButton = document.querySelector('.popup__button');
let closeButton = document.querySelector('.popup__close-button');

function popupOpen() {
    popupMod.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent; 
} 

function popupClose() {
    popupMod.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

    popupClose();
}

editButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);




