const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isOnePair returns truthy if hand contains a pair', () => {
  let hand = new Hand('♥9', '♦9', '♣7', '♥5', '♦6');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('Check that isOnePair returns hand with highest score if both players have a pair', () => {
  let hand1 = new Hand('♥9', '♦9', '♣7', '♥5', '♦6')
  let hand2 = new Hand('♥T', '♦T', '♣7', '♥5', '♦6')
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score)
})

test('Check that isOnePair returns falsy if hand does not contain a pair', () => {
  let hand = new Hand('♥9', '♦T', '♣7', '♥5', '♦6');
  expect(CompareHands.isOnePair(hand)).toBeFalsy()
})

test('Check that isOnePair returns highest score if both players have the same pair but different kickers', () => {
  let hand1 = new Hand('♥9', '♦9', '♣2', '♥5', '♦6')
  let hand2 = new Hand('♥9', '♦9', '♣2', '♥5', '♦3')
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score)
})

test('Check that isOnePair returns highest score if both players have the same pair but different kickers', () => {
  let hand1 = new Hand('♥9', '♦9', '♣2', '♥7', '♦6')
  let hand2 = new Hand('♥9', '♦9', '♣2', '♥5', '♦6')
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score)
})

test('Check that isOnePair returns highest score if both players have the same pair but different kickers', () => {
  let hand1 = new Hand('♥9', '♦9', '♣3', '♥7', '♦6')
  let hand2 = new Hand('♥9', '♦9', '♣2', '♥7', '♦6')
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score)
})