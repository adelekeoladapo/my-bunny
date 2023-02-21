import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PullZoneListRoutingModule } from './pull-zone-list-routing.module';
import { PullZoneListComponent } from './pull-zone-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    PullZoneListComponent
  ],
    imports: [
        CommonModule,
        PullZoneListRoutingModule,
        SharedModule
    ]
})
export class PullZoneListModule { }
