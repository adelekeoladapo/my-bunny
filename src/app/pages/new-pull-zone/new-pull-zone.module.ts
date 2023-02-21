import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewPullZoneRoutingModule} from './new-pull-zone-routing.module';
import {NewPullZoneComponent} from './new-pull-zone.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewPullZoneComponent
  ],
  imports: [
    CommonModule,
    NewPullZoneRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class NewPullZoneModule {}
