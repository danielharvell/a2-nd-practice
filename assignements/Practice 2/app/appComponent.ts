import { Component, OnInit } from '@angular/core';
import { Validate } from "./validate.service";
import { ListViewDataService } from "./listviewData.service";
import { DocumentInformation } from './DocumentInformation';

@Component({
  selector: 'my-app',
  templateUrl: 'app/appTemplate.html',
  providers: [Validate, DocumentInformation, ListViewDataService]
})
export class AppComponent {
  public docName: string;

  constructor(private valid: Validate,
    private lvData: ListViewDataService) {
    // this.docName = "Summary of Motion for Judgement";
  }

  private ngOnInit() {
    this.lvData.getRows()
  }

  public docRename(oldName: string) {
    var newName = prompt("Rename " + oldName + " to:");
    try {
      if (this.valid.documentName(newName)) {
        this.docName = newName;
      }
    }
    catch (err) {
      alert(err);
      return;
    }
  }
}
