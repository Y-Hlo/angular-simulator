import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// 20. п 4.1. Реализация массива объектов с навигацией в компоненте header

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navigation = [
    {label: 'Главная', link: ''},
    {label: 'Пользователи', link: 'users'}
  ]
}