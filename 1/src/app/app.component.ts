import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
    pageHeader: string = 'Employee Data';
    detailHeader: string = 'Employee Details';
    listHeader: string = 'Employee list:';
}
