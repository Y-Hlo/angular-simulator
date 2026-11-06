import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { MessageType } from '../enums/MessageType';
import { FormsModule } from '@angular/forms';
import { IOffer } from '../interfaces/IOffer';
import { Collection } from '../collection';
import { Color } from '../enums/Color';
import { IBlog } from '../interfaces/IBlog';
// import './training';
import { LocalStorageService } from '../local-storage.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MessageComponent } from '../message/message.component';
import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, NgTemplateOutlet, TitleCasePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected messageService = inject(MessageService)

  // 16. п 3.1. Упорядочивание свойств класса и добавление модификаторов доступа

  companyName: string = 'РУМТИБЕТ';

  // 15. п 5.7. Создание коллекций с источниками данных

  stringCollection = new Collection<string>(['apple', 'orange', 'cherry']);

  numberCollection = new Collection<number>([130, 120, 450]);

  dateTime: string = '';

  count: number = 0;

  dateTimeOrCount: boolean = true;

  liveText: string = '';

  // isLoading: boolean = true;

  // 19. п 4.6. Внедрение сервиса локального хранилища

  localStorageService = inject(LocalStorageService);

  MessageType = MessageType;

  // 16. п 1.4. Массив данных для циклического вывода карточек через @for

  offer: IOffer[] = [
    {
      id: 1,
      icon: '/images/icons/guide.svg',
      alt: 'Значок гида',
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      icon: '/images/icons/safety.svg',
      alt: 'Значок щита',
      title: 'Безопасный поход',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      icon: '/images/icons/prices.svg',
      alt: 'Значок ценника',
      title: 'Лояльные цены',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  // 16. п 2.1. Переменные для двусторонней привязки данных формы

  tour: string = '';

  date: string = '';

  participants: string = '';

  blog: IBlog[] = [
    {
      id: 1,
      image: '/images/blog-italy.png',
      alt: 'Яркие разноцветные дома на скалистом побережье Италии',
      title: 'Красивая Италия, какая она в реальности?',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      link: '',
      linkText: 'читать статью'
    },
    {
      id: 2,
      image: '/images/blog-airplane.png',
      alt: 'Крыло самолета в полете над облаками на закате',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      link: '',
      linkText: 'читать статью'
    },
    {
      id: 3,
      image: '/images/blog-traveler.png',
      alt: 'Девушка с рюкзаком идет по узкой старинной улице европейского города',
      title: 'Как подготовиться к путешествию в одиночку? ',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
      date: '01/04/2023',
      link: '',
      linkText: 'читать статью'
    },
    {
      id: 4,
      image: '/images/blog-india.png',
      alt: 'Белокаменный мавзолей Тадж-Махал в Индии с отражением в воде',
      title: 'Индия ... летим?',
      text: 'Для современного мира базовый.',
      date: '01/04/2023',
      link: '',
      linkText: 'читать статью'
    }
  ];

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

    // setTimeout(() => {
    // this.isLoading = false;
    // }, 2000);

  }

  // 15. п 2.1. Метод проверки цвета на принадлежность к основным

  checkColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  // 15. п 3. Метод сохранения даты последнего визита в LocalStorage

  private saveLastVisit(): void {
    const currentDate = new Date().toISOString();
    this.localStorageService.set('lastVisit', currentDate);
  }

  // 15. п 4. Метод сохранения количества визитов в LocalStorage

  private saveVisitCount(): void {
    const currentVisits = this.localStorageService.get<number>('visitCount') || 0;
    this.localStorageService.set('visitCount', (currentVisits + 1));
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

  showMessage(type: MessageType, text: string): void {
    // this.messageService.addMessage(type, text);
    if (type === MessageType.Success) {
      this.messageService.showSuccess(text)
    }
    if (type === MessageType.Error) {
      this.messageService.showError(text)
    }
    if (type === MessageType.Info) {
      this.messageService.showInfo(text)
    }
    if (type === MessageType.Warn) {
      this.messageService.showWarn(text)
    }
  }
}
