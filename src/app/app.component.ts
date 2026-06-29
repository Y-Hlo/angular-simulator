import { Collection } from '../collection';
import { Color } from '../enums/Color';
import './training';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';

  constructor() {

// 15. п 3.1. Вызов метода сохранения даты при загрузке страницы

    this.saveLastVisit();

// 15. п 4.1. Вызов метода сохранения количества визитов при загрузке страницы

    this.saveVisitCount();
  }

// 15. п 2.1. Метод проверки цвета на принадлежность к основным

  checkColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

// 15. п 3. Метод сохранения даты последнего визита в LocalStorage

  saveLastVisit(): void {
    const currentDate = new Date().toISOString();
    localStorage.setItem('lastVisit', currentDate);
  }

// 15. п 4. Метод сохранения количества визитов в LocalStorage

  saveVisitCount(): void {
    const currentVisits = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', String(currentVisits + 1));
  }

// 15. п 5.7. Создание коллекций с источниками данных

  stringCollection = new Collection<string>(['apple', 'orange', 'cherry']);

  numberCollection = new Collection<number>([130, 120, 450]);

}