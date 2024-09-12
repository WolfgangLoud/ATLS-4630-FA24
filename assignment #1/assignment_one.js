const headerColorInput=document.getElementById('header-color-input');

function setH1Color(){
    console.log(headerColorInput.value)
    const body=document.querySelector('h1');
    body.style.color=headerColorInputColorInput.value; 
}