document.addEventListener('DOMContentLoaded', () => {
    


    // console.log(deck);
});

class Game {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.score
    }


    seeScores() {
        console.log(this.player.score, this.player.attempts);
    }

    dealCards(playerSide) {

        // Create and shuffle a new deck of cards
        const deck = new Deck();
        deck.shuffle();
        
        let playerParent;
        if(playerSide === player){
            playerParent = document.querySelector('.cards-player');
        } else if(playerSide === computer){
            playerParent = document.querySelector('.cards-dealer');
        }
        
        const hitButton = document.querySelector('.js-hit');
        
        // coutner to get the latest card from the deck
        let counter = 1;
        hitButton.addEventListener('click', () => {
            let cardFromStack = deck.cards[deck.cards.length - counter]
            const card = new Card(cardFromStack.rank, cardFromStack.suit);

            this.player.score += cardFromStack.rank;
			console.log('TCL: Game -> playCards -> this.player.score', this.player.score)

            card.mount(playerParent)
            console.log(card);
            counter++;
            console.log(counter);
        });
    }

    playCards() {
        this.dealCards(computer);
    }

}