import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PullZone} from "../../models/pull-zone.model";

export class PullZoneForm extends FormGroup {

  constructor() {
    super({
      name: new FormControl('', [Validators.required]),
      originUrl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      type: new FormControl('', [Validators.required]),
      enableGeoZoneUS: new FormControl(false),
      enableGeoZoneEU: new FormControl(false),
      enableGeoZoneSA: new FormControl(false),
      enableGeoZoneAF: new FormControl(false),
    });
  }

  get name(): FormControl {
    return this.get('name') as FormControl;
  }

  get originUrl(): FormControl {
    return this.get('originUrl') as FormControl;
  }

  get type(): FormControl {
    return this.get('type') as FormControl;
  }

  get enableGeoZoneUS(): FormControl {
    return this.get('enableGeoZoneUS') as FormControl;
  }

  get enableGeoZoneEU(): FormControl {
    return this.get('enableGeoZoneEU') as FormControl;
  }

  get enableGeoZoneSA(): FormControl {
    return this.get('enableGeoZoneSA') as FormControl;
  }

  get enableGeoZoneAF(): FormControl {
    return this.get('enableGeoZoneAF') as FormControl;
  }

  public toResource(): PullZone {
    return {
      Name: this.name.value,
      OriginUrl: this.originUrl.value,
      Type: this.type.value,
      EnableGeoZoneUS: this.enableGeoZoneUS.value,
      EnableGeoZoneEU: this.enableGeoZoneEU.value,
      EnableGeoZoneSA: this.enableGeoZoneSA.value,
      EnableGeoZoneAF: this.enableGeoZoneAF.value
    } as PullZone;
  }

}
