// 19. п 4.1. Cервис для локального хранилища

import { Injectable } from "@angular/core";


@Injectable()

export class LocalStorageService {

  // 19. п 4.2. Метод установки значения в localStorage

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // 19. п 4.3. Метод получения значения из хранилища

  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  // 19. п 4.4. Метод очистки определенного элемента хранилища

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  // 19. п 4.5. Метод очистки всего хранилища

  clear(): void {
    localStorage.clear();
  }
}