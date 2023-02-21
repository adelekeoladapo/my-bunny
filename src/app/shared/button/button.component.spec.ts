import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {EventEmitter} from "@angular/core";

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show title when not loading', () => {
    // given
    component.title = 'Button Title';
    const button = fixture.nativeElement.querySelector('button');

    // when
    component.loading = false;
    fixture.detectChanges();

    // then
    expect(button.textContent).toEqual(' Button Title');
  });

  it('should show loading when button is loading', () => {
    // given
    const button = fixture.nativeElement.querySelector('button');

    // when
    component.loading = true;
    fixture.detectChanges();

    // then
    expect(button.textContent).toEqual(' Loading...');
  });

  it('should hide icon when icon is false', () => {
    // given
    const icon = fixture.nativeElement.querySelector('#button-icon');

    // when
    component.icon = '';
    fixture.detectChanges();
    // then
    expect(icon).toBeFalsy();
  });

  it('should be disabled when loading', () => {
    // given
    const button = fixture.nativeElement.querySelector('button');

    // when
    component.loading = true;
    fixture.detectChanges();

    // then
    expect(button.disabled).toBeTrue();

  });

  it('should emit event when clicked', () => {
    // given
    const button = fixture.nativeElement.querySelector('button');
    spyOn(component.buttonClick, 'emit');

    // when
    button.click();

    // then
    expect(component.buttonClick.emit).toHaveBeenCalled();

  });

});
