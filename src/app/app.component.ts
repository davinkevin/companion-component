import { Component } from '@angular/core';

@Component({
  selector: 'cc-root',
  template: `
    <a routerLink="home">Home</a> <br/>
    <a routerLink="other">Other</a> <br/>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
