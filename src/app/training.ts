// 2.1. Создание файла training.ts

// 7. Создание базового интерфейса IPerson, который будет расширяться в задаче №6

interface IPerson {
  id: number;
}

// 6. Создание интерфейса IUser, который расширяет интерфейс IPerson

interface IUser extends IPerson {
  name: string;
  age?: number;
}

// 4. Создание переменной status

export let status: 'loading' | 'success' | 'error';

// 5. Создание переменной textFormat

export let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

// 3. Создание функции для подсчета суммы двух чисел

function sum(a: number, b: number): number {
  return a+b;
}

// 8. Создание функции для форматирования строки на основе переданного текстового режима

function textFormatFunc(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'lowercase') {
    return text.toLowerCase();
  }
  if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return text;
}

// 9. Создание функции для удаления заданного символа из строки

function delSymbol(str: string, sym: string): string {
  return str.replaceAll(sym, '');
}

// 10. Создание массива объектов пользователей и его фильтрация

const users: IUser[] = [
  {id: 1, name: 'Дональд', age: 99},
  {id: 2, name: 'НормальныйЧел', age: 10},
  {id: 3, name: 'Ын', age: 50}
];

const detenyshy = users.filter(user => user.age && user.age <= 15);