import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DocumentInformation} from "./DocumentInformation";

@Injectable()
export class Data{
    constructor(private http: Http){}
    row:DocumentInformation;
    listRows:Array<DocumentInformation>;
    selectedRow:DocumentInformation;

    public getRow(){
       this.http.get("../recentDocs.json").toPromise().then(data => {
            this.listRows = data.json() as Array<DocumentInformation>;
        });  
    }
}