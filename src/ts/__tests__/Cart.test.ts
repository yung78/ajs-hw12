import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';
import MusicAlbum from '../domain/MusicAlbum';
import SmartPhone from '../domain/SmartPhone';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart: Cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add() some item in cart without "count"', () => {
  const cart: Cart = new Cart();
  const result: Buyable[] = [
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225)
  ];

  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items).toEqual(result);
});

test('add() some item in cart with "count"', () => {
  const cart: Cart = new Cart();
  const result: Buyable[] = [new SmartPhone(46, 'Nokia-3310', 2590, 2000, 4)];

  cart.add(new SmartPhone(46, 'Nokia-3310', 2590, 2000, 2));
  cart.add(new SmartPhone(46, 'Nokia-3310', 2590, 2000, 2));

  expect(cart.items).toEqual(result);
});

const cart: Cart = new Cart();

cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new SmartPhone(46, 'Nokia-3310', 2590, 2000, 3));

test('totalPrice() item`s in cart', () => {
  expect(cart.totalPrice()).toBe(8670);
});


test('totalDiscountPrice() item`s in cart', () => {
  expect(cart.totalDiscountPrice(10)).toBe(7803);
});


test('remove() item from cart without "count"', () => {
  const result: Buyable[] = [new SmartPhone(46, 'Nokia-3310', 2590, 2000, 3)];
  cart.remove(1008);
  expect(cart.items).toEqual(result);
});

test('remove() item from cart with "count" NO remove value', () => {
  const result: Buyable[] = [new SmartPhone(46, 'Nokia-3310', 2590, 2000, 2)];
  cart.remove(46);
  cart.remove(10, 2)
  expect(cart.items).toEqual(result);
});

test('remove() item from cart with "count" & with remove value', () => {
  cart.remove(46, 2);
  expect(cart.items).toEqual([]);
});
