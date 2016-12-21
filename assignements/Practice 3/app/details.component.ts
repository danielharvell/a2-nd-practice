import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'details-thing',
    templateUrl: '../app/details.component.html'
})
export class DetailsComponent implements OnInit {
    
    constructor(private data: DataService) { }

    ngOnInit() { 
    }
}