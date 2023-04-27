const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that containsDuplicates returns truthy if there is a duplicate', () => {
    let hand = new Hand('♥4', '♥4', '♥8', '♥T', '♥K');
  expect(CompareHands.containsDuplicates(hand)).toBeTruthy();
  
});

test('check that containsDuplicates returns falsy if there is no duplicate', () => {
    let hand = new Hand('♠3', '♦3', '♣3', '♣K', '♠K');
    expect(CompareHands.containsDuplicates(hand)).toBeFalsy();
  
});


