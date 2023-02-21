import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PullZoneResolver} from "./resolver/pull-zone/pull-zone.resolver";
import {PullZoneListResolver} from "./resolver/pull-zone-list/pull-zone-list.resolver";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pull-zones',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'pull-zones',
    loadChildren: () => import('./pages/pull-zone-list/pull-zone-list.module').then(m => m.PullZoneListModule),
    resolve: {pullZones: PullZoneListResolver}
  },
  {
    path: 'pull-zones/new',
    loadChildren: () => import('./pages/new-pull-zone/new-pull-zone-routing.module').then(m => m.NewPullZoneRoutingModule)
  },
  {
    path: 'pull-zones/:id',
    loadChildren: () => import('./pages/pull-zone-detail/pull-zone-detail.module').then(m => m.PullZoneDetailModule),
    resolve: {pullZone: PullZoneResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
