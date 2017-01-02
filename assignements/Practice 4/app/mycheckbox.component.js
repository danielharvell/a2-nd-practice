"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MyCheckboxComponent = (function () {
    function MyCheckboxComponent() {
        this.itemChecked = false;
        this.itemCheckedChange = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
    }
    MyCheckboxComponent.prototype.ngOnInit = function () { };
    MyCheckboxComponent.prototype.clickHandler = function () {
        // if(!this.itemChecked){
        //     this.itemChecked = false;
        // }else{
        //     this.itemChecked = true;
        // }
        this.itemChecked = !this.itemChecked;
        this.change.emit();
        this.itemCheckedChange.emit(this.itemChecked);
    };
    return MyCheckboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MyCheckboxComponent.prototype, "itemChecked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MyCheckboxComponent.prototype, "itemCheckedChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MyCheckboxComponent.prototype, "change", void 0);
MyCheckboxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-checkbox',
        template: "\n        <input type=\"checkbox\" [(ngModel)]=\"itemChecked\"/>\n        <label (click)=\"clickHandler()\">\n            <ng-content *ngIf=\"itemChecked\"></ng-content>\n            <div [class.checked]=\"itemChecked\"></div>\n        </label>",
        styles: [
            "input[type='checkbox']{ width: 0; margin: 0;}",
            "label{margin: 4px;}",
            "div{ background-color: #fff;height: 13px; width: 13px; display: inline-block; border: 1px solid black;}",
            "div.checked{ background: url('../app/images/checkmark.png') no-repeat top left;background-size: 13px}"
        ]
    }),
    __metadata("design:paramtypes", [])
], MyCheckboxComponent);
exports.MyCheckboxComponent = MyCheckboxComponent;
//# sourceMappingURL=mycheckbox.component.js.map