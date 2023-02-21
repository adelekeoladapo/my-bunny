import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormSelectComponent} from "./form-select/form-select.component";
import {FormInputComponent} from "./form-input/form-input.component";
import {FormCheckboxComponent} from "./form-checkbox/form-checkbox.component";
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    ButtonComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    ButtonComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
