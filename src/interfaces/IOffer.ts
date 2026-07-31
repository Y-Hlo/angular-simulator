// 16. п 1.3. Интерфейс для строгой типизации данных карточки предложения

import { MessageType } from "../enums/MessageType";

export interface IOffer {
  id: number;
  icon: string;
  alt: string;
  title: string;
  text: string;
}
