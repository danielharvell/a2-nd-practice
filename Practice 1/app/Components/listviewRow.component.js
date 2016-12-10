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
var validation_service_1 = require("../services/validation.service");
var ListviewRowComponent = (function () {
    function ListviewRowComponent(validationService) {
        this.items = [
            {
                "customAttributes": [],
                "location": {
                    "account": "CA-3ZQD3FL0",
                    "cabinet": "NG-K0NJ8NTR"
                },
                "misc": {
                    "approved": false,
                    "archived": false,
                    "deleted": false,
                    "echo": true,
                    "external": false,
                    "favorite": false,
                    "signed": false
                },
                "permissions": [
                    {
                        "administer": true,
                        "cabDefault": false,
                        "edit": true,
                        "noAccess": false,
                        "share": true,
                        "view": true
                    }
                ],
                "standardAttributes": {
                    "aclStatus": "thawed",
                    "checkedOutState": false,
                    "created": "\/Date(1480719084784)\/",
                    "createdBy": "Link to User Admin",
                    "createdByGuid": "DUCOT-FQ2K5B1H",
                    "envId": ":Ducot3:r:g:v:x:^F161202175124784.nev",
                    "extension": "ndfld",
                    "hoverTip": "Folder ACL - no profile",
                    "id": "4827-5919-6705",
                    "modified": "\/Date(1480719085738)\/",
                    "modifiedBy": "Link to User Admin",
                    "modifiedByGuid": "DUCOT-FQ2K5B1H",
                    "name": "was folderACL inerited",
                    "officialVer": 1,
                    "size": 1,
                    "syncMod": 20161202155125479,
                    "url": "https:\/\/ducot.netdocuments.com\/Ducot3\/r\/g\/v\/x\/^F161202175124784.nev",
                    "versions": 1
                }
            },
            {
                "customAttributes": [],
                "location": {
                    "account": "CA-3ZQD3FL0",
                    "cabinet": "NG-K0NJ8NTR"
                },
                "misc": {
                    "approved": false,
                    "archived": false,
                    "deleted": false,
                    "echo": true,
                    "external": false,
                    "favorite": false,
                    "signed": false
                },
                "permissions": [
                    {
                        "administer": true,
                        "cabDefault": false,
                        "edit": true,
                        "noAccess": false,
                        "share": true,
                        "view": true
                    }
                ],
                "standardAttributes": {
                    "aclStatus": "thawed",
                    "checkedOutState": false,
                    "created": "\/Date(1480719029306)\/",
                    "createdBy": "Link to User Admin",
                    "createdByGuid": "DUCOT-FQ2K5B1H",
                    "envId": ":Ducot4:k:a:o:f:~161202175029306.nev",
                    "extension": "pptx",
                    "id": "4827-4241-9489",
                    "modified": "\/Date(1480633039719)\/",
                    "modifiedBy": "Link to User Admin",
                    "modifiedByGuid": "DUCOT-FQ2K5B1H",
                    "name": "Checking if folder acl appears in ACL",
                    "officialVer": 1,
                    "size": 47,
                    "syncMod": 0,
                    "url": "https:\/\/ducot.netdocuments.com\/Ducot4\/k\/a\/o\/f\/~161202175029306.nev",
                    "versions": 1
                }
            }
        ];
        this.itemName = this.items[0].standardAttributes.name;
        this.validationService = validationService;
    }
    ListviewRowComponent.prototype.ngOnInit = function () { };
    ListviewRowComponent.prototype.rename = function (currentName) {
        var newName = prompt("Rename Item?", currentName);
        if (this.validationService.validateName(newName, currentName)) {
            this.itemName = newName;
        }
    };
    ListviewRowComponent.prototype.selected = function (rowIndex) {
        console.log(rowIndex);
    };
    return ListviewRowComponent;
}());
ListviewRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listviewrow',
        providers: [validation_service_1.ValidationService],
        templateUrl: 'listviewRow.component.html',
        styleUrls: ['./listviewRow.component.css']
    }),
    __metadata("design:paramtypes", [validation_service_1.ValidationService])
], ListviewRowComponent);
exports.ListviewRowComponent = ListviewRowComponent;
//# sourceMappingURL=listviewRow.component.js.map