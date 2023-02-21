import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPullZoneComponent} from "./new-pull-zone.component";

const routes: Routes = [
  {
    path: '',
    component: NewPullZoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPullZoneRoutingModule { }
