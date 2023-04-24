const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that comparer returns isHighestCard method', () => {
  let hand1 = new Hand('♥7', '♦2', '♣4', '♠3', '♠K');
  let hand2 = new Hand('♦7', '♦2', '♣4', '♠3', '♠Q');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('Check that comparer returns onePair method', () => {
  let hand1 = new Hand('♥7', '♦7', '♣4', '♠3', '♠K');
  let hand2 = new Hand('♦7', '♦2', '♣4', '♠3', '♠Q');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns twoPair method', () => {
  let hand1 = new Hand('♥7', '♦7', '♣4', '♠4', '♠K');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠3', '♠Q');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns threeOfAKind method', () => {
  let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠K');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠Q');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns isStraight method', () => {
  let hand1 = new Hand('♥6', '♦7', '♣8', '♠9', '♠T');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠A');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns isFlush method', () => {
  let hand1 = new Hand('♥6', '♥7', '♥T', '♥2', '♥3');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠A');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns isFullHouse method', () => {
  let hand1 = new Hand('♥6', '♦6', '♣6', '♠4', '♠4');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠A');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns isFourOfAKind method', () => {
  let hand1 = new Hand('♥6', '♦6', '♣6', '♠6', '♠4');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠A');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})

test('Check that comparer returns isStraightFlush method', () => {
  let hand1 = new Hand('♠6', '♠7', '♠8', '♠9', '♠T');
  let hand2 = new Hand('♦2', '♦2', '♣4', '♠4', '♠A');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
})
