import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './shared/material.module';

import{StoreModule} from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component'
import { counterReducer } from './counter.reducer';




@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MyCounterComponent
  ],
  imports: [
  BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
      
    StoreModule.forRoot({count : counterReducer }),

    // EffectsModule.forRoot([]),

    // StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 