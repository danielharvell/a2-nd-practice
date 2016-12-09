import {Injectable} from "@angular/core";

@Injectable()
export class Validate{
    public documentName(newName:string) :boolean{
      if(!newName){ return false; }
      if(newName.indexOf("g") > -1){
        throw "Document names connot contain the letter \"g\"";
      }
      return true;
    }
}