//Change HTML element
const myParagraphs = document.getElementsByClassName("my-paragraph");
console.log(myParagraphs);

let resume=false;



function changeLink() {
  const portfolio = document.querySelector("#portfolio");
  portfolio.href = 'https://docs.google.com/document/d/1-fShRQKlP567lU5RTRR6__q8AFiyEYYkXUeNdiWhklc/edit?usp=sharing';

  portfolio.textContent="View my Resume";

  const changeLinkButton = document.querySelector('#change-link-button');
  changeLinkButton.textContent="Click to view my portfolio!";



  if (resume===false)
  {
    resume=true;
  }
  else if(resume===true)
  {
    portfolio.href = 'https://wolfgangloudenburg.myportfolio.com/';

    portfolio.textContent="View my Portfolio";

    changeLinkButton.textContent="Click to view my resume!";

    resume=false;
  }

  
}


const changeLinkButton = document.querySelector('#change-link-button');
changeLinkButton.addEventListener('click', changeLink);



//Change CSS element
const headerColorInput=document.getElementById('header-color-input');



function setH1Color(){
    console.log(headerColorInput.value)
    const body=document.querySelector('h1');
    body.style.color=headerColorInput.value; 
}

headerColorInput.addEventListener('input',setH1Color);