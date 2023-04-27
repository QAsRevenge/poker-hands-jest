const Card = require('./Card');

module.exports = class Hand {

  constructor(...cards) {
    if (cards.length !== 5) {
      throw new Error('A hand must be 5 cards!');
    }
    // convert from to strings to card if needed
    // (allow strings on the form ♥9)
    for (let i = 0; i < 5; i++) {
      if (typeof cards[i] === 'string') {
        cards[i] = new Card(cards[i][0], cards[i][1]);
      }
    
    }
    // if not all cards are instances of Card throw error
    for (let card of cards) {
      if (!(card instanceof Card)) {
        throw new Error('A non card found in your hand!');
      }
    }


    // set the hand
    this.cards = cards;

    // -- Check for duplicate cards --
    // Empty array to hold all unique instances of a card
    let uniques = [];
    // Loop through the cards in the hand
    cards.forEach((card) => {
      // Use some() to find cards that are not in the array 'uniques' by checking 
      // their suit and rank. If the card is not in the array, we push it to the array
      if (!uniques.some((unique) => unique.suit === card.suit && unique.rank === card.rank)) {
        uniques.push(card)
      }
    });
    // Compare the length of the original cards array and uniques
    // If they are not the same length then there must be duplicates in 'cards'
    if (cards.length !== uniques.length) {
      console.log(uniques, " ", cards)
      throw new Error('Duplicate cards')
    } 



  }

}