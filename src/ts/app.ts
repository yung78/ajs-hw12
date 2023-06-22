import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import SmartPhone from './domain/SmartPhone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(
  123456,
  'The Avangers',
  200,
  2012,
  'USA',
  'Avengers Assemble!',
  ['sci-fi', 'action', 'fantasy', 'adventure'],
  137
));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

cart.add(new SmartPhone(46, 'Nokia-3310', 2590, 2000, 1));

console.log(cart.items);

cart.add(new SmartPhone(46, 'Nokia-3310', 2590, 2000, 3));

console.log(cart.items);

console.log(cart.totalPrice());
console.log(cart.totalDiscountPrice(10));

cart.remove(1008);
cart.remove(10);
cart.remove(46, 5);

console.log(cart.items);
