console.log('Lodash is loaded:', typeof _ !== 'undefined');
// create 4 players
function createPlayers(names) {
  const players = [];
  names.forEach(current => {
    const player = {
      name: current,
      hand: []
    };
    players.push(player);
  });
  return players;
}

const names = ['Yunyun', 'Mikko', 'Valerie', 'Karina'];
// console.log('players', createPlayers(names));

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

// console.log('deck', createDeck());

function shuffle(deck) {
  const indexes = [];
  const shuffled = [];
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.floor(Math.random() * 53);
    while (indexes.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * 53);
    }
    indexes.push(randomIndex);
  }
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const card = deck[index];
    shuffled.push(card);
  }
  return shuffled;
}

// console.log('indexes', shuffle(createDeck()));

function deal(deck, players, cards) {
  let remaining = deck.slice(); // copy of deck
  for (let i = 0; i < players.length; i++) {
    const hand = remaining.slice(0, cards);
    remaining = remaining.slice(cards);
    players[i].hand = hand;
    const [card1, card2] = hand;
    const totalValue = card1.value + card2.value;
    players[i].handValue = totalValue;
  }
}

const deck = createDeck();
const shuffledDeck = shuffle(deck);

const players = createPlayers(names);
deal(shuffledDeck, players, 2);

console.log('players', players);

function decideWinner(players) {
  const values = [];
  players.forEach(current => {
    values.push(current.handValue);
  });
  const highestVal = Math.max(...values);

  const winner = players[values.indexOf(highestVal)];
  console.log(winner.name, 'wins!', 'winning hand:', winner.hand);
}

decideWinner(players);
