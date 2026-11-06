// 20. п 3.1. Создание message компонента

import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [TitleCasePipe, NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  protected messageService = inject(MessageService);
}
