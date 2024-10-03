
const drawCardButton = document.getElementById('add-draw-card-button');
drawCardButton.addEventListener('click', drawCard);

async function drawCard() {
    // const count = RandRange(0,52);
    const shuffleUrl= 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  
    const response = await fetch(shuffleUrl, {
    headers: {
      'Content-Type': 'text/json',
    }
    });

    const deckData = await response.json();
    deckId = deckData.deck_id;

    const drawURL=`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    const drawResponse = await fetch(drawURL)
    const cardData = await drawResponse.json();

    const card = cardData.cards[0];
    displayCard(card);


//   for (const meowfact of json.data) {
//     const paragraph = document.createElement('p');
//     paragraph.innerText = meowfact;
//     document.body.append(paragraph);

    // unsafe:
    // document.body.innerHTML += `<p>${meowfact}</p>`;
  
}

function displayCard(card){
    const cardDisplay = document.getElementById("card");
    cardDisplay.innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
}