console.log('Lodash is loaded:', typeof _ !== 'undefined');
// create 4 players
// function makePlayer(name) {
//   return {
//     name,
//     hand: []
//   };
// }

// create cards

function createSuite(suite) {
  const cards = [];
  for (let i = 1; i <= 13; i++) {
    const card = {};
    switch (i) {
      case 1 :
        card.suite = suite;
        card.rank = 'ace';
        card.value = 11;
        break;
      case 11 :
        card.suite = suite;
        card.rank = 'jack';
        card.value = 10;
        break;
      case 12 :
        card.suite = suite;
        card.rank = 'queen';
        card.value = 10;
        break;
      case 13 :
        card.suite = suite;
        card.rank = 'king';
        card.value = 10;
        break;
      default :
        card.suite = suite;
        card.rank = i;
        card.value = i;
    }
    cards.push(card);
    // console.log('card', card);
  }
  return cards;
}

function createDeck() {
  const clubs = createSuite('clubs');
  const spades = createSuite('spades');
  const diamonds = createSuite('diamonds');
  const hearts = createSuite('hearts');
  const deck = clubs.concat(spades, diamonds, hearts);
  return deck;
}

console.log('deck', createDeck());
