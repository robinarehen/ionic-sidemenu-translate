import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConstantsClass } from './classes/constants.class';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //Los lenguajes se defien en la ruta /assets/i18n/
  private currentLanguages = ['en', 'es'];
  private separator = '-';

  menuContentId: string = 'main-content';

  constructor(private translateService: TranslateService) {
    this.setLanguage();
  }

  /**
   * Se implementa el cambio de lenguaje dinamico
   * 1. Se consulta si se tiene un lenguaje definido en el storage
   * 2. Se recupera el lenguaje del navegador o el primer lenguaje del listado existente
   * 3. Se valida que el lenguaje del navegador exista entre los lenguajes existentes
   * 4. Se configura el lenguaje a mostrar
   */
  setLanguage() {
    let language = localStorage.getItem(ConstantsClass.LANGAUGE);
    const index = 0;
    if (language == null) {
      language = window.navigator.language || this.currentLanguages[index];
      if (language.includes(this.separator)) {
        language = language.split(this.separator)[index];
      }
    }
    language = language.toLocaleLowerCase();
    if (!this.currentLanguages.includes(language)) {
      language = this.currentLanguages[index];
    }
    this.translateService.setDefaultLang(language);
  }

}
