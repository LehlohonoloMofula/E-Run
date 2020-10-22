import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrandsComponent } from './errands/errands.component';
import { ErrandDetailsComponent } from './errands/errand-details/errand-details.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrandsComponent,
    ErrandDetailsComponent,
    AccountComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
