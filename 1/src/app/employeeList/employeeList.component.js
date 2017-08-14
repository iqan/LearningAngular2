"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employeeList = [
            { employeeId: 123, name: 'Name 1', designation: 'Designation 1' },
            { employeeId: 456, name: 'Name 2', designation: 'Designation 2' },
            { employeeId: 789, name: 'Name 3', designation: 'Designation 3' }
        ];
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employeeList',
            templateUrl: 'app/employeeList/employeeList.component.html',
            styleUrls: ['app/employeeList/employeeList.component.css']
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map