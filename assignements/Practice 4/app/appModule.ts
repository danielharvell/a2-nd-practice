import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from './app.component';
import {Details} from "./details.component";
import {MyCheckboxComponent} from "./mycheckbox.component";
import {Data} from "./data.service";
import {ndDate} from "./date.pipe";

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        Data
    ],
    declarations: [
        AppComponent, 
        Details, 
        ndDate, 
        MyCheckboxComponent
    ],
    bootstrap: [
        AppComponent, 
        Details
    ]
})
export class AppModule {
    constructor(){}
 }
