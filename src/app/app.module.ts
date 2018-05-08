import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './ts/app.component';
import { UsersListComponent } from './ts/users-list.component';
import { ModalComponent } from './ts/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
