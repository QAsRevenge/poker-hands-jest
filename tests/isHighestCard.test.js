const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that highestCard returns highest score if hand has highest card', () => {
  let hand1 = new Hand('♥7', '♦2', '♣4', '♠3', '♠K');
  let hand2 = new Hand('♦7', '♦2', '♣4', '♠3', '♠Q');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});

test('Test that highestCard returns truthy if hand does not contain any other hand', () => {
  let hand = new Hand('♥7', '♦2', '♣4', '♠3', '♠K');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy()
})

test('Test that highestCard returns highest score if hand has high card and highest kicker', () => {
  let hand1 = new Hand('♥8', '♦2', '♣4', '♠3', '♠K');
  let hand2 = new Hand('♦7', '♦2', '♣4', '♠3', '♠K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});

test('Test that highestCard returns highest score if hand has high card and highest kicker', () => {
  let hand1 = new Hand('♥8', '♦2', '♣5', '♠3', '♠K');
  let hand2 = new Hand('♦8', '♦2', '♣4', '♠3', '♠K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});

test('Test that highestCard returns highest score if hand has high card and highest kicker', () => {
  let hand1 = new Hand('♥8', '♦2', '♣5', '♠4', '♠K');
  let hand2 = new Hand('♦8', '♦2', '♣5', '♠3', '♠K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});

test('Test that highestCard returns highest score if hand has high card and highest kicker', () => {
  let hand1 = new Hand('♥8', '♦3', '♣5', '♠4', '♠K');
  let hand2 = new Hand('♦8', '♦2', '♣5', '♠4', '♠K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});