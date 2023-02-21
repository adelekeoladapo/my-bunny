import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {PullZone} from "../../models/pull-zone.model";

@Injectable({
  providedIn: 'root'
})
export class PullZoneListResolver implements Resolve<PullZone[]> {
  constructor(private pullZoneService: PullZoneService) {}

  resolve(): Observable<PullZone[]> {
    return this.pullZoneService.getPullZones();
  }
}
