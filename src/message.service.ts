// 19. п 3.3. Сервис управления сообщениями

import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { MessageType } from './enums/MessageType';

@Injectable()

export class MessageService {
  private items: IMessage[] = [];

  private currentId = 1;

  get messages(): IMessage[] {
    return this.items;
  }

  // 19. п 3.4. Метод добавления нового сообщения в список с авто-скрытием

  addMessage(type: MessageType, text: string): void {
    const newMessage: IMessage = {
      id: this.currentId++,
      type: type,
      text: text,
    };

    this.items.unshift(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);

  }

  // 19. п 3.5. Метод закрытия (удаления) сообщения по его ID

  closeMessage(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

}
