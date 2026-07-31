// 19. п 3.2. Интерфейс объекта сообщения

import { MessageType } from "../enums/MessageType";

export interface IMessage {
  id: number;
  type: MessageType;
  text: string;
}