
let interval;

const images = [
  {
    alt: 'bulbasaur',
    src: 'images/001.png'
  },
  {
    alt: 'charmander',
    src: 'images/004.png'
  },
  {
    alt: 'squirtle',
    src: 'images/007.png'
  },
  {
    alt: 'pikachu',
    src: 'images/025.png'
  },
  {
    alt: 'jigglypuff',
    src: 'images/039.png'
  }
];

let data = {
  current: 0,
  images: images,
  interval: null
};
