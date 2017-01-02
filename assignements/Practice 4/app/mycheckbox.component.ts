import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-checkbox',
     template: `
        <input type="checkbox" [(ngModel)]="itemChecked"/>
        <label (click)="clickHandler()">
            <ng-content *ngIf="itemChecked"></ng-content>
            <div [class.checked]="itemChecked"></div>
        </label>`,
    styles: [
        "input[type='checkbox']{ width: 0; margin: 0;}",
        "label{margin: 4px;}",
        "div{ background-color: #fff;height: 13px; width: 13px; display: inline-block; border: 1px solid black;}",
        "div.checked{ background: url('../app/images/checkmark.png') no-repeat top left;background-size: 13px}"
    ]
})
export class MyCheckboxComponent implements OnInit {
    @Input() public itemChecked: Boolean = false;
    @Output() itemCheckedChange: EventEmitter<any> = new EventEmitter();
    @Output() public change: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    clickHandler(){

        // if(!this.itemChecked){
        //     this.itemChecked = false;
        // }else{
        //     this.itemChecked = true;
        // }
        this.itemChecked = !this.itemChecked

        this.change.emit();
        this.itemCheckedChange.emit(this.itemChecked);
    }
}