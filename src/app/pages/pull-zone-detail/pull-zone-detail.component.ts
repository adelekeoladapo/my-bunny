import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PullZone} from "../../models/pull-zone.model";
import {TierType} from "../../models/tier-type.enum";
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {Option} from "../../shared/form-select/Option";

@Component({
  selector: 'app-pull-zone-detail',
  templateUrl: './pull-zone-detail.component.html'
})
export class PullZoneDetailComponent implements OnInit {

  pullZone: PullZone;
  tierType = TierType;

  pullZones: PullZone[] = [];

  constructor(private route: ActivatedRoute, private pullZoneService: PullZoneService) {
    let data = this.route.snapshot.data;
    if (!data) {
      // TODO: route to error page
    }
    this.pullZone = data['pullZone'];
  }

  ngOnInit(): void {
    this.setPullZones();
  }

  private setPullZones(): void {
    this.pullZoneService.getPullZones().subscribe(data => this.pullZones = data);
  }

  get pullZoneOptions(): Option[] {
    // TODO: Fix the bug here
    return this.pullZones.map(p => ({name: p.Name, value: p.Id, selected: p.Id === this.pullZone.Id}));
  }

  onPullZoneChange(id: number): void {
    this.pullZone = this.findPullZoneById(id);
  }

  private findPullZoneById(id: number): PullZone {
    return this.pullZones.filter(p => p.Id === id)[0];
  }



}
