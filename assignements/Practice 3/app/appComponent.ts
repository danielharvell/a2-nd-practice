import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Validate} from "./validate.service";
import {Data} from "./data.service";
import {DocumentInformation} from "./DocumentInformation";

@Component({
  selector: 'my-app',
  templateUrl: 'app/appTemplate.html',
  providers: [Validate, Data]
})
export class AppComponent implements OnInit {

  constructor(
    private valid: Validate, 
    private http : Http,
    public data : Data){}

  ngOnInit(){
   this.data.getRow();
  }

  public docRename(oldName:string){
    var newName = prompt("Rename "+ oldName +" to:");
    try{
      if(this.valid.documentName(newName)){
        this.data.row.standardAttributes.name = newName;
      }
    }
    catch(err){
      alert(err);
      return;
    }
  }
}
