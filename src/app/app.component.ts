import { Collection } from '../collection';
import { Color } from '../enums/Color';
import { IOffer } from '../interfaces/IOffer';
import { IBlog } from '../interfaces/IBlog';
import './training';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageType } from '../enums/MessageType';
import { MessageService } from '../message.service';
import { LocalStorageService } from '../local-storage.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, HeaderComponent, FooterComponent, MessageComponent],
  providers: [MessageService, LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})

export class AppComponent {

  isLoading: boolean = true;

  constructor() {

    // 16. п 8.1. Искусственная задержка для имитации загрузки страницы

    setTimeout(() => {
    this.isLoading = false;
    }, 2000);
  }
}