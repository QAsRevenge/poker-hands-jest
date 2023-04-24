const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isStraightFlush returns truthy if straight flush', () => {
  let hand = new Hand('♥K', '♥Q', '♥J', '♥T', '♥9');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});


test('Test that isStraightFlush returns falsy if not straight flush', () => {
  let hand = new Hand('♥5', '♥2', '♥7', '♥8', '♥9');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
})

test('Check that isStraightFlush returns hand with highest score if both players have a straight flush', () => {
  let hand1 = new Hand('♥5', '♥6', '♥7', '♥8', '♥9');
  let hand2 = new Hand('♥2', '♥3', '♥4', '♥5', '♥6');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})