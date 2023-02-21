import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  error: string = '';

  constructor(private router: Router) {
    this.error = this.router.getCurrentNavigation()?.extras?.state?.['message'];
  }

}
