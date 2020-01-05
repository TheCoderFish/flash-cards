import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { FlashListComponent } from './flash-list/flash-list.component';
import { FlashFormComponent } from './flash-form/flash-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashComponent,
    FlashListComponent,
    FlashFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
