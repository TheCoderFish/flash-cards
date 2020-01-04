import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { FlashListComponent } from './flash-list/flash-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashComponent,
    FlashListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
