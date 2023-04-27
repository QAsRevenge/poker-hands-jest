module.exports = class CompareHands {

  static ranks = '23456789TJQKA';

  // Helper methods (used by the comparer methods)

// I can't get this to work with Jest, it works when called in index.js but not when testing. I dont know whats wrong
/*   static containsDuplicates(hand1, hand2) {
    let uniques = [[], []];
    [hand1.cards, hand2.cards].forEach((cards, index) => {
      cards.forEach((card) => {
        if (!uniques[index].some((unique) => unique.suit === card.suit && unique.rank === card.rank)) {
          uniques[index].push(card);
        }
      });
    });

    let duplicates = false;
    [hand1, hand2].forEach((hand, index) => {
      if (hand.cards.length !== uniques[index].length) {
        console.log(`There are duplicates in hand${index+1}.`);
        duplicates = true;
      }
    });

    let notUniqueCards = false;
    uniques[0].forEach((card) => {
      if (uniques[1].some((unique) => unique.suit === card.suit && unique.rank === card.rank)) {
        console.log('There is at least one card that appears in both hands.');
        notUniqueCards = true;
      }
    });

    if (!duplicates && !notUniqueCards) {
      console.log('There are no duplicates in either hand and no cards that appear in both hands.');
      return true;
    }
    return false;
} */

  
  // This works with Jest though.. strange
 // -- Check for duplicate cards --
  static containsDuplicates(hand) {
    // Empty array to hold all unique instances of a card
    let uniques = [];
    // Loop through the cards in the hand
    hand.cards.forEach((card) => {
      // Use some() to find cards that are not in the array 'uniques' by checking 
      // their suit and rank. If the card is not in the array, we push it to the array
      if (!uniques.some((unique) => unique.suit === card.suit && unique.rank === card.rank)) {
        uniques.push(card)
      }
    });
    // Compare the length of the original cards array and uniques
    // If they are not the same length then there must be duplicates in 'cards'
    if (hand.cards.length !== uniques.length) {
      // Return true if there are duplicates
      return true;
    } 
    // Return false if there are no duplicates
    return false;
  }

  // note: ace is high
  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }

  // low to high (ace is highest)
  static sortByRank(cards) {
    return cards.sort((a, b) =>
      this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ? -1 : 1
    );
  }

  // count occurences of each rank
  static rankOccurences(hand) {
    let ranks = {};
    for (let card of hand.cards) {
      ranks[card.rank] = (ranks[card.rank] || 0) + 1;
    }
    return [Object.keys(ranks), Object.values(ranks)];
  }

 // add kickers to score
  static scoreWithKickers(mainScore, kickerCards) {
    this.sortByRank(kickerCards);
    let exponent = 0, score = 0;
    for (let kickerCard of kickerCards) {
      score += this.rankToPoint(kickerCard.rank) * 10 ** exponent;
      exponent += 2;
    }
    // console.log('Kicker cards score', kickerCards, score);
    score += mainScore * 10 ** exponent;
    // console.log('Kicker cards score with main score added', mainScore, ' -> ', score);
    return score;
  }

  // Main compare (calling all the small comparers)
  static comparer(hand1, hand2) {
    let comparers = [
      'isStraightFlush', 'isFourOfAKind', 'isFullHouse',
      'isFlush', 'isStraight', 'isThreeOfAKind',
      'isTwoPair', 'isOnePair', 'isHighestCard'
    ];

    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      // nobody has this kind combination -> continue to next comparer
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      // at least one hand has this kind of combination, which hand(s) won?
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }
  }

  // Comparers

  static isStraightFlush(hand) {
    return this.isStraight(hand) && this.isFlush(hand);
  }

  static isFourOfAKind(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfFours = ranks[occurences.indexOf(4)];
    if (!rankOfFours) { return 0; }
    let mainScore = this.rankToPoint(rankOfFours);
    let kickers = hand.cards.filter(({ rank }) => rank !== rankOfFours);
    return this.scoreWithKickers(mainScore, kickers);
  }

  static isFullHouse(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfThrees = ranks[occurences.indexOf(3)];
    let rankOfPair = ranks[occurences.indexOf(2)];
    if (!rankOfThrees || !rankOfPair) { return 0; }
    return this.rankToPoint(rankOfThrees) * 100 + this.rankToPoint(rankOfPair);
  }

  static isFlush(hand) {
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    if ([...new Set(suits)].length !== 1) { return 0; }
    return this.scoreWithKickers(1, hand.cards);
  }

  static isStraight(hand) {
    this.sortByRank(hand.cards);
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    return this.rankToPoint(ranks[4]);
  }

  static isThreeOfAKind(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    let rankOfThrees = ranks[occurences.indexOf(3)];
    if (!rankOfThrees) { return 0; }
    let kickers = hand.cards.filter(({ rank }) => rank !== rankOfThrees);
    let mainScore = this.rankToPoint(rankOfThrees);
    return this.scoreWithKickers(mainScore, kickers);
  }

  static isTwoPair(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    if (occurences.indexOf(2) === occurences.lastIndexOf(2)) { return 0; }
    let rankOfLowestPair = ranks[occurences.indexOf(2)];
    let rankOfHighestPair = ranks[occurences.lastIndexOf(2)];
    let mainScore = this.rankToPoint(rankOfHighestPair) * 100
      + this.rankToPoint(rankOfLowestPair);
    let kickers = hand.cards.filter(({ rank }) => rank !== rankOfLowestPair && rankOfHighestPair);
    return this.scoreWithKickers(mainScore, kickers);
  }

  static isOnePair(hand) {
    let [ranks, occurences] = this.rankOccurences(hand);
    if (!occurences.includes(2) ||
      occurences.indexOf(2) !== occurences.lastIndexOf(2)) { return 0; }
    let rankOfPair = ranks[occurences.indexOf(2)];
    let mainScore = this.rankToPoint(rankOfPair);
    let kickers = hand.cards.filter(({ rank }) => rank !== rankOfPair);
    return this.scoreWithKickers(mainScore, kickers);
  }

  static isHighestCard(hand) {
    return this.scoreWithKickers(0, hand.cards);
  }
  

}