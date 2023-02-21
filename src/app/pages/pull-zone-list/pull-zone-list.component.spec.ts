import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullZoneListComponent } from './pull-zone-list.component';
import {RouterService} from "../../service/router/router.service";
import {ActivatedRoute} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {PullZone} from "../../models/pull-zone.model";

describe('PullZoneListComponent', () => {
  let component: PullZoneListComponent;
  let fixture: ComponentFixture<PullZoneListComponent>;
  let routerServiceSpyObj: jasmine.SpyObj<RouterService>;

  beforeEach(async () => {
    routerServiceSpyObj = jasmine.createSpyObj('RouterService', ['routeToNewPullZonePage', 'routeToDetailPage']);
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ PullZoneListComponent],
      providers: [
        {provide: RouterService, useValue: routerServiceSpyObj},
        {provide: ActivatedRoute, useValue: {
            snapshot: {data: {pullZones: aPullZoneListMockResource()}}
        }},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have breadcrumb', () => {
    // given
    const breadcrumbFixture = fixture.nativeElement.querySelector('app-breadcrumb');

    // then
    expect(breadcrumbFixture).toBeTruthy();
  });

  it('should have title', () => {
    // then
    expect(fixture.nativeElement.querySelector('.page-title').textContent).toEqual('List of Pull Zones');
  });

  it('should have add new button', () => {
    // given
    const button = fixture.nativeElement.querySelector('#add-new-button')

    // then
    expect(button.textContent).toEqual(' Add New');
  });

  it('should route to new pull zone page when add new button is clicked', () => {
    // given
    spyOn(component, 'routeToNewPullZonePage');
    const button = fixture.nativeElement.querySelector('#add-new-button');

    // when
    button.click();

    // then
    expect(component.routeToNewPullZonePage).toHaveBeenCalled();
  });

  it('should show table', () => {
    // given
    const table = fixture.nativeElement.querySelector('#pull-zone-table');

    // then
    expect(table).toBeTruthy();
  })

  it('should show filter', () => {
    //given
    const filter = fixture.nativeElement.querySelector('#input-filter');

    // then
    expect(filter).toBeTruthy();
  });

  it('should have a table with name, origin and tier columns', () => {
    // given
    const tableHeaders = fixture.nativeElement.querySelectorAll('#pull-zone-table > thead > tr > th');
    // then
    expect(tableHeaders.length).toBe(3);
    expect(tableHeaders[0].textContent).toEqual('Name');
    expect(tableHeaders[1].textContent).toEqual('Origin');
    expect(tableHeaders[2].textContent).toEqual('Tier');
  });

  it('should route to detail page when a pull zone is clicked', () => {
    // given
    spyOn(component, 'routeToDetailPage');
    component.pullZones[0] = {Id: 100, Name: 'Test pull zone'} as PullZone;
    const pullZoneTableRow = fixture.nativeElement.querySelectorAll('#pull-zone-table > tbody > tr')[0];

    // when
    pullZoneTableRow.click();

    // then
    expect(component.routeToDetailPage).toHaveBeenCalled();
  });

  describe('pull zones is empty', () => {

    beforeEach(async () => {
      component.pullZones = [];
      fixture.detectChanges();
    });

    it('should hide table when data is empty', () => {
      // given
      const table = fixture.nativeElement.querySelector('#pull-zone-table');

      // then
      expect(table).toBeFalsy();
    })

    it('should hide filter when data is empty', () => {
      //given
      const filter = fixture.nativeElement.querySelector('#input-filter');

      // then
      expect(filter).toBeFalsy();
    });




  });

  function aPullZoneListMockResource(): PullZone[] {
    return [{} as PullZone, {} as PullZone]
  }

});
