import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealsFormRoutingModule } from './meals-form-routing.module';
import { MealsFormComponent } from './meals-form.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MealsFormRoutingModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [MealsFormComponent]
})
export class MealsFormModule { }
