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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var validate_service_1 = require("./validate.service");
var data_service_1 = require("./data.service");
var AppComponent = (function () {
    function AppComponent(valid, http, data) {
        this.valid = valid;
        this.http = http;
        this.data = data;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data.getRow();
    };
    AppComponent.prototype.selectRow = function (info) {
        if (info.selected) {
            this.data.selectedRow = info;
        }
        else {
            this.data.selectedRow = null;
        }
    };
    AppComponent.prototype.docRename = function (row) {
        var newName = prompt("Rename " + row.standardAttributes.name + " to:", row.standardAttributes.name);
        try {
            if (this.valid.documentName(newName)) {
                row.standardAttributes.name = newName;
            }
        }
        catch (err) {
            alert(err);
            return;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/appTemplate.html',
        providers: [validate_service_1.Validate]
    }),
    __metadata("design:paramtypes", [validate_service_1.Validate,
        http_1.Http,
        data_service_1.Data])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map