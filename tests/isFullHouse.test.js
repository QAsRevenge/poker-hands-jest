const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isFullHouse returns truthy if hand contains full house', () => {
  let hand = new Hand('♥3', '♠3', '♣3', '♣K', '♠K');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy()
})

test('Check that isFullHouse returns falsy if hand does not contain full house', () => {
  let hand = new Hand('♥3', '♥2', '♣3', '♣K', '♠K');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy()
})

test('Check that isFullHouse returns hand with highest score based on rank of triplet', () => {
  let hand1 = new Hand('♥4', '♠4', '♣4', '♣5', '♠5')
  let hand2 = new Hand('♥3', '♠3', '♣3', '♣A', '♠A')
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})

test('Check that isFullHouse returns hand with highest score based on rank of pair', () => {
  let hand1 = new Hand('♥4', '♠4', '♣4', '♣K', '♠K')
  let hand2 = new Hand('♠4', '♥4', '♣4', '♣Q', '♠Q')
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})