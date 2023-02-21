import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPullZoneComponent } from './new-pull-zone.component';
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {NotificationService} from "../../service/notification/notification.service";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PullZoneForm} from "./pull-zone.form";
import {of} from "rxjs";
import {PullZone} from "../../models/pull-zone.model";

describe('NewPullZoneComponent', () => {
  let component: NewPullZoneComponent;
  let fixture: ComponentFixture<NewPullZoneComponent>;
  let pullZoneServiceSpyObj: jasmine.SpyObj<PullZoneService>;
  let notificationServiceSpyObj: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    pullZoneServiceSpyObj = jasmine.createSpyObj('PullZoneService', ['createPullZone']);
    pullZoneServiceSpyObj.createPullZone.and.returnValue(of());
    notificationServiceSpyObj = jasmine.createSpyObj('NotificationService', ['showSuccess', 'showError']);

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ReactiveFormsModule,
      ],
      declarations: [ NewPullZoneComponent ],
      providers: [
        {provide: PullZoneService, useValue: pullZoneServiceSpyObj},
        {provide: NotificationService, useValue: notificationServiceSpyObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPullZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title', () => {
    // then
    expect(fixture.nativeElement.querySelector('.page-title').textContent).toEqual('New Pull Zone');
  });

  it('should have breadcrumb', () => {
    // given
    const breadcrumbFixture = fixture.nativeElement.querySelector('app-breadcrumb');

    // then
    expect(breadcrumbFixture).toBeTruthy();
  });

  it('should have new pull zone form', () => {
    // given
    const form = fixture.nativeElement.querySelector('#new-pull-zone-form');

    // then
    expect(form).toBeTruthy();
  });

  it('should have a name field', () => {
    // given
    const field = fixture.nativeElement.querySelector('#new-pull-zone-form input#name');

    // then
    expect(field).toBeTruthy();
  });

  it('should have a origin url field', () => {
    // given
    const field = fixture.nativeElement.querySelector('#new-pull-zone-form input#origin-url');

    // then
    expect(field).toBeTruthy();
  });

  it('should have a tier type select field', () => {
    // given
    const field = fixture.nativeElement.querySelector('#new-pull-zone-form select#type');

    // then
    expect(field).toBeTruthy();
  });

  it('should have tier type with two select options, Standard and Volume, and an empty first one', () => {
    // given
    const selectOptions = fixture.nativeElement.querySelectorAll('#new-pull-zone-form select#type option');

    // then
    expect(selectOptions.length).toBe(3);
    expect(selectOptions[0].textContent).toEqual('');
    expect(selectOptions[1].textContent).toEqual('Standard');
    expect(selectOptions[2].textContent).toEqual('Volume');

  })

  it('should have four checkboxes to select zones', () => {
    // given
    const checkboxFields = fixture.nativeElement.querySelectorAll('#new-pull-zone-form input[type="checkbox"]');

    // then
    expect(checkboxFields.length).toBe(4);
    expect(checkboxFields[0].id).toEqual('enable-geo-zone-us');
    expect(checkboxFields[1].id).toEqual('enable-geo-zone-eu');
    expect(checkboxFields[2].id).toEqual('enable-geo-zone-sa');
    expect(checkboxFields[3].id).toEqual('enable-geo-zone-af');
  });

  it('should have a button to save a pull zone', () => {
    // given
    const button = fixture.nativeElement.querySelector('#new-pull-zone-form #button-save-pull-zone');

    // then
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toEqual('Save Pull Zone');
  });

  it('should disable submit button when form is invalid', () => {
    // given
    const button = fixture.nativeElement.querySelector('#new-pull-zone-form #button-save-pull-zone');

    // then
    expect(button.disabled).toBeTrue();
  });

  it('should activate submit button when form required fields are correctly filled', () => {
    // given
    const button = fixture.nativeElement.querySelector('#new-pull-zone-form #button-save-pull-zone');
    component.pullZoneForm = mockPullZoneForm();

    // when
    fixture.detectChanges();

    // then
    expect(button.disabled).toBeFalse();
  });

  it('should send new pull zone data to backend when form is correctly filled', () => {
    // given
    component.pullZoneForm = mockPullZoneForm();

    // when
    component.submit();

    // then
    expect(pullZoneServiceSpyObj.createPullZone).toHaveBeenCalled();
  });

  it('should show success notification when create pull zone service is successful', () => {
    // given
    component.pullZoneForm = mockPullZoneForm();
    pullZoneServiceSpyObj.createPullZone.and.returnValue(of({Id: 100, Name: 'test name'} as PullZone));
    notificationServiceSpyObj.showSuccess.and.callThrough();

    // when
    component.submit();

    // then
    expect(pullZoneServiceSpyObj.createPullZone).toHaveBeenCalled();
    expect(notificationServiceSpyObj.showSuccess).toHaveBeenCalled();
  });

  function mockPullZoneForm(): PullZoneForm {
    let form: PullZoneForm = new PullZoneForm();
    form.name.setValue("test name");
    form.originUrl.setValue("https://testwebsite.com");
    form.type.setValue(1);
    return form;
  }

});
