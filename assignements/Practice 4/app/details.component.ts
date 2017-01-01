import { Component, OnInit } from '@angular/core';
import {Data} from "./data.service";
import {DocumentInformation} from "./DocumentInformation";

@Component({
  selector: 'app-details',
  templateUrl: 'app/details.html'
})
export class Details implements OnInit {
    dateFormat:string = "M/d/yyyy";
    constructor(public data : Data){}

    ngOnInit(){}  
}
