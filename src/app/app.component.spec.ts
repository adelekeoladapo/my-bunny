import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should have a nav bar', () => {
    // given
    const navbar = fixture.nativeElement.querySelector('#navbar');

    // then
    expect(navbar).toBeTruthy();
  });

  it(`should have brand name 'myBunny'`, () => {
    // given
    const brand = fixture.nativeElement.querySelector('#brand');

    // then
    expect(brand.textContent).toEqual('myBunny');
  });

  it('should have a footer', () => {
    // given
    const footer = fixture.nativeElement.querySelector('#footer');

    // then
    expect(footer).toBeTruthy();
  });

});
