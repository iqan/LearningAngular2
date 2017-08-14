import { Component } from '@angular/core';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    employeeId: number = 123;
    firstName: string = 'John';
    lastName: string = 'Doe';
    designation: string = 'Software Engineer';
    showDetails: boolean = false;
    buttonContent: string = "More";
    name1: string = 'John';

    toggleDetails(): void {
        if (this.showDetails) {
            this.showDetails = !this.showDetails;
            this.buttonContent = "More";
        } else {
            this.showDetails = true;
            this.buttonContent = "Less";
        }
    }
}