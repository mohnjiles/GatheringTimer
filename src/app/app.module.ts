import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectableService } from './collectable/collectable.service';
import { EorzeaTimeComponent } from './eorzea-time/eorzea-time.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EorzeaTimeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CollectableService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
