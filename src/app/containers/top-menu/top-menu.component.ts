import { Component, OnInit } from '@angular/core';
import { MenuLinkInterface } from 'src/app/core/models/menu-link.interface';

@Component({
  selector: 'erg-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  menuLinks: MenuLinkInterface[] = [
    {
      name: 'Главная',
      link: 'home',
    },
    {
      name: 'Поставщики',
      link: 'suppliers',
    },
    {
      name: 'ГПЗ',
      link: 'gpz',
    },
    {
      name: 'Спецификации',
      link: 'specifications',
    },
    {
      name: 'Конкурсы',
      link: 'contests',
    },
    {
      name: 'Договоры',
      link: 'Orders',
    },
    {
      name: 'Цены',
      link: 'Price',
    },
    {
      name: 'Справочники',
      link: 'dictionary',
    },
    {
      name: 'Администрирование',
      link: 'administration',
    },
    {
      name: 'О программе',
      link: 'about',
    },
  ]

}