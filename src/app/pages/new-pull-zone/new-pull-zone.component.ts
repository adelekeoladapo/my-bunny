import {Component} from '@angular/core';
import {Option} from "../../shared/form-select/Option";
import {PullZoneForm} from "./pull-zone.form";
import {PullZoneService} from "../../service/pull-zone/pull-zone.service";
import {TierType} from "../../models/tier-type.enum";
import {NotificationService} from "../../service/notification/notification.service";

@Component({
  selector: 'app-new-pull-zone',
  templateUrl: './new-pull-zone.component.html'
})
export class NewPullZoneComponent {

  pullZoneForm: PullZoneForm = new PullZoneForm();
  submitButtonLoading: boolean = false;

  constructor(private service: PullZoneService, private notificationService: NotificationService) {}

  submit(): void {
    if (!this.pullZoneForm.valid) {
      this.pullZoneForm.markAllAsTouched();
      return
    }
    this.submitButtonLoading = true;
    this.service.createPullZone(this.pullZoneForm.toResource()).subscribe(
      response => {
        this.notificationService.showSuccess(`${response.Name} was created`, 'Successful');
        this.pullZoneForm.reset();
        this.submitButtonLoading = false;
      },
      error => {
        this.notificationService.showError(error.error.Message, "Failed");
        this.submitButtonLoading = false;
      }
    );
  }

  get pullZoneTypeOptions(): Option[] {
    let options: Option[] = [];
    const keys = Object.keys(TierType).filter(key => isNaN(Number(key)));
    const values = Object.values(TierType).filter(value => !isNaN(Number(value)));
    for (let i = 0; i < keys.length; i++) {
      options.push({name: keys[i], value: values[i]} as Option)
    }
    return options;
  }



}
