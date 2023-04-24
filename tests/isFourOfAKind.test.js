const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isFourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥J', '♦J', '♣J', '♠J', '♠2');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Check that isFourOfAKind returns falsy if not four of a kind', () => {
  let hand = new Hand('♥J', '♦J', '♣J', '♠3', '♠2');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
})

test('Check that isFourOfAKind returns hand with strongest four of a kind', () => {
  let hand1 = new Hand('♥J', '♦J', '♣J', '♠J', '♠2');
  let hand2 = new Hand('♥T', '♦T', '♣T', '♠T', '♠2');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})

test('Check that isFourOfAKind returns hand with strongest hand based on kicker', () => {
  let hand1 = new Hand('♥T', '♦T', '♣T', '♠T', '♠3');
  let hand2 = new Hand('♥T', '♦T', '♣T', '♠T', '♠2');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})

test('Check that isFourOFAKind returns both hands if both hands are of equal strength', () => {
   let hand1 = new Hand('♥T', '♦T', '♣T', '♠T', '♠3');
  let hand2 = new Hand('♥T', '♦T', '♣T', '♠T', '♠3');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toEqual(hand2Score);
})