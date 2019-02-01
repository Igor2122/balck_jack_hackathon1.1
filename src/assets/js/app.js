document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards

  const hitButton = document.querySelector('.js-hit');

  const deck = new Deck();
  deck.shuffle();
  
  const playerParent = document.querySelector('.cards-player');
  
  let counter = 1;
  
  hitButton.addEventListener('click', () => {
    let cardFromStack = deck.cards[deck.cards.length - counter]
    const card = new Card(cardFromStack.rank, cardFromStack.suit);
    card.mount(playerParent)
    console.log(card);
    counter ++;
    console.log(counter);
  })
	


  // console.log(deck);
});