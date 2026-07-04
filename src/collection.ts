// 15. п 5. Универсальный класс Collection для работы с любыми типами данных (Generics)

export class Collection<T> {
  items: T[] = [];

// 15. п 5.6. Конструктор для инициализации коллекции данными

constructor(initialItems: T[]) {
  this.items = initialItems;
}

// 15. п 5.1. Метод получения всех элементов коллекции

  getAllItems(): T[] {
    return this.items;
  }

// 15. п 5.2. Метод получения определенного элемента коллекции по его индексу

  getItem(index: number): T {
    return this.items[index];
  }

// 15. п 5.3. Метод полной очистки всех элементов коллекции

  clearItems(): void {
    this.items = [];
  }

// 15. п 5.4. Метод удаления определенного элемента коллекции по его индексу

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

// 15. п 5.5. Метод замены определенного элемента коллекции по его индексу

  replaceItem(index: number, newItem: T): void {
    this.items[index] = newItem;
  }
}