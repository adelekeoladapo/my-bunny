import { TestBed } from '@angular/core/testing';

import { PullZoneListResolver } from './pull-zone-list.resolver';
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {PullZone} from "../../models/pull-zone.model";
import {of} from "rxjs";

describe('PullZoneListResolver', () => {
  let resolver: PullZoneListResolver;
  let pullZoneServiceSpyObj: jasmine.SpyObj<PullZoneService>;

  beforeEach(() => {
    pullZoneServiceSpyObj = jasmine.createSpyObj('PullZoneService', ['getPullZones']);

    TestBed.configureTestingModule({
      providers: [
        PullZoneListResolver,
        {provide: PullZoneService, useValue: pullZoneServiceSpyObj}
      ]
    });
    resolver = TestBed.inject(PullZoneListResolver);
  });

  it('should call service and get list of pull zones', () => {
    // given
    pullZoneServiceSpyObj.getPullZones.and.returnValue(of([
      {Id: 100, Name: 'zone 1'} as PullZone,
      {Id: 200, Name: 'zone 2'} as PullZone,
    ]));

    // when
    resolver.resolve().subscribe(data => {
      // then
      expect(pullZoneServiceSpyObj.getPullZones).toHaveBeenCalled();
      expect(data.length).toBe(2);
      expect(data[0]).toEqual({Id: 100, Name: 'zone 1'} as PullZone);
      expect(data[1]).toEqual({Id: 200, Name: 'zone 2'} as PullZone);
    });

    expect(resolver).toBeTruthy();
  });
});
