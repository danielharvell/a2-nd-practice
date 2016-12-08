import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../services/validation.service';

@Component({
    moduleId: module.id,
    selector: 'listviewrow',
    providers : [ValidationService],
    templateUrl: 'listviewRow.component.html',
    styleUrls: ['./listviewRow.component.css']
})

export class ListviewRowComponent implements OnInit {

    public itemName: string;
    private validationService: ValidationService;

    constructor(validationService: ValidationService) { 
        this.itemName = this.items[0].standardAttributes.name;
        this.validationService = validationService;
    }

    ngOnInit() { }

    public rename(currentName: string) {
        var newName = prompt("Rename Item?", currentName);
        if(this.validationService.validateName(newName, currentName)){            
            this.itemName = newName;
        }
    }

    selected(rowIndex) {
        console.log(rowIndex)
    }

    private items: any[] = [
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
        }]
}