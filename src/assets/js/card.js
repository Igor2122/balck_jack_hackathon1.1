/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.facereverse = true;
  }

  
  render () {

    
    this.element = document.createElement('div');
    this.element.className = `card face-revers `;
    
    setTimeout(() => {
      this.element.classList.remove('face-revers');
      this.element.classList.add(`face-${this.rank}-of-${this.suit}`);
    }, 1000);
    
    
    // this.element.className = `card face-${this.rank}-of-${this.suit}`;
    return this.element;
    
  }
  
  getCardValues(card){
    let cardValue = 0;
        if (parseInt(card)) {
            cardValue = parseInt(card);
        } else if (card === 'ace') {
            cardValue = 11;
        } else {
            cardValue = 10;
        }

        return cardValue;
  }
  
  mount(parent) {
    parent.appendChild(this.render());
    
  }
  
} 