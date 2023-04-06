const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♥2', '♠3', '♥5', '♠7', '♥K');
let hand2 = new Hand('♠2', '♣3', '♠5', '♦7', '♣9');
console.log(CompareHands.comparer(hand1, hand2));

