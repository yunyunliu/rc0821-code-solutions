var orderHistory = [

];

/* {
  date:
  orderTotal:
  delivered:
  dateDelivered:
  items: [{
    name
    itemType:
    price:
    returnDate:
  }]
} */

// order1

var order1 = {
  shipTo: { name: 'JS Masher' },
  orderNum: '114-39',
  orderPlaced: 'August 4, 2020',
  delivered: true,
  deliveryDate: 'August 8, 2020',
  orderTotal: '34.00',
  items: [
    {
      name: 'Javascript for Impatient Programmers',
      itemType: 'book',
      price: '31.55',
      returnWindowClose: 'September 7, 2020'
    }
  ]
};

// order2

var order2 = {
  shipTo: { name: 'JS Masher' },
  orderNum: '113-99',
  orderPlaced: 'July 19, 2020',
  delivered: true,
  deliveryDate: 'July 20, 2020',
  orderTotal: '44.53',
  items: [
    {
      name: 'The Timeless Way of Building',
      itemType: 'book',
      price: '41.33',
      returnWindowClose: 'August 19, 2020'
    }
  ]
};

// order3

var order3 = {
  shipTo: { name: 'JS Masher' },
  orderNum: '114-28',
  orderPlaced: 'July 4, 2020',
  delivered: true,
  deliveryDate: 'July 7, 2020',
  orderTotal: '17.22',
  items: [
    {
      name: 'Gamecube Controller Adapter',
      itemType: 'electronics',
      price: '15.98',
      returnWindowClose: 'August 5, 2020'
    }
  ]
};

// order4

var order4 = {
  shipTo: { name: 'JS Masher' },
  orderNum: '113-28',
  orderPlaced: 'July 3, 2020',
  delivered: true,
  deliveryDate: 'July 5, 2020',
  orderTotal: '138.93',
  items: [
    {
      name: 'Gamecube Controller - Super Smash Bros. Edition',
      itemType: 'electronics',
      price: '94.95',
      returnWindowClose: 'August 4, 2020'
    },
    {
      name: 'The Art of Sql',
      itemType: 'book',
      price: '33.99',
      returnWindowClose: 'August 4, 2020'
    }
  ]
};

orderHistory.push(order1, order2, order3, order4);

console.log('orderHistory', orderHistory);
