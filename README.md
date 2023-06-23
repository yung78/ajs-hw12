# Homework complited

[![Build status](https://ci.appveyor.com/api/projects/status/4ltwodf9yoccm24t?svg=true)](https://ci.appveyor.com/project/yung78/ajs-hw12)

В консоль в странном порядке данные идут(скрин прикрепил), вроде все синхронно должно идти, по очереди… По тестам все ок… Почему так происходит?
![alt text](https://github.com/yung78/ajs-hw12/blob/main/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%B5%D0%BB%D0%B0.png "Вопросики")


В последнем задании закомментил кусок, почему-то, даже после Явной проверки на присутствие свойства’count’ (или сравнении в условной конструкции с undefind) у определенной сущности из Cart.items, программа ругалась на математические операции ( can be undefind).

```javascript
remove(goodId: number, value?: number): void {
  const index: number = this._items.indexOf(this._items.filter((el: any): unknown => el['id'] == goodId)[0]);
    if (index == -1){
      return;
    }

    if ((this._items[index]['count']) && (value)) {
        this._items[index]['count'] -= value;
    }

    if ((undefined != this._items[index]['count']) && !(value)) {
        this._items[index]['count'] -= 1;
    }

    if (this._items[index]['count'] <= 0) {
        this._items.splice(index, 1);
        return
    }

    this._items.splice(index, 1);
}
```
