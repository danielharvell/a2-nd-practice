import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './appComponent';
import {FormsModule}   from '@angular/forms';
import {DetailsComponent}   from './details.component';
import {DataService}   from './data.service';
import {ndDatePipe}   from './ndDate.pipe';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule
     ],
    declarations: [
        AppComponent, 
        DetailsComponent,
        ndDatePipe
    ],
    bootstrap: [
        // DetailsComponent,
        AppComponent
    ],
    providers: [DataService]
})
export class AppModule {
    constructor(){}
 }
