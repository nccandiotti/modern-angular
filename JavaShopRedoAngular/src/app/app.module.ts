import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/menu/modal-form/modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MenuComponent,
    OrderFormComponent,
    ModalFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
