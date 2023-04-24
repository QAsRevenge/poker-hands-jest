const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠2');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Test that threeOfAKind returns hand with highest score if both hands have three of a kind', () => {
  let hand1 = new Hand('♥T', '♦T', '♣T', '♠3', '♠2');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♠3', '♠2');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})

test('Test that threeOfAKind returns hand with highest score if both hands have three of a kind but different kickers', () => {
  let hand1 = new Hand('♥T', '♦T', '♣T', '♠4', '♠2');
  let hand2 = new Hand('♥T', '♦T', '♣T', '♠3', '♠2');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})

test('Test that threeOfAKind returns hand with highest score if both hands have three of a kind but different kickers', () => {
  let hand1 = new Hand('♥T', '♦T', '♣T', '♠4', '♠3');
  let hand2 = new Hand('♥T', '♦T', '♣T', '♠4', '♠2');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})