const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥6', '♦5');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns falsy if not a straight', () => {
  let hand = new Hand('♥T', '♦8', '♣7', '♥6', '♦5');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});
 
test('Check that isStraight returns hand with highest straight if both hands have a straight', () => {
  let hand1 = new Hand('♥A', '♦K', '♣Q', '♥J', '♦T');
  let hand2 = new Hand('♥9', '♦8', '♣7', '♥6', '♦5');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});


