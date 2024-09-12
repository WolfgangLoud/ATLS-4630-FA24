const form = document.querySelector('form');

function processForm(event){
    event.preventDefault();
    // console.log('in processFrom function!')

    const formData = new FormData(form);
    console.log(formData);

    const firstname = formData.get('first-name-input');
    const lastname= formData.get('last-name-input');

    const fullName= `${firstname} ${lastname}`;

    console.log(fullName);

}

form.addEventListener('submit',processForm);

const firstNameInput = document.getElementById('first-name-input');
firstNameInput.addEventListener('input', ()=> {
    console.log(firstNameInput.value);
});

//CHANGE CSS WITH DOM

const favoriteColorInput=document.getElementById('favorite-color-input');

function setPageBackgroundColor(){
    console.log(favoriteColorInput.value)

    //TODO: set background color
    const body=document.querySelector('body');
    body.style.backgroundColor=favoriteColorInput.value; //multi word css properties become camel case

}

favoriteColorInput.addEventListener('input',setPageBackgroundColor);