import { Component, OnInit } from '@angular/core';
import { PageMenuInterface } from '../../interfaces/page-menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pagesMenu: PageMenuInterface[] = [
    {title: 'Home', icon:'home', url: '/pages/home'},
    {title: 'Agenda', icon:'calendar', url: '/pages/agenda'}
  ];

  constructor() { }

  ngOnInit() { }

}
