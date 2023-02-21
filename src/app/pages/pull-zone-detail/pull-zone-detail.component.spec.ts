import {ComponentFixture, TestBed} from '@angular/core/testing';

import { PullZoneDetailComponent } from './pull-zone-detail.component';
import {ActivatedRoute} from "@angular/router";
import {PullZone} from "../../models/pull-zone.model";
import {SharedModule} from "../../shared/shared.module";
import {BytesPipe} from "./pipe/bytes.pipe";

describe('PullZoneDetailComponent', () => {
  let component: PullZoneDetailComponent;
  let fixture: ComponentFixture<PullZoneDetailComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ PullZoneDetailComponent, BytesPipe],
      providers: [
        {provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {pullZones: aPullZoneListMockResource()},
              paramMap: {
                get: () => '100'
              }
            }
          }
        },
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
    expect(component.pullZones).toEqual(aPullZoneListMockResource());
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
