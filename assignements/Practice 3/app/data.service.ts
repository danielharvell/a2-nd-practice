import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DocumentInformation} from "./DocumentInformation";

@Injectable()
export class DataService{
    
    public selectedRow: DocumentInformation;
    row: DocumentInformation;
    rows: Array<DocumentInformation>;

    constructor(private http: Http){}

    public getRow(){
       this.http.get("../recentDocs.json").toPromise().then(data => {
            this.rows = data.json() as Array<DocumentInformation>;
        });  
    }
}