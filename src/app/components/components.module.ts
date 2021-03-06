import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MenuComponent } from './menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainHeaderComponent,
    MenuComponent
  ],
  exports: [
    MainHeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
