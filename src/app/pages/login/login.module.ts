import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
// import {ButtonComponent} from '../../components/button/button.component'
import {ModuleModule} from '../../components/module/module.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ModuleModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
