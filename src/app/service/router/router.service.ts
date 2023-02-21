import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  public routeToDetailPage(id: number): void {
    this.router.navigate(['pull-zones', id]);
  }

  public routeToNewPullZonePage(): void {
    this.router.navigate(['pull-zones', 'new']);
  }

  public routeToErrorPage(message?: string): void {
    this.router.navigate(['error'], {state: {message}})
  }

}
