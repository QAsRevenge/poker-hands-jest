const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♠T', '♥7', '♥8', '♥T', '♥K');
let hand2 = new Hand('♣6', '♠4', '♣4', '♦T', '♣7');
console.log(CompareHands.comparer(hand1, hand2));

