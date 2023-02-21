import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import {ToastrService} from "ngx-toastr";

describe('NotificationService', () => {
  let service: NotificationService;
  let toastrServiceSpyObj: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    toastrServiceSpyObj = jasmine.createSpyObj('ToastrService', ['info', 'error', 'success']);
    TestBed.configureTestingModule({
      providers: [
        {provide: ToastrService, useValue: toastrServiceSpyObj}
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should show success message', () => {
    // given
    const title = 'Success';
    const message = 'success message';

    // when
    service.showSuccess(title, message);

    // then
    expect(toastrServiceSpyObj.success).toHaveBeenCalledWith(title, message);
  });

  it('should show info message', () => {
    // given
    const title = 'Info';
    const message = 'info message';

    // when
    service.showInfo(title, message);

    // then
    expect(toastrServiceSpyObj.info).toHaveBeenCalledWith(title, message);
  });

  it('should show error message', () => {
    // given
    const title = 'Error';
    const message = 'error message';

    // when
    service.showError(title, message);

    // then
    expect(toastrServiceSpyObj.error).toHaveBeenCalledWith(title, message);
  });


});
