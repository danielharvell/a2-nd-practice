import { Component } from '@angular/core';

import { ListviewRowComponent } from './components/listviewRow.component';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to Angular!</h1>
            <h2>"Practice 1"</h2>
            <table  style="width: 100%">
              <tbody>
                <listviewrow>Loading...</listviewrow>
              </tbody>
            </table>
            `
})
export class AppComponent {
  constructor(){}  
}
