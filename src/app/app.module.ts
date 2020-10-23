import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { ErrandsComponent } from './errands/errands.component';
import { ErrandDetailsComponent } from './errands/errand-details/errand-details.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ErrandCreateComponent } from './errands/errand-create/errand-create.component';

@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    ErrandsComponent,
    ErrandDetailsComponent,
    Error404Component,
    HomeComponent,
    NavMenuComponent,
    ErrandCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'errands', component: ErrandsComponent }
      // add redirection
      //  { path: 'error404', component: Error404Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
