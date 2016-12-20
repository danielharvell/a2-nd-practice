import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {DocumentInformation} from './DocumentInformation'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ListViewDataService {
    public docRow: DocumentInformation

    constructor(private http: Http) { }

    public getRows() {
        this.http.get("../singleRow.json").toPromise().then(data => {
            this.docRow = data.json() as DocumentInformation;
            console.log(this.docRow)
        });
    }
}