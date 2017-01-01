import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Validate} from "./validate.service";
import {Data} from "./data.service";
import {DocumentInformation} from "./DocumentInformation";

@Component({
  selector: 'my-app',
  templateUrl: 'app/appTemplate.html',
  providers: [Validate]
})
export class AppComponent implements OnInit {
  constructor(
    private valid: Validate, 
    private http : Http,
    public data : Data,){ }

  ngOnInit(){
   this.data.getRow();
  }
  
  selectRow(info:DocumentInformation){
    if(info.selected){
      this.data.selectedRow = info;
    }else{
      this.data.selectedRow = null;
    }
  }

  public docRename(row:DocumentInformation){
    var newName = prompt("Rename "+ row.standardAttributes.name +" to:", row.standardAttributes.name);
    try{
      if(this.valid.documentName(newName)){
        row.standardAttributes.name = newName;
      }
    }
    catch(err){
      alert(err);
      return;
    }
  }
}
