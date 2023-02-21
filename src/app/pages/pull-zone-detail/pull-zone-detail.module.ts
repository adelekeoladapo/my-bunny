import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PullZoneDetailRoutingModule } from './pull-zone-detail-routing.module';
import { PullZoneDetailComponent } from './pull-zone-detail.component';
import {SharedModule} from "../../shared/shared.module";
import { BytesPipe } from './pipe/bytes.pipe';


@NgModule({
  declarations: [
    PullZoneDetailComponent,
    BytesPipe
  ],
    imports: [
        CommonModule,
        PullZoneDetailRoutingModule,
        SharedModule
    ]
})
export class PullZoneDetailModule { }
