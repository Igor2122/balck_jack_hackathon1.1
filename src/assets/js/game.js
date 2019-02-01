class Game {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.deal = true;
    }


    seeScores() {
        console.log(this.player.score, this.player.attempts);
    }

    dealCards(playerSide) {

        // Create and shuffle a new deck of cards
        const deck = new Deck();
        deck.shuffle();

        let playerParent;
        if (playerSide === player) {
            playerParent = document.querySelector('.cards-player');
        } else if (playerSide === computer) {
            playerParent = document.querySelector('.cards-dealer');
        }

        const hitButton = document.querySelector('.js-hit');

        // coutner to get the latest card from the deck
        let counter = 1;
        // hitButton.addEventListener('click', () => {
        let cardFromStack = deck.cards[deck.cards.length - counter]
        const card = new Card(cardFromStack.rank, cardFromStack.suit);

        let receivedCard = cardFromStack.rank;
        let cardValue = 0;
        if (parseInt(receivedCard)) {
            cardValue = parseInt(receivedCard);
        } else if (receivedCard === 'ace') {
            cardValue = 11;
        } else {
            cardValue = 10;
        }


        if (player.isPlaying) {
            player.score += cardValue;
            player.attempts++;
            this.player.update();
            console.log(player.score, player.attempts);
        } else {
            computer.score += cardValue;
            computer.attempts++;
            this.computer.update();
        }



        console.log('TCL: Game -> dealCards -> cardsValue', cardValue, typeof cardValue)


        card.mount(playerParent)
        console.log(card);
        counter++;

    }

    playCards() {
        if (this.deal) {

            if (player.isPlaying) {
                this.dealCards(player);
            } else {
                while (this.computer.score < 17) {
                    this.dealCards(computer);
                }
            }
        }
        
        this.compareValues()
        
    }

    winLooseBanner (value) {
        this.element = document.createElement('div');
        this.element.className = 'overlay';
        this.element.innerHTML = `<h2>${value}<h2>`

        return this.element;
    }

    update(parent, value){
        parent.appendChild(this.winLooseBanner(value));
    }

    compareValues() {
        let table = document.querySelector('.table');

        if(player.score === 21 && player.attempts === 2){
            this.deal = false;
            console.log('player won');
        }

        if(this.player.score > 21){
            this.update(document.body, 'You Loose');
        }
        
        if(!this.player.isPlaying){
            if(this.player.score > this.computer.score){
                this.update(document.body, 'You Won!');
            } else {
                this.update(document.body, 'You Loose!');
            }
        }
        
    }


}