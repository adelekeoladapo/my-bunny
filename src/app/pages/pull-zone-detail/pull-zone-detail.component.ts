import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PullZone} from "../../models/pull-zone.model";
import {TierType} from "../../models/tier-type.enum";
import {Option} from "../../shared/form-select/Option";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-pull-zone-detail',
  templateUrl: './pull-zone-detail.component.html'
})
export class PullZoneDetailComponent implements OnInit {

  pullZone: PullZone = {} as PullZone;
  tierType = TierType;

  pullZones: PullZone[] = [];
  pullZoneOptions: Option[] = [];

  control: FormControl = new FormControl();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pullZones = this.route.snapshot.data['pullZones'];
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.initPullZoneOptions();
    this.control.valueChanges.subscribe(data => this.onPullZoneChange(data));
    this.control.setValue(id);
  }

  private initPullZoneOptions(): void {
    this.pullZoneOptions = this.pullZones.map(p => ({name: p.Name, value: p.Id, selected: p.Id === this.pullZone.Id}));
  }

  onPullZoneChange(id: number): void {
    this.pullZone = this.findPullZoneById(id);
  }

  private findPullZoneById(id: number): PullZone {
    return this.pullZones.filter(p => p.Id === id)[0];
  }



}
