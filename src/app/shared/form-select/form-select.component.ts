import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from "./Option";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html'
})
export class FormSelectComponent {

  @Input()
  title: string = '';

  @Input()
  id: string = '';

  @Input()
  options: Option[] = [];

  @Input()
  floatingInput: boolean = false;

  @Input()
  addEmptyOption: boolean = false;

  @Input()
  control: FormControl = new FormControl();

  @Output()
  changeEvent: EventEmitter<any> = new EventEmitter<any>();

  onChange(data: any):void {
    this.changeEvent.emit(data);
  }

}
