
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
     BrowserModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

