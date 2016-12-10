import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './appComponent'
import {ListviewRowComponent} from './components/listviewRow.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [AppComponent, ListviewRowComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(){}
 }
