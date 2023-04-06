const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that highestCard returns truthy if highest card', () => {
  let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠K');
  let hand2 = new Hand('♦7', '♦2', '♣7', '♠3', '♠Q');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});