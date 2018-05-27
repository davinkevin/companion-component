import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'other', component: OtherComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
