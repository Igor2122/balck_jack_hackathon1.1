const player = new Player('Igor');
const computer = new Computer('Enemy');

const game = new Game(player, computer);
game.seeScores();

document.addEventListener('click', e => {
    if (e.target.classList.contains('js-hit')) {
        game.playCards();
    } else if (e.target.classList.contains('js-stand')) {
        player.stand();
        // console.log('button clikck', standButton);
        game.playCards();
    }
})


// const dealhitButton = document.querySelector('.js-hit');
// dealhitButton.addEventListener('click', () => {
//     game.playCards();
// });


// const standButton = document.querySelector('.js-stand');
// standButton.addEventListener('click', () => {
//     player.stand();
//     console.log('button clikck', standButton);
//     game.playCards();
// })

// player.stand();













// document.addEventListener('DOMContentLoaded', () => {
//   // Create and shuffle a new deck of cards

//   const hitButton = document.querySelector('.js-hit');

//   const deck = new Deck();
//   deck.shuffle();

//   const playerParent = document.querySelector('.cards-player');

//   let counter = 1;

//   hitButton.addEventListener('click', () => {
//     let cardFromStack = deck.cards[deck.cards.length - counter]
//     const card = new Card(cardFromStack.rank, cardFromStack.suit);
//     card.mount(playerParent)
//     console.log(card);
//     counter ++;
//     console.log(counter);
//   })



//   // console.log(deck);
// });