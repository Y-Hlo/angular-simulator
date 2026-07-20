import { Collection } from '../collection';
import { Color } from '../enums/Color';
import { IOffer } from '../interfaces/IOffer';
import './training';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  // 16. п 3.1. Упорядочивание свойств класса и добавление модификаторов доступа

  companyName: string = 'РУМТИБЕТ';

  // 15. п 5.7. Создание коллекций с источниками данных

  stringCollection = new Collection<string>(['apple', 'orange', 'cherry']);

  numberCollection = new Collection<number>([130, 120, 450]);

  dateTime: string = '';

  count: number = 0;

  dateTimeOrCount: boolean = true;

  liveText: string = '';

  isLoading: boolean = true;

  // 16. п 1.4. Массив данных для циклического вывода карточек через @for

  offer: IOffer[] = [
    {
      id: 1,
      icon: '/images/guide-ico.svg',
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      icon: '/images/safety-ico.svg',
      title: 'Безопасный поход',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      icon: '/images/prices-ico.svg',
      title: 'Лояльные цены',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  // 16. п 2.1. Переменные для двусторонней привязки данных формы

  tour: string = '';

  date: string = '';

  participants: string = '';

  constructor() {

    // 15. п 3.1. Вызов метода сохранения даты при загрузке страницы

    this.saveLastVisit();

    // 15. п 4.1. Вызов метода сохранения количества визитов при загрузке страницы

    this.saveVisitCount();

    this.dateTime = new Date().toLocaleString();

    // 16. п 4. Запуск таймера для ежесекундного обновления даты и времени

    setInterval(() => {
      this.dateTime = new Date().toLocaleString();
    }, 1000);

    // 16. п 8.1. Искусственная задержка для имитации загрузки страницы

    setTimeout(() => {
    this.isLoading = false;
  }, 2000);

  }

  // 15. п 2.1. Метод проверки цвета на принадлежность к основным

  checkColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  // 15. п 3. Метод сохранения даты последнего визита в LocalStorage

  private saveLastVisit(): void {
    const currentDate = new Date().toISOString();
    localStorage.setItem('lastVisit', currentDate);
  }

  // 15. п 4. Метод сохранения количества визитов в LocalStorage

  private saveVisitCount(): void {
    const currentVisits = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', String(currentVisits + 1));
  }

  increase(): void {
    this.count++;
  }

  decrease(): void {
    this.count--;
  }

  toggleView(): void {
    this.dateTimeOrCount = !this.dateTimeOrCount;
  }

}