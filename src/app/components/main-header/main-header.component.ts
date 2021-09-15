import { Component, Input, OnInit } from '@angular/core';
import { ConstantsClass } from '../../classes/constants.class';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  @Input() title: string = 'SWM Home';

  constructor() { }

  ngOnInit() {}

  changeLanguage(language: string) {
    localStorage.setItem(ConstantsClass.LANGAUGE, language);
    window.location.reload();
  }

}
