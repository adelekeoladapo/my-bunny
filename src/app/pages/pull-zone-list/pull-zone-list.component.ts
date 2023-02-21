import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PullZone} from "../../models/pull-zone.model";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {TierType} from "../../models/tier-type.enum";
import {RouterService} from "../../service/router/router.service";

@Component({
  selector: 'app-pull-zone-list',
  templateUrl: './pull-zone-list.component.html'
})
export class PullZoneListComponent implements OnInit, OnDestroy {

  pullZones: PullZone[] = [];

  filter: FormControl = new FormControl();
  filteredPullZones: PullZone[] = [];
  filtered: boolean = false;

  filterSubscription: Subscription = new Subscription();

  tierType = TierType;

  constructor(private routerService: RouterService, private route: ActivatedRoute) {
    let data = this.route.snapshot.data;
    if (!data) {
      // TODO: route to error page
    }
    this.pullZones = data['pullZones'];
  }

  ngOnInit(): void {
    this.filterSubscriptionInit();
  }

  private filterPullZones(word: string): void {
    this.filtered = true;
    this.filteredPullZones = this.pullZones.filter(p => p.Name.toLocaleLowerCase().includes(word.toLocaleLowerCase()) || p.OriginUrl.toLocaleLowerCase().includes(word.toLocaleLowerCase()));
  }

  private filterSubscriptionInit(): void {
    this.filterSubscription = this.filter.valueChanges.subscribe(data => {
      this.filterPullZones(data.trim());
    });
  }

  routeToDetailPage(id: number): void {
    this.routerService.routeToDetailPage(id);
  }

  routeToNewPullZonePage(): void {
    this.routerService.routeToNewPullZonePage();
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }


}
