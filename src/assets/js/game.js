class Game {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.deal = true;
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


        // coutner to get the latest card from the deck
        let counter = 1;
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

        card.mount(playerParent)
        counter++;

    }

    feelLuckyAlg(level) {
        let randomNums = [];
        let luckyNums = [];
        let numSame = [];
        let lucky = false;


        for (let i = 0; i < 10; i++) {
            randomNums.push(Math.floor(Math.random() * (11 - 1)) + 1)
        };

        for (let i = 0; i < 3; i++) {
            luckyNums.push(Math.floor(Math.random() * (11 - 1)) + 1)
        };

        for (let i = 0; i < luckyNums.length; i++) {
            for (let j = 0; j < randomNums.length; j++) {
                if (luckyNums[i] === randomNums[j]) {
                    numSame.push(randomNums[j]);
                }
            }

        }
        console.log('TCL: feelLuckyAlg -> numSame.length', numSame.length)
        if (numSame.length >= level) {
            lucky = true;
        }
        console.log('Feeling lucky');
        return lucky;

    }

    playCards() {
        if (this.deal) {
            if (player.isPlaying) {
                this.dealCards(player);
            } else {
                if (this.feelLuckyAlg(1)) {
                    while (this.computer.score < 20) {
                        this.dealCards(computer);
                    }
                }
                while (this.computer.score < 17) {
                    this.dealCards(computer);
                }
            }
        }

        this.compareValues()

    }

    winLooseBanner(value) {
        this.element = document.createElement('div');
        this.element.className = 'overlay';
        this.element.innerHTML = `<h2>${value}<h2>`

        return this.element;
    }

    update(parent, value) {
        parent.appendChild(this.winLooseBanner(value));
    }

    compareValues() {

        if (player.score === 21 && player.attempts === 2) {
            this.deal = false;
            this.update(document.body, 'Black Jack Dude!');
        }

        if (this.player.score > 21) {
            this.update(document.body, 'You Loose');
        }



        if (!this.player.isPlaying) {
            if (this.player.score > this.computer.score) {
                this.update(document.body, 'You Won!');
            } else {
                if (this.computer.score > 21) {
                    this.update(document.body, 'You Won');
                } else {
                    this.update(document.body, 'You Loose!');
                }
            }
        }



    }


}