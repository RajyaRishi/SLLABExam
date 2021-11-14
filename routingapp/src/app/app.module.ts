import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexComponent } from './spacex/spacex.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    TododetailsComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
