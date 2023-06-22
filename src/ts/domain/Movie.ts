import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly releaseYear: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration: number,
  ) { }
}
