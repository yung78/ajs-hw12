import Buyable from './Buyable';

export default class SmartPhone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly releaseYear: number,
    readonly count: number,
  ) { }
}