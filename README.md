# Companion Component

This project contains a simple helper class which is useful when we want to un-register observable from your component after it has been destroyed by the framework.

## Demo

```ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs/observable/timer';
import {CompanionComponent} from '@davinkevin/companion-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  v: any;
  c = new CompanionComponent(); //1

  ngOnInit() {
    const untilDestroy = this.c.untilDestroy(); //2

    timer(1, 100)
      .pipe(untilDestroy()) //3
      .subscribe(v => this.v = v);

    timer(1, 200)
      .pipe(untilDestroy()) //3
      .subscribe(v => this.v = v);
  }

  ngOnDestroy(): void {
    this.c.destroy(); //4
  }
}
```

**1** : We create the companion as soon as possible, during the instantiation of the component is good

**2** : We are extracting the Pipeable operator which can be used inside or observables...

**3** : We are using the previous operator where we need it. To keep visual coherent between operator, this is a closure which should be executed

**4** : When the component is destroyed, we are calling the destroy operation on our companion 😢. This ends the multiple observers created during the init phase.

  

