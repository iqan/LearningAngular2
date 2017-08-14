import { Component } from '@angular/core';

@Component({
    selector: 'employeeList',
    templateUrl: 'app/employeeList/employeeList.component.html',
    styleUrls: ['app/employeeList/employeeList.component.css']
})

export class EmployeeListComponent {
    employeeList: any[];

    constructor() {
        this.employeeList = [
            { employeeId: 123, name: 'Name 1', designation: 'Designation 1' },
            { employeeId: 456, name: 'Name 2', designation: 'Designation 2' },
            { employeeId: 789, name: 'Name 3', designation: 'Designation 3' }
        ];
    }

    refreshList() {
        this.employeeList = [
            { employeeId: 123, name: 'Name 1', designation: 'Designation 1' },
            { employeeId: 456, name: 'Name 2', designation: 'Designation 2' },
            { employeeId: 789, name: 'Name 3', designation: 'Designation 3' },
            { employeeId: 654, name: 'Name 4', designation: 'Designation 4' },
            { employeeId: 987, name: 'Name 5', designation: 'Designation 5' }
        ];
    }

    trackById(index:number, employee:any): number {
        return employee.employeeId;
    }
}