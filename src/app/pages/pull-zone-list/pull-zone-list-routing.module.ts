import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PullZoneListComponent} from "./pull-zone-list.component";

const routes: Routes = [
  {
    path: '',
    component: PullZoneListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PullZoneListRoutingModule { }
