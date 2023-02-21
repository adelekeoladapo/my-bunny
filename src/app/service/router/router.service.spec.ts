import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import {Router} from "@angular/router";

describe('RouterService', () => {
  let service: RouterService;
  let routerSpyObj: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerSpyObj}
      ]
    });
    service = TestBed.inject(RouterService);
  });

  it('should route to pull zone detail page', () => {
    // given
    const id = 100;

    // when
    service.routeToDetailPage(id);

    // then
    expect(routerSpyObj.navigate).toHaveBeenCalledWith(['pull-zones', id]);
  });

  it('should route to new pull zone page', () => {
    // when
    service.routeToNewPullZonePage();

    // then
    expect(routerSpyObj.navigate).toHaveBeenCalledWith(['pull-zones', 'new'])
  });

  it('should route to error page', () => {
    // given
    const message = 'Error message';

    // when
    service.routeToErrorPage(message);

    // then
    expect(routerSpyObj.navigate).toHaveBeenCalledWith(['error'], {state: {message: message}});
  });

});
