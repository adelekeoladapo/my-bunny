import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import SpyObj = jasmine.SpyObj;

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let routerSpyObj: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [RouterTestingModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    routerSpyObj = TestBed.inject(Router) as SpyObj<Router>;
    spyOn(routerSpyObj, 'getCurrentNavigation').and.returnValue({extras:{ state:{ message: 'test error message'}}} as any);
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set error message from state', () => {
    // then
    expect(component.error).toBe('test error message');
  });

  it('should show error message', () => {
    // given
    const errorContainer = fixture.nativeElement.querySelector('#error-message');

    // then
    expect(errorContainer.textContent).toEqual('test error message');
  });

  it(`should have a 'Go to Homepage' button`, () => {
    // given
    const button = fixture.nativeElement.querySelector('#home-button');

    // then
    expect(button).toBeTruthy();
  })

});

describe('no error from state', () => {

  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let routerSpyObj: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [RouterTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    routerSpyObj = TestBed.inject(Router) as SpyObj<Router>;
    spyOn(routerSpyObj, 'getCurrentNavigation').and.returnValue(null);
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should show default error message 'Sorry, an error occurred' when there's no error from state`, () => {
    // given
    const errorContainer = fixture.nativeElement.querySelector('#error-message');

    // then
    expect(errorContainer.textContent).toEqual('Sorry, an error occurred.');
  });

});
