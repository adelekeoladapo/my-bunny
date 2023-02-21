import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html'
})
export class FormInputComponent {

  @Input()
  title: string = '';

  @Input()
  id: string = '';

  @Input()
  type: string = 'text';

  @Input()
  placeholder: string = '';

  @Input()
  floatingInput: boolean = false;

  @Input()
  control: FormControl = new FormControl();

}
