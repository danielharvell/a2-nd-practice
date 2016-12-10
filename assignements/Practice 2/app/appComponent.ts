import { Component } from '@angular/core';
import {Validate} from "./validate.service"

@Component({
  selector: 'my-app',
  templateUrl: 'app/appTemplate.html',
  providers: [Validate]
})
export class AppComponent {
  public docName:string;

  constructor(private valid: Validate){
    this.docName = "Summary of Motion for Judgement";
  }

  public docRename(oldName:string){
    var newName = prompt("Rename "+ oldName +" to:");
    try{
      if(this.valid.documentName(newName)){
        this.docName = newName;
      }
    }
    catch(err){
      alert(err);
      return;
    }
  }
}
