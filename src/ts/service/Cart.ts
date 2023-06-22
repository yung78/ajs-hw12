import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (this._items.length) {
      for (const el of this._items) {
        if (el['id'] == item['id']) {
          if((el['count']) && (item['count'])) {
            el['count'] += item['count'];
            return;
          }
          return;
        }
      }
      this._items.push(item);
      return;
    } else {
      this._items.push(item);
    }
  }  

  get items(): Buyable[] {
    return [...this._items]; 
  }

  totalPrice(): number {
    const initialValue = 0;
    const price: number = this._items.map((el: Buyable): number => el['count'] ? el['price'] * el['count'] : el['price'])
    .reduce((accumulator: number, currentValue: number): number => accumulator + currentValue, initialValue);
    return price;
  }

  totalDiscountPrice(discount: number): number {
    const initialValue = 0;
    const discountPrice: number = 1 - (discount / 100); // Если скидка в %
    const price: number = this._items.map((el: Buyable): number => el['count'] ? el['price'] * discountPrice * el['count'] : el['price'] * discountPrice)
    .reduce((accumulator: number, currentValue: number): number => accumulator + currentValue, initialValue);
    return price;
  }

  remove(goodId: number, value?: number): void {
    for (const el of this._items) {
      if (el['id'] == goodId) {
        if (el['count']) {
          value ? el['count'] -= value :  el['count'] -= 1;
          if (el['count'] <=0) {
            this._items.splice(this._items.indexOf(el), 1);
          }
          return;
        }
        this._items.splice(this._items.indexOf(el), 1);
      }
    }
    return;

    // Не понятно, почему конструкция ниже не хочет работать??? Пришлось через цикл прогонять.

    // const index: number = this._items.indexOf(this._items.filter((el: any): unknown => el['id'] == goodId)[0]);
    // if (index == -1){
    //   return;
    // }

    // if ((this._items[index]['count']) && (value)) {
    //     this._items[index]['count'] -= value;
    // }

    // if ((undefined != this._items[index]['count']) && !(value)) {
    //     this._items[index]['count'] -= 1;
    // }

    // if (this._items[index]['count'] <= 0) {
    //     this._items.splice(index, 1);
    //     return
    // }

    // this._items.splice(index, 1);
  }
}
