/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  
  render () {
    // setTimeout(() => {
    this.element = document.createElement('div');
    this.element.className = `card face-${this.rank}-of-${this.suit}`;
    
  
      return this.element;
    // }, 2000);
  }

  update() {
    
  }

  mount(parent) {
    // setTimeout(() => {
      parent.appendChild(this.render());
    // }, 2000);
  }




} 