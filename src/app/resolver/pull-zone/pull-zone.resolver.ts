import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PullZone} from "../../models/pull-zone.model";
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";

@Injectable({
  providedIn: 'root'
})
export class PullZoneResolver implements Resolve<PullZone> {

  constructor(private pullZoneService: PullZoneService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PullZone> {
    return this.pullZoneService.getPullZone(Number(route.paramMap.get('id')));
  }
}
