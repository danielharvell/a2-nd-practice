import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DocumentInformation} from "./DocumentInformation";

@Injectable()
export class Data{
    constructor(private http: Http){}
    row:DocumentInformation;

    public getRow(){
       this.http.get("../singleRow.json").toPromise().then(data => {
            this.row = data.json() as DocumentInformation;
        });  
    }
}