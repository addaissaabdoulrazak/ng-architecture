import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { MaterialModule } from '../shared/material.module';
import { UsersDisplayComponent } from './users-display/users-display.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersDisplayComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
