/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  
  render () {
    this.element = document.createElement('div');
    this.element.className = `card face-${this.rank}-of-${this.suit}`;

    return this.element;
  }



  mount(parent) {
    parent.appendChild(this.render());
  }




} 