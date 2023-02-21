import { TestBed } from '@angular/core/testing';

import { PullZoneResolver } from './pull-zone.resolver';
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {of} from "rxjs";
import {PullZone} from "../../models/pull-zone.model";
import {ActivatedRouteSnapshot} from "@angular/router";

describe('PullZoneResolver', () => {
  let resolver: PullZoneResolver;
  let pullZoneServiceSpyObj: jasmine.SpyObj<PullZoneService>;

  beforeEach(() => {
    pullZoneServiceSpyObj = jasmine.createSpyObj('PullZoneService', ['getPullZone']);

    TestBed.configureTestingModule({
      providers: [
        PullZoneResolver,
        {provide: PullZoneService, useValue: pullZoneServiceSpyObj}
      ]
    });
    resolver = TestBed.inject(PullZoneResolver);
  });

  it('should call service and return a pull zone', () => {
    // given
    pullZoneServiceSpyObj.getPullZone.and.returnValue(of({Id: 100, Name: 'Test pull zone'} as PullZone));
    const route = new ActivatedRouteSnapshot();
    route.params = {id: 100};

    // when
    resolver.resolve(route).subscribe(data => {
      // then
      expect(pullZoneServiceSpyObj.getPullZone).toHaveBeenCalledWith(100);
      expect(data).toEqual({Id: 100, Name: 'Test pull zone'} as PullZone);
    });
  });
});
