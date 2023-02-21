import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PullZoneDetailComponent} from "./pull-zone-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PullZoneDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PullZoneDetailRoutingModule { }
