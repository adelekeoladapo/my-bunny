import {ComponentFixture, TestBed} from '@angular/core/testing';

import { PullZoneDetailComponent } from './pull-zone-detail.component';
import {ActivatedRoute} from "@angular/router";
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {PullZone} from "../../models/pull-zone.model";
import {SharedModule} from "../../shared/shared.module";
import {of} from "rxjs";
import {BytesPipe} from "./pipe/bytes.pipe";

describe('PullZoneDetailComponent', () => {
  let component: PullZoneDetailComponent;
  let fixture: ComponentFixture<PullZoneDetailComponent>;
  let pullZoneServiceSpyObj: jasmine.SpyObj<PullZoneService>;

  beforeEach(async () => {

    pullZoneServiceSpyObj = jasmine.createSpyObj(PullZoneService, ['getPullZones']);
    pullZoneServiceSpyObj.getPullZones.and.returnValue(of(aPullZoneListMockResource()));

    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ PullZoneDetailComponent, BytesPipe],
      providers: [
        {provide: ActivatedRoute, useValue: {
            snapshot: {data: {pullZone: aPullZoneMockResource()}}
          }
        },
        {provide: PullZoneService, useValue: pullZoneServiceSpyObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title', () => {
    // then
    expect(fixture.nativeElement.querySelector('.page-title').textContent).toContain('Pull Zone Details');
  });

  it('should show pull zone name as part of title', () => {
    // given
    component.pullZone.Name = 'Sample pull zone';

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('.page-title').textContent).toContain('Sample pull zone');
  });

  it('should fetch all pull zones when page loads', () => {
    // given
    component.ngOnInit();

    // then
    expect(pullZoneServiceSpyObj.getPullZones).toHaveBeenCalled();
  });

  it('should have a combo box containing names of pull zones as options', () => {
    // given
    const options = fixture.nativeElement.querySelectorAll('#pull-zone-select > option');

    // when
    component.ngOnInit();

    // then
    expect(options.length).toBe(3);
    expect(options[0].textContent).toEqual('Zone 100');
    expect(options[1].textContent).toEqual('Zone 200');
    expect(options[2].textContent).toEqual('Zone 300');
  });

  function aPullZoneMockResource(): PullZone {
    return {Id: 200, Name: 'Zone 200', MonthlyBandwidthUsed: 50000} as PullZone;
  }

  function aPullZoneListMockResource(): PullZone[] {
    return [{Id: 100, Name: 'Zone 100'} as PullZone,
      {Id: 200, Name: 'Zone 200'} as PullZone,
      {Id: 300, Name: 'Zone 300'} as PullZone];
  }

});
