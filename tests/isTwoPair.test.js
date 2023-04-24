const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isTwoPair returns truthy if hand contains a two pairs', () => {
  let hand = new Hand('♥9', '♦9', '♣7', '♥7', '♦6');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Check that isTwoPair returns falsy if hand does not contain two pairs', () => {
  let hand = new Hand('♥9', '♦9', '♣7', '♥5', '♦6');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy()
})

test('Check that isTwoPair returns hand with highest score if both players have two pair', () => {
  let hand1 = new Hand('♥9', '♦9', '♣8', '♥8', '♦6')
  let hand2 = new Hand('♥T', '♦T', '♣7', '♥7', '♦6')
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score)
})


test('Check that isTwoPair returns highest score if both players have the same pairs but different kickers', () => {
  let hand1 = new Hand('♥5', '♦5', '♣3', '♥3', '♦7')
  let hand2 = new Hand('♥5', '♦5', '♣3', '♥3', '♦6')
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
})
