import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html'
})
export class FormCheckboxComponent {

  @Input()
  id: string = '';

  @Input()
  title: string = '';

  @Input()
  control: FormControl = new FormControl();

}
